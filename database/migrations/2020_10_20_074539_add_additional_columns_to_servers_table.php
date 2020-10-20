<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddAdditionalColumnsToServersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('servers', function (Blueprint $table) {
            $table->bigInteger('provider_id')->after('maximum_sites')->unsigned()->nullable();
            $table->foreign('provider_id')->references('id')->on('providers');

            $table->bigInteger('provider_plan_id')->after('provider_id')->unsigned()->nullable();
            $table->foreign('provider_plan_id')->references('id')->on('provider_plans');

            $table->bigInteger('provider_region_id')->after('provider_plan_id')->unsigned()->nullable();
            $table->foreign('provider_region_id')->references('id')->on('provider_regions');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('servers', function (Blueprint $table) {
            //
        });
    }
}
