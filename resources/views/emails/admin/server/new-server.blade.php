@component('mail::message')
{{ __('Hi!') }}

{{ __('A new server with the name :server has been created by the user :user.', ['server' => $server->name, 'user' => $user->name]) }}

@component('mail::button', ['url' => \App\Filament\Resources\UserResource::getUrl('edit', ['record' => $user])])
    {{ __('View user') }}
@endcomponent
@endcomponent
