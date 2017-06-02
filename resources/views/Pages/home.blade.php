@extends('default/default')

@section('content')
<div class="content">

        <h1>
            <span class="big-title">Accueil Fitts</span>
        </h1>

        {{-- Explications du concept du site --}}

        {{-- Choix des différents tests --}}
        <h2>Différents tests disponibles</h2>
        <p>
            Veuillez retrouver ci-dessous les différents tests proposés pour les lois en lien avec
            les IHM.
        </p>

        <div class="btn-panel">
            {{-- Ici on met les boutons pour les choix de tests --}}
            <div class="btn-fitts btn-test">
                <span>FITTS</span>
            </div>

            <div class="btn-goms btn-test">
                <span>GOMS</span>
            </div>

            <div class="btn-stats btn-test">
                <span>Statistiques</span>
            </div>

            <a href="{{ url('about') }}"><div class="btn-about btn-test">
                <span>A propos</span>
            </div></a>
        </div>

</div>
@endsection
