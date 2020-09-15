<?php

namespace App\Traits;

trait JobHasThresholds
{
    public $threshold;

    public function hasReachedThresholdLimit($limit = 5)
    {
        return $this->threshold >= $limit;
    }

    public function incrementThreshold()
    {
        $this->threshold++;
    }

    public function setThreshold(int $threshold)
    {
        $this->threshold = $threshold;
    }
}
