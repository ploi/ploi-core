<?php

namespace App\Console\Commands\Core;

use Carbon\Carbon;
use App\Models\SystemLog;
use Illuminate\Console\Command;

class Cleanup extends Command
{
    protected $signature = 'core:cleanup';

    protected $description = 'Clean up any old logs';

    public function handle()
    {
        $rotationDate = $this->getRotationDate();

        $rotated = SystemLog::query()
            ->where('created_at', '<', $rotationDate)
            ->delete();

        $this->info('Rotated ' . $rotated . ' system logs!');

        return Command::SUCCESS;
    }

    protected function getRotationDate(): Carbon
    {
        switch (setting('rotate_logs_after')) {
            case 'weeks-1':
                return now()->subWeek();
                break;
            case 'months-1':
                return now()->subMonth();
                break;
            case 'months-3':
                return now()->subMonths(3);
                break;
            case 'months-6':
                return now()->subMonths(6);
                break;
            case 'years-1':
                return now()->subYear();
                break;
            case 'years-2':
                return now()->subYears(2);
                break;
            case 'years-3':
                return now()->subYears(3);
                break;
            case 'years-4':
                return now()->subYears(4);
                break;
        }
    }
}
