<?php

namespace App\Filament\Resources\UserResource\Pages;

use Illuminate\Database\Eloquent\Model;
use App\Filament\Resources\UserResource;
use Filament\Resources\Pages\CreateRecord;

class CreateUser extends CreateRecord
{
    protected static string $resource = UserResource::class;

    protected function handleRecordCreation(array $data): Model
    {
        $model = $this->getModel();
        $record = new $model;
        $record->forceFill($data);
        $record->save();

        return $record;
    }
}
