<?php

namespace Services\Ploi\Exceptions\Resource\Server\Site;

use Exception;

/**
 * Class DomainAlreadyExists
 *
 * @package Services\Ploi\Exceptions\Resource\Server\Site
 */
class DomainAlreadyExists extends Exception
{
    /**
     * DomainAlreadyExists constructor.
     *
     * @param string $message
     */
    public function __construct(string $message = 'This domain already exists')
    {
        parent::__construct($message);
    }
}
