<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSiteSystemUserAttached extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('site_system_user_attached', function (Blueprint $table) {
            $table->bigInteger('site_id')->unsigned()->nullable();
            $table->foreign('site_id')->references('id')->on('sites');

            $table->bigInteger('site_system_user_id')->unsigned()->nullable();
            $table->foreign('site_system_user_id')->references('id')->on('site_system_users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('site_system_user_attached');
    }
}
