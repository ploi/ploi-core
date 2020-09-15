@component('mail::message')
{{ __('Hi!') }}

@if($url)
{{ __('A new account has been created for you on :url, you can start by pressing the button below to create your password.', ['url' => config('app.url')]) }}

@component('mail::button', ['url' => $url])
{{ __('Create password') }}
@endcomponent
@else
{{ __('Welcome to :app, you can directly login with the credentials you have used when signing up.', ['app' => config('app.name')]) }}
@component('mail::button', ['url' => config('app.url')])
    {{ __('Visit') }}
@endcomponent
@endif
@endcomponent
