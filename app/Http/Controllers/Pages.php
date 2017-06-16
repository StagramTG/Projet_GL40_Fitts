<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Input;

use App\Fitts_result;

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
        CONTROLLER POUR AJAX
    */
    public function fittsTestPost(Request $request)
    {
        $r = new Fitts_result;
        $r->fill(['pratical_result' => $request['elapsedTimes'][0], 'theorical_result' => $request['elapsedTimes'][1]]);
        $r->save();

        dd($r);
    }
}
