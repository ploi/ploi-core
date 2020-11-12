<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDocumentationCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('documentation_categories', function (Blueprint $table) {
            $table->id();

            $table->string('title')->nullable();
            $table->text('description')->nullable();

            $table->timestamps();
        });

        Schema::table('documentation_items', function (Blueprint $table) {
            $table->bigInteger('documentation_category_id')->after('content')->unsigned()->nullable();
            $table->foreign('documentation_category_id')->references('id')->on('documentation_categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('documentation_categories');

        Schema::table('documentation_items', function (Blueprint $table) {
            $table->dropColumn('documentation_category_id');
        });
    }
}
