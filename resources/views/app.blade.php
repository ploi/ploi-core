<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ setting('name') }}</title>

    <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet">

    @vite('resources/js/app.js')

    @if(config('cashier.key') && config('cashier.secret'))
        <script src="https://js.stripe.com/v3/"></script>
    @endif

    @if(file_exists($theme = storage_path('app/public/theme.css')))
        <link href="{{ asset('storage/theme.css') }}?v={{ md5_file($theme) }}" rel="stylesheet" />
    @endif

    @if($logo = setting('logo'))
        <link rel="icon" type="image/x-icon" href="{{ $logo }}">
    @endif

    @if(view()->exists('header'))
        {!! view('header')->render() !!}
    @endif

    @routes
</head>
<body>
    @inertia

    @if(view()->exists('footer'))
        {!! view('footer')->render() !!}
    @endif

    <x-impersonate::banner />
</body>
</html>
