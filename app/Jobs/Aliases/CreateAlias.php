<?php

namespace App\Jobs\Aliases;

use App\Models\Site;
use App\Traits\HasPloi;
use App\Models\Certificate;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Jobs\Certificates\CreateCertificate;
use App\Jobs\Certificates\DeleteCertificate;

class CreateAlias implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, HasPloi;

    public function __construct(
        public Site $site,
        public string $alias,
        public bool $requestNewCertificate = false,
    ) {
    }

    public function handle()
    {
        $this->getPloi()
            ->server($this->site->server->ploi_id)
            ->sites($this->site->ploi_id)
            ->aliases()
            ->create([$this->alias]);

        if ($this->requestNewCertificate) {
            $currentCertificate = $this
                ->site
                ->certificates()
                ->whereIn('status', [Certificate::STATUS_ACTIVE, Certificate::STATUS_BUSY])
                ->latest()
                ->first();

            if (! $currentCertificate) {
                return;
            }

            dispatch(new DeleteCertificate($this->site->server->ploi_id, $this->site->ploi_id, $currentCertificate->ploi_id));

            $newCertificate = $this->site->certificates()->create([
                'domain' => $currentCertificate->domain . ',' . $this->alias,
                'type' => $currentCertificate->type,
                'certificate' => $currentCertificate->certificate,
                'private' => $currentCertificate->private
            ]);

            $currentCertificate->delete();

            $newCertificate->server_id = $this->site->server_id;
            $newCertificate->save();

            dispatch(new CreateCertificate($newCertificate))->delay(now()->addSeconds(5));
        }
    }

    public function failed()
    {
        $this->site->aliases = array_diff($this->site->aliases, [$this->alias]);
        $this->site->save();
    }
}
