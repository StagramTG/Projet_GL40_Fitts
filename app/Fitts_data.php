<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fitts_data extends Model
{
    /* La table concernée */
    protected $table = 'fitts_datas';
    /* On précise qu'il n'y a pas de timestamp dans la table */
    public $timestamps = false;

    /* Champ valable pour assignation */
    protected $fillable = ['distance', 'diameter', 'a', 'b', 'entries_id', 'results_id'];

    /* Relation avec la table résultat */
    public function fitts_result()
    {
        return $this->hasOne('App\Fitts_result');
    }
    /* Relation avec la table entrie */
    public function fitts_test_entrie()
    {
        return $this->hasOne('App\Fitts_test_entrie');
    }
}
