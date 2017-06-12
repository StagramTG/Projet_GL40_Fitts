<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGomsDatas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('goms_datas', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('entries_id')->unsigned();
            $table->foreign('entries_id')
                            ->references('id')->on('goms_test_entries');
            $table->integer('results_id')->unsigned();
            $table->foreign('results_id')
                            ->references('id')->on('goms_results');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('goms_datas');
    }
}
