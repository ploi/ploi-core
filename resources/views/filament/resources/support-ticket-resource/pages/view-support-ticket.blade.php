@php use App\Models\SupportTicket;use App\Models\SupportTicketReply; @endphp
@php
    /** @var SupportTicket $record */
    $messages = $record->replies->collect()->prepend($record);
@endphp

<x-filament::page>
    <div class="w-full space-y-4">
        @foreach($messages as $message)
            <div class="flex flex-row flex-nowrap gap-x-4 bg-white rounded-md px-4 py-4">
                <div class="flex-grow-0 flex-shrink-0">
                    <img src="{{ $message->user->avatar }}" alt="{{ $message->user->name }}" class="w-8 h-8 rounded-full">
                </div>
                <div class="">
                    <h3 class="font-semibold">
                        {{ $message->user->name }}
                    </h3>
                    <p>
                        {!! $message->contentHtml !!}
                    </p>
                </div>
            </div>
        @endforeach
    </div>
    <div>
        @if($record->status === SupportTicket::STATUS_CLOSED)
            <p>{{ __('Ticket closed.') }}</p>
        @else
            <form wire:submit.prevent="reply">
                {{ $this->form }}

                <x-filament-support::button type="submit" class="mt-4">
                    {{ __('Reply') }}
                </x-filament-support::button>
            </form>
        @endif
    </div>
</x-filament::page>
