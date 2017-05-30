<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{ $title; }}</title>

    {{-- Inclusion du css --}}
    {{ HTML::style('css/app.css'); }}
</head>
<body>
    {{-- Header et NavBar --}}

    @yield('content')

    {{-- Footer --}}

    {{-- Inclusion du JS --}}
</body>
</html>