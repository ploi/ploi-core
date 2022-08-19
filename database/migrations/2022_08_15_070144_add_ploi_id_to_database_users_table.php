<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration {
    public function up()
    {
        Schema::table('database_users', function (Blueprint $table) {
            $table->bigInteger('ploi_id', false, true)->nullable()->after('id');
        });
    }
};
