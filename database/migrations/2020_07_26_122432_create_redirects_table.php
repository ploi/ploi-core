<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRedirectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('redirects', function (Blueprint $table) {
            $table->id();

            $table->string('status')->default(\App\Models\Redirect::STATUS_BUSY)->nullable();

            $table->bigInteger('ploi_id', false, true)->nullable();
            $table->string('redirect_from')->nullable();
            $table->string('redirect_to')->nullable();
            $table->string('type')->default('redirect')->nullable();

            $table->bigInteger('site_id')->unsigned()->nullable();
            $table->foreign('site_id')->references('id')->on('sites');

            $table->bigInteger('server_id')->unsigned()->nullable();
            $table->foreign('server_id')->references('id')->on('servers');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('redirects');
    }
}
