<?php

namespace App\Console\Commands\Core;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;

class Css extends Command
{
    protected $signature = 'core:css';

    protected $description = 'Generates an theme.css file for you to customize';

    public function handle()
    {
        if(file_exists(storage_path('app/public/theme.css')) && !$this->confirm('You seem to already have a theme.css published, are you sure you want to overwrite?')){
            $this->warn('Aborted publishing of theme.css.');

            return 0;
        }

        $this->info('Publishing theme.css file..');

        (new Filesystem)->copy(
            __DIR__ . '/stubs/theme.css',
            storage_path('app/public/theme.css')
        );

        $this->info('Done! You can edit the theme.css file inside storage/public/theme.css');
    }
}
