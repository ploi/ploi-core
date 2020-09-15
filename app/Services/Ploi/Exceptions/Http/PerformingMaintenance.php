<?php

namespace App\Services\Ploi\Exceptions\Http;

use Exception;

/**
 * Class PerformingMaintenance
 *
 * @package App\Services\Ploi\Exceptions\Http
 */
class PerformingMaintenance extends Exception
{

    /**
     * PerformingMaintenance constructor.
     *
     * @param string $message
     */
    public function __construct(string $message = 'Ploi is performing maintenance')
    {
        parent::__construct($message);
    }
}
