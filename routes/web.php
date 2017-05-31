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
Route::get('/', "Pages@home");

/* Route vers la page à propos */
Route::get('/about', 'Page@about');

/* Routes vers les tests de Fitts */

/* Routes vers les tests de Keystroke & GOMS */

/* Routes vers les stats */

/* Routes pour AJAX */