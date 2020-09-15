@component('mail::message')
{{ __('Hi!') }}

{{ __('Your support ticket has been replied to. You may view the ticket by clicking the button below.') }}

@component('mail::button', ['url' => route('support.show', $ticket->id)])
    {{ __('View ticket') }}
@endcomponent
@endcomponent
