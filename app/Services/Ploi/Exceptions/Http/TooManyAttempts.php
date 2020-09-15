<?php

namespace App\Services\Ploi\Exceptions\Http;

use Exception;

/**
 * Class TooManyAttempts
 *
 * @package App\Services\Ploi\Exceptions\Http
 */
class TooManyAttempts extends Exception
{

    /**
     * TooManyAttempts constructor.
     *
     * @param string $message
     */
    public function __construct(string $message = 'Accessing the API too quickly')
    {
        parent::__construct($message);
    }
}
