<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{ ('GL40 | ' . $title) }}</title>

    {{-- Inclusion du css --}}
    <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    {{-- Header et NavBar --}}

    @yield('content')

    {{-- Footer --}}

    {{-- Inclusion du JS --}}
</body>
</html>