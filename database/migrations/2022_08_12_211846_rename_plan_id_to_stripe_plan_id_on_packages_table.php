<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration {
    public function up()
    {
        Schema::table('packages', function (Blueprint $table) {
            $table->renameColumn('plan_id', 'stripe_plan_id');
        });
    }

    public function down()
    {
        Schema::table('packages', function (Blueprint $table) {
            $table->renameColumn('stripe_plan_id', 'plan_id');
        });
    }
};
