<?php

namespace App\DataTransferObjects\Support;

use Spatie\LaravelData\Support\TransformationType;

class DataCollection extends \Spatie\LaravelData\DataCollection
{
    public function transform(TransformationType $type): array
    {
        $transformer = new DataCollectionTransformer(
            $this->dataClass,
            $type,
            $this->getInclusionTree(),
            $this->getExclusionTree(),
            $this->items,
            $this->through,
            $this->filter
        );

        return $transformer->transform();
    }
}
