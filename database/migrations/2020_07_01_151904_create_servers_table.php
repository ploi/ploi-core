<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servers', function (Blueprint $table) {
            $table->id();

            $table->string('status')->default(\App\Models\Server::STATUS_BUSY)->nullable();

            $table->bigInteger('ploi_id', false, true)->nullable();
            $table->string('name')->nullable();
            $table->string('ip')->nullable();
            $table->string('internal_ip')->nullable();
            $table->unsignedInteger('ssh_port')->default(22);
            $table->json('available_php_versions')->nullable();

            $table->unsignedInteger('maximum_sites')->default(30);

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
        Schema::dropIfExists('servers');
    }
}
