<?php

namespace App\Filament\Resources\Users\Pages;

use Illuminate\Database\Eloquent\Model;
use App\Filament\Resources\Users\UserResource;
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
