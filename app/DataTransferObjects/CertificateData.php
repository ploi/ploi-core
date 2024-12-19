<?php

namespace App\DataTransferObjects;

use App\Models\Certificate;
use Spatie\LaravelData\Data;

class CertificateData extends Data
{
    public function __construct(
        public ?int $id = null,
        public ?string $status = null,
        public string $domain,
        public ?int $site_id = null,
        public ?int $server_id = null,
        public ?string $expires_at = null,
        public ?string $created_at = null,
    ) {
    }

    public static function fromModel(Certificate $certificate): static
    {
        return static::from(array_merge($certificate->toArray(), ['site_id' => $certificate->site->id, 'server_id' => $certificate->server->id]));
    }
}
