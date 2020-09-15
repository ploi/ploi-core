<?php

namespace App\Services\Ploi\Exceptions\Http;

use Exception;

/**
 * Class InternalServerError
 *
 * @package App\Services\Ploi\Exceptions\Http
 */
class InternalServerError extends Exception
{

    /**
     * InternalServerError constructor.
     *
     * @param string $message
     */
    public function __construct(string $message = 'Ploi is having issues')
    {
        parent::__construct($message);
    }
}
