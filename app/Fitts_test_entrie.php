<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fitts_test_entrie extends Model
{
    /* La table concernée */
    protected $table = 'fitts_test_entries';

    /* Champ valable pour assignation */
    protected $fillable = ['theorical_result', 'pratical_result'];
}
