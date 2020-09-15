<?php

namespace App\Services\Ploi\Exceptions\Http;

use Exception;

/**
 * Class NotValid
 *
 * @package App\Services\Ploi\Exceptions\Http
 */
class NotValid extends Exception
{

    /**
     * NotValid constructor.
     *
     * @param string $message
     */
    public function __construct(string $message = 'Sent options were not valid')
    {
        parent::__construct($message);
    }
}
