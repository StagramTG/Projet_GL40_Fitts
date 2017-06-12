<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RenameTestentries extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('test_entries', function (Blueprint $table) {
            Schema::rename('test_entries', 'fitts_test_entries');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('test_entries', function (Blueprint $table) {
            Schema::rename('fitts_test_entries', 'test_entries');
        });
    }
}
