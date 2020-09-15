<?php

namespace App\Services\Ploi\Traits;

/**
 * Trait HasHistory
 *
 * @package Ploi\Traits
 */
trait HasHistory
{
    /**
     * @var array<int, string>
     */
    private $history;

    /**
     * Returns the history of a resource
     *
     * @return array<int, string>
     */
    public function getHistory(): array
    {
        return $this->history;
    }

    /**
     * Allows the history to be overridden by setting a
     * new history.
     *
     * @param array<int, string> $history
     * @return self
     */
    public function setHistory(array $history): self
    {
        $this->history = $history;

        return $this;
    }

    /**
     * Adds an item to the history
     *
     * @param string $history
     * @return self
     */
    public function addHistory(string $history): self
    {
        $this->history[] = $history;

        return $this;
    }
}
