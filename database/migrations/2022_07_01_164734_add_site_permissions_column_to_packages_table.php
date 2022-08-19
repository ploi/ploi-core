<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration {
    public function up()
    {
        // For some reason SQLite thinks that these columns don't exist, so that's why conditionally creating them.
        if (! Schema::hasColumn('packages', 'site_permissions')) {
            Schema::table('packages', function (Blueprint $table) {
                $table->json('site_permissions')->nullable()->after('server_permissions');
            });
        }

        if (! Schema::hasColumn('packages', 'server_permissions')) {
            Schema::table('packages', function (Blueprint $table) {
                $table->json('server_permissions')->nullable()->after('maximum_servers');
            });
        }
    }

    public function down()
    {
        //
    }
};
