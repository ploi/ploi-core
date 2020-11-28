<?php

namespace App\Console\Commands\Core;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;

class CssBackup extends Command
{
    protected $signature = 'core:css-backup';

    protected $description = 'Creates a backup from your own created theme.css';

    public function handle()
    {
        if(!file_exists(storage_path('app/public/theme.css'))){
            $this->warn('There is no custom theme.css, aborting backup.');

            return 0;
        }

        $this->info('Backing up theme.css file..');

        (new Filesystem)->copy(
            storage_path('app/public/theme.css'),
            storage_path('app/public/theme-backup.css')
        );

        $this->info('Done! You can find the CSS backup file here storage/public/theme-backup.css');
    }
}
