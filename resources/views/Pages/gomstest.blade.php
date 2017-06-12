@extends('default/default')

@section('content')
<div class="content">

    <a href="{{ url('home') }}">Retour à l'accueil</a>
    <h1>
        <span class="big-title">Test de GOMS</span>
    </h1>

    <div id="canvas">
        {{-- Ici on place le canvas de P5.js --}}
    </div>

    <script src="{{ asset('js/p5.min.js') }}"></script>
    <script src="{{ asset('js/goms/app.js') }}"></script>
</div>
@endsection
