<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fitts_result extends Model
{
    /* La table concernée */
    protected $table = 'fitts_results';
    /* On précise qu'il n'y a pas de timestamp dans la table */
    public $timestamps = false;

    /* Champ valable pour assignation */
    protected $fillable = ['theorical_result', 'practical_result'];
}
