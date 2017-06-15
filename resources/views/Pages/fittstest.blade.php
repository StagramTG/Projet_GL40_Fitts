@extends('default/default')

@section('content')
<div class="content">

    <a href="{{ url('home') }}">Retour à l'accueil</a>
    <h1>
        <span class="big-title">Test de fitts</span>
    </h1>

    <div id="canvas">
        {{-- Ici on place le canvas de P5.js --}}
    </div>

    <div class="send_btn">
        {{-- Ici on place le bouton d'envoi à la fin du test --}}
    </div>

    <script>
        var post_url = '{{ url('fittstest.send') }}';
    </script>

    <script src="{{ asset('js/jquery.min.js') }}"></script>
    <script src="{{ asset('js/p5.min.js') }}"></script>
    <script src="{{ asset('js/fitts/app.js') }}"></script>
</div>
@endsection
