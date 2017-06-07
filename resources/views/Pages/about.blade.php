@extends('default/default')

@section('content')
<div class="content">

    <a href="{{ url('home') }}">Retour à l'accueil</a>
    <h1>
        <span class="big-title">A propos de ce site</span>
    </h1>
    <div class="text-panel">
        <p>
            Ce site est né dans le cadre de la réalisation d'un projet de l'UV GL40 (Interface homme/machine et perception) par trois étudiants
            de l'UTBM :

            <ul>
                <li>Rémi Ponnelle</li>
                <li>Emilien Moncan</li>
                <li>Thomas Gredin</li>
            </ul>
        </p>
        <p>
            Elle a pour but de proposer deux différents tests, chacun basés sur un principe vu en cours, et de comparer nos résultats avec d'autres.

            <ul>
                <li>Le premier, basé sur la loi de Fitts, a pour but de cliquer sur des cibles qui apparaitront les unes après les autres</li>
                    <ul>
                        <li>10 cibles apparaissent sur l'écran, le but est d'analyser le temps mis par l'utilisateur pour déplacer la souris et cliquer sur la cible à chaque fois.</li>
                    </ul>
                <li>Le second, basé sur la loi de GOMS, a pour but d'analyser le temps mis par un utilisateur pour parcourir une arborescence de dossiers.</li>
            </ul>
        </p>
    </div>

</div>
@endsection
