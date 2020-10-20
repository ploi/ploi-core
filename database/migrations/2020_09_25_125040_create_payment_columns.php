<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('packages', function (Blueprint $table) {
            $table->decimal('price_hourly', 10, 4)->after('maximum_servers')->default(0);
            $table->decimal('price_monthly', 10, 4)->after('price_hourly')->default(0);
            $table->string('plan_id')->after('price_monthly')->nullable();
            $table->string('currency')->after('plan_id')->default(\App\Models\Package::CURRENCY_USD);
        });

        Schema::table('users', function (Blueprint $table) {
            $table->text('billing_details')->after('notes')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('packages', function (Blueprint $table) {
            $table->dropColumn('price_hourly', 'price_monthly', 'plan_id', 'currency');
        });

        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('billing_details');
        });
    }
}
