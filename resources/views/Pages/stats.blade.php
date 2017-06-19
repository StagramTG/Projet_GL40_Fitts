@extends('default/default')

@section('content')
<div class="content">

    <a href="{{ url('home') }}">Retour à l'accueil</a>
    <h1>
        <span class="big-title">Statistiques</span>
    </h1>

    <canvas class="fitts_chart">
        {{-- Ici on met le graphe avec les stats de fitts --}}
    </canvas>

    <script>

        /** Lien pour la requête GET AJAX */
        var url = '{{ route('stats.fitts.get') }}';

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
