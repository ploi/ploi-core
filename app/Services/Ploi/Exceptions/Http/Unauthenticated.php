<?php

namespace App\Services\Ploi\Exceptions\Http;

use Exception;

/**
 * Class Unauthenticated
 *
 * @package App\Services\Ploi\Exceptions\Http
 */
class Unauthenticated extends Exception
{
    /**
     * InternalServerError constructor.
     *
     * @param string $message
     */
    public function __construct(string $message = 'Cannot authenticate with Ploi')
    {
        parent::__construct($message);
    }

    public function render($request)
    {
        return redirect()->route('dashboard')->with('error', 'Unable to authenticate with backend server, please check API keys and connection.');
    }
}
