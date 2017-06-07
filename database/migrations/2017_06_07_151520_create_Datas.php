<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDatas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('datas', function (Blueprint $table) {
            $table->increments('id');
            $table->float('distance');
            $table->float('diameter');
            $table->float('a');
            $table->float('b');
            $table->foreign('entries_id')
                            ->references('id')->on('test_entries')
                            ->onDelete('cascade');
           $table->foreign('results_id')
                            ->references('id')->on('results')
                            ->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('datas');
    }
}
