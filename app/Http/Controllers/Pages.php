<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Pages extends Controller
{
    /*
        Constructeur
    */
    public function __construct()
    {
    }

    /*
        Page d'accueil du site
    */
    public function home()
    {
        return view('home');
    }
}
