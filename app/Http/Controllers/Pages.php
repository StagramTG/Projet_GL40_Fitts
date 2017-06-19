<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Input;

use App\Fitts_result;
use App\Fitts_test_entrie;
use App\Fitts_data;

class Pages extends Controller
{
    /*
        Constructeur
    */
    public function __construct()
    {
    }

    /*
        PAGES CLASSIQUES
    */

    /*
        Page d'accueil du site
    */
    public function home()
    {
        return view('Pages.home', ['title' => 'Accueil']);
    }

    /*
        Page à propos du site
    */
    public function about()
    {
        return view('Pages.about', ['title' => 'A propos']);
    }

    /*
        Page pour le test de la loi de fitts
    */
    public function fittsTest()
    {
        return view('Pages.fittstest', ['title' => 'Test de la loi de fitts']);
    }

    /*
        Page pour le test de la loi de GOMS
    */
    public function gomsTest()
    {
        return view('Pages.gomstest', ['title' => 'Test de la loi de GOMS']);
    }

    /*
        Page pour les statistiques de fitts et GOMS
    */
    public function stats()
    {
        return view('Pages.stats', ['title' => 'Statistiques']);
    }

    /*
        CONTROLLERS POUR AJAX
    */

    /* Ajout du résultat d'un test dans BDD */
    public function fittsTestPost(Request $request)
    {
        /* Créer une entrée de test */
        $entry = Fitts_test_entrie::create();
        $entry->save();

        /* Tant que des résultats */
        for($i = 1; $i < count($request['elapsedTimes']); $i++)
        {
            /* Calcul de la valeur théorique suivant la loi de Fitts */
            $distance = sqrt(pow($request['mouseStarts'][$i][0] - $request['mouseStarts'][$i - 1][0], 2) + pow($request['mouseStarts'][$i][1] - $request['mouseStarts'][$i - 1][0], 2));
            $theoricalResult = 0.1 + 0.1 * log(1 + ($distance / $request['targetSize'][$i]), 2);

            /* Créer le résultat */
            $result = Fitts_result::create(['pratical_result' => $request['elapsedTimes'][$i], 'theorical_result' => $theoricalResult]);
            $result->save();

            /* Créer le data */
            $data = Fitts_data::create([
                'distance' => $distance, 
                'diameter' => $request['targetSize'][$i], 
                'a' => 0.1, 
                'b' => 0.1, 
                'entries_id' => $entry->id, 
                'results_id' => $result->id
            ]);
            $data->save();
        }

        return response()->json();
    }

    /* Récupération des infos sur les tests de fitts */
    public function statsfittsdatas()
    {
        return response()->json();
    }
}
