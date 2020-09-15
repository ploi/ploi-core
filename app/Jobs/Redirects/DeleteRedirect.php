<?php

namespace App\Jobs\Redirects;

use App\Services\Ploi\Ploi;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class DeleteRedirect implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $serverPloiId;
    public $sitePloiId;
    public $redirectPloiId;

    /**
     * Create a new job instance.
     *
     * @param $serverPloiId
     * @param $sitePloiId
     * @param $redirectPloiId
     */
    public function __construct($serverPloiId, $sitePloiId, $redirectPloiId)
    {
        $this->serverPloiId = $serverPloiId;
        $this->sitePloiId = $sitePloiId;
        $this->redirectPloiId = $redirectPloiId;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if (!$this->serverPloiId || !$this->redirectPloiId) {
            return;
        }

        $ploi = new Ploi(config('services.ploi.token'));

        $ploi->server($this->serverPloiId)
            ->sites($this->sitePloiId)
            ->redirects()
            ->delete($this->redirectPloiId);
    }
}
