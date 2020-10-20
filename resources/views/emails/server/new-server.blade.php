@component('mail::message')
{{ __('Hi!') }}

{{ __('You have created a new server :server, installation usually takes around 15 to 20 minutes. You will receive a email upon completion.', ['server' => $server->name]) }}

@component('mail::button', ['url' => route('servers.index')])
    {{ __('View servers') }}
@endcomponent
@endcomponent
