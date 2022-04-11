@component('mail::message')
{{ __('Hi!') }}

{{ __('A new site with the name **:site** has been created by the user :user.', ['site' => $site->domain, 'user' => $user->name]) }}

{{ __('This site has been created on the server **:server**, the server currently has **:sites** of **:max** left.', ['server' => $server->name, 'sites' => $server->sites()->count(), 'max' => $server->maximum_sites]) }}

@component('mail::button', ['url' => route('admin.users.show', $user->id)])
{{ __('View user') }}
@endcomponent
@endcomponent
