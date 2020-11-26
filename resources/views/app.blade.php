<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Ploi Core</title>

    <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet">

    <link href="{{ mix('/css/app.css') }}" rel="stylesheet"></link>
    <script src="{{ mix('/js/app.js') }}" defer></script>

    @if(config('cashier.key') && config('cashier.secret'))
        <script src="https://js.stripe.com/v3/"></script>
    @endif

    @if(file_exists(storage_path('app/public/theme.css')))
        <link href="{{ asset('storage/theme.css') }}" rel="stylesheet"></link>
    @endif

    @routes
</head>
<body>
@inertia
</body>
</html>
