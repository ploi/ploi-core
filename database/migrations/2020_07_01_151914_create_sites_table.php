<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sites', function (Blueprint $table) {
            $table->id();

            $table->string('status')->default(\App\Models\Site::STATUS_BUSY)->nullable();

            $table->bigInteger('ploi_id', false, true)->nullable();

            $table->string('domain')->nullable();
            $table->string('project')->nullable();
            $table->string('php_version')->nullable()->default('7.4');
            $table->text('dns_id')->nullable();

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
        Schema::dropIfExists('sites');
    }
}
