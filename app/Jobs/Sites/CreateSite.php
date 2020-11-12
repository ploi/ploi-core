<?php

namespace App\Jobs\Sites;

use App\Models\Site;
use App\Services\Ploi\Ploi;
use Illuminate\Support\Arr;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class CreateSite implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $site;

    /**
     * Create a new job instance.
     *
     * @param Site $site
     */
    public function __construct(Site $site)
    {
        $this->site = $site;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $ploi = new Ploi(config('services.ploi.token'));

        $systemUser = $this->site->getSystemUser();

        $ploiSite = $ploi->server($this->site->server->ploi_id)->sites()->create(
            $this->site->domain,
            '/public',
            '/',
            Arr::get($systemUser, 'user_name'),
            decrypt(Arr::get($systemUser, 'ftp_password'))
        );

        $this->site->ploi_id = $ploiSite->data->id;
        $this->site->save();

        // Lets fetch the status after 5 seconds
        dispatch(new FetchSiteStatus($this->site))->delay(now()->addSeconds(3));
    }

    public function failed(\Exception $exception)
    {
        $this->site->delete();
    }
}
