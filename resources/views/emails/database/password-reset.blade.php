@component('mail::message')
    {{ __('Hi!') }}

    {{ __('The password for your database :database has been reset to :newPassword. You should update your applications to use the new password for your applications to keep working.', ['database' => $database->name, 'newPassword' => $newPassword]) }}
@endcomponent
