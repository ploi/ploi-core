<?php

namespace App\Filament\Resources\SupportTicketResource\Pages;

use App\Filament\Resources\SupportTicketResource;
use App\Mail\Support\TicketRepliedToEmail;
use App\Models\SupportTicket;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Notifications\Notification;
use Filament\Pages\Actions\Action;
use Filament\Resources\Pages\Page;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class ViewSupportTicket extends Page
{
    protected $listeners = [
        '$refresh',
    ];

    protected static string $resource = SupportTicketResource::class;

    protected static string $view = 'filament.resources.support-ticket-resource.pages.view-support-ticket';

    public SupportTicket $record;

    public array $data = [];

    public function getTitle(): string
    {
        return __('View ticket') . ': ' . $this->record->title;
    }

    protected function getActions(): array
    {
        return [
            Action::make('close')
                ->label(__('Close'))
                ->action(function (self $livewire) {
                    $livewire->record->status = SupportTicket::STATUS_CLOSED;
                    $livewire->record->save();

                    Notification::make()
                        ->body(__('Ticket closed'))
                        ->success()
                        ->send();

                    $livewire->redirectRoute('filament.resources.support-tickets.view', $livewire->record);
                })
                ->visible(fn (self $livewire) => $livewire->record->status !== SupportTicket::STATUS_CLOSED)
                ->color('danger'),
            Action::make('reopen')
                ->label(__('Reopen'))
                ->action(function (self $livewire) {
                    $livewire->record->status = SupportTicket::STATUS_OPEN;
                    $livewire->record->save();

                    Notification::make()
                        ->body(__('Ticket reopened'))
                        ->success()
                        ->send();

                    $livewire->redirectRoute('filament.resources.support-tickets.view', $livewire->record);
                })
                ->visible(fn (self $livewire) => $livewire->record->status === SupportTicket::STATUS_CLOSED)
                ->color('primary'),
        ];
    }

    public function mount(): void
    {
        $this->form->fill();
    }

    protected function getFormSchema(): array
    {
        return [
            MarkdownEditor::make('content')
                ->label(__('Reply'))
                ->required(),
        ];
    }

    protected function getFormStatePath(): ?string
    {
        return 'data';
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
        $this->emit('$refresh');

        Notification::make()
            ->body(__('Reply sent'))
            ->success()
            ->send();
    }

    public function close(): void {}
}
