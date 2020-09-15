@component('mail::message')
{{ __('Hi!') }}

{{ __('A new support ticket has came in. Press the button below to view the ticket.') }}

@component('mail::button', ['url' => route('admin.support.show', $supportTicket->id)])
    {{ __('View ticket') }}
@endcomponent
@endcomponent
