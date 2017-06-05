@extends('default/default')

@section('content')
<div class="content">

    <a href="{{ url('home') }}">Retour à l'accueil</a>
    <h1>
        <span class="big-title">Test de fitts</span>
    </h1>

    <div class="p5js">
        {{-- Ici on place le canvas de P5.js --}}
    </div>

    <script src="{{ asset('js/fitts/app.js') }}"></script>
</div>
@endsection
