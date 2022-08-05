<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

return new class extends Migration
{
    public function up()
    {
        $currentLogoPath = setting('logo');

        if ( ! $currentLogoPath ) {
            return;
        }

        $currentFileName = Str::of($currentLogoPath)->after('/storage/logo/')->ltrim('/');

        Storage::disk('logos')->put($currentFileName, file_get_contents(Storage::path("public/logo/" . $currentFileName)));
        //        Storage::delete($currentLogoPath);

        setting(['logo' => $currentFileName]);
    }

    public function down()
    {
        $currentFileName = setting('logo');

        if ( ! $currentFileName ) {
            return;
        }

        Storage::put($path = "logo/{$currentFileName}", Storage::disk('logos')->path($currentFileName));

        Storage::disk('logos')->delete($currentFileName);
        setting(['logo' => "/storage/{$path}"]);
    }
};
