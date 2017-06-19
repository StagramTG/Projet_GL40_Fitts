<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* Route vers la page d'accueille */
Route::get('/', "Pages@home")->name('home');
Route::get('/home', "Pages@home")->name('home');

/* Route vers la page à propos */
Route::get('/about', 'Pages@about')->name('about');

/* Routes vers les tests de Fitts */
Route::get('/fittstest', 'Pages@fittsTest')->name('fittstest');

/* Routes vers les tests de Keystroke & GOMS */
Route::get('/gomstest', 'Pages@gomsTest')->name('gomstest');

/* Routes vers les stats */
Route::get('/stats', 'Pages@stats')->name('stats');

/* 
    Routes pour AJAX 
*/

/* Route pour poster les résultats dans la base de donnée ! */
Route::post('/fittstest/send', 'Pages@fittsTestPost')->name('fittsTestPost');

/* Route pour récupérer les données de la BDD et faire les stats */
Route::get('/stats/fittsdatas', 'Pages@statsfittsdatas')->name('statsFittsGet');