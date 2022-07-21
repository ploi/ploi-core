<?php

namespace App\Jobs\Sites;

use Throwable;
use App\Models\Site;
use App\Traits\HasPloi;
use Illuminate\Support\Arr;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class CreateSite implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, HasPloi;

    public function __construct(
        public Site $site,
    ) {
    }

    public function handle(): void
    {
        $systemUser = $this->site->getSystemUser();

        $ploiSite = $this->getPloi()->server($this->site->server->ploi_id)->sites()->create(
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

    public function failed(Throwable $exception): void
    {
        $this->site->delete();

        if (app()->isLocal()) {
            throw $exception;
        }
    }
}
