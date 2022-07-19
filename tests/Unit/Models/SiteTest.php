<?php

use App\Models\Site;

it('will generate a site system user', function () {
    [$siteA, $siteB] = Site::factory(2)
        ->sequence(
            ['domain' => 'ploi.io'],
            ['domain' => 'example.ploi.io'],
        )
        ->create();

    expect($siteA)
        ->systemUsers->toHaveCount(1);

    expect($siteA->systemUsers->first())
        ->user_name->toBe('ploiio');

    expect($siteB)
        ->systemUsers->toHaveCount(1);

    expect($siteB->systemUsers->first())
        ->user_name->toBe('examplep');
});
