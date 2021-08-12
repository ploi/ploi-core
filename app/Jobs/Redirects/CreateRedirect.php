<?php

namespace App\Jobs\Redirects;

use App\Traits\HasPloi;
use App\Models\Redirect;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class CreateRedirect implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, HasPloi;

    public $redirect;

    /**
     * Create a new job instance.
     *
     * @param Redirect $redirect
     */
    public function __construct(Redirect $redirect)
    {
        $this->redirect = $redirect;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $ploiRedirect = $this->getPloi()
            ->server($this->redirect->server->ploi_id)
            ->sites($this->redirect->site->ploi_id)
            ->redirects()
            ->create(
                $this->redirect->redirect_from,
                $this->redirect->redirect_to,
                $this->redirect->type
            );

        $this->redirect->ploi_id = $ploiRedirect->id;
        $this->redirect->save();

        // Lets fetch the status after 5 seconds
        dispatch(new FetchRedirectStatus($this->redirect))->delay(now()->addSeconds(3));
    }
}
