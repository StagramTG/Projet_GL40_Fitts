@extends('default/default')

@section('content')
<div class="content">

    <a href="{{ url('home') }}">Retour à l'accueil</a>
    <h1>
        <span class="big-title">Statistiques</span>
    </h1>

    <h3>Test de Fitts : Cibles touché par rapport au temps</h3>
    <canvas class="fitts_chart_nb">
        {{-- Ici on met le graphe avec les stats de fitts --}}
    </canvas>

    <h3>Test de Fitts : Relation taille des cibles et temps</h3>
    <canvas class="fitts_chart_size">
        {{-- Ici on met le graphe avec les stats de fitts --}}
    </canvas>

    <div class="ajax-result">
    </div>

    <script>

        /** Lien pour la requête GET AJAX */
        var url = '{{ route('statsFittsGet') }}';

        /** CRSF-Key */
        var crsf_tocken = '{{ csrf_token() }}';
        
        /** Route vers la page home */
        var home_url = '{{ route('home') }}';

    </script>

    <script src="{{ asset('js/jquery.min.js') }}"></script>
    <script src="{{ asset('js/chart.min.js') }}"></script>
    <script src="js/stats/app.js"></script>
</div>
@endsection
