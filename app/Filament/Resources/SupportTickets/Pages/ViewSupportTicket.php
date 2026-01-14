<?php

namespace App\Filament\Resources\SupportTickets\Pages;

use Filament\Actions\Action;
use Filament\Actions;
use App\Models\SupportTicket;
use Filament\Resources\Pages\Page;
use Filament\Schemas\Schema;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Filament\Notifications\Notification;
use App\Mail\Support\TicketRepliedToEmail;
use Filament\Forms\Components\MarkdownEditor;
use App\Filament\Resources\SupportTickets\SupportTicketResource;

class ViewSupportTicket extends Page implements HasForms
{
    use InteractsWithForms;
    protected static string $resource = SupportTicketResource::class;

    protected string $view = 'filament.resources.support-ticket-resource.pages.view-support-ticket';

    public SupportTicket $record;

    public array $data = [];

    public function getTitle(): string
    {
        return __('View ticket') . ': ' . $this->record->title;
    }

    protected function getHeaderActions(): array
    {
        return [
            Action::make('close')
                ->label(__('Close'))
                ->action(function (self $livewire) {
                    $livewire->record->status = SupportTicket::STATUS_CLOSED;
                    $livewire->record->save();

                    Notification::make()
                        ->title(__('Ticket closed'))
                        ->success()
                        ->send();

                    $livewire->redirect(SupportTicketResource::getUrl('view', ['record' => $livewire->record]));
                })
                ->visible(fn (self $livewire) => $livewire->record->status !== SupportTicket::STATUS_CLOSED)
                ->color('danger'),
            Action::make('reopen')
                ->label(__('Reopen'))
                ->action(function (self $livewire) {
                    $livewire->record->status = SupportTicket::STATUS_OPEN;
                    $livewire->record->save();

                    Notification::make()
                        ->title(__('Ticket reopened'))
                        ->success()
                        ->send();

                    $livewire->redirect(SupportTicketResource::getUrl('view', ['record' => $livewire->record]));
                })
                ->visible(fn (self $livewire) => $livewire->record->status === SupportTicket::STATUS_CLOSED)
                ->color('primary'),
        ];
    }

    public function mount(): void
    {
        $this->form->fill();
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->statePath('data')
            ->components([
                MarkdownEditor::make('content')
                    ->label(__('Reply'))
                    ->required(),
            ]);
    }

    public function reply(): void
    {
        $state = $this->form->getStateOnly(['content']);

        $this->record->status = SupportTicket::STATUS_SUPPORT_REPLY;
        $this->record->save();

        $reply = $this->record->replies()->create($state);
        $reply->user_id = Auth::id();
        $reply->save();

        Mail::to($this->record->user)->send(new TicketRepliedToEmail($this->record));

        $this->form->fill();
        $this->dispatch('$refresh');

        Notification::make()
            ->title(__('Reply sent'))
            ->success()
            ->send();
    }

    public function close(): void
    {
    }
}
