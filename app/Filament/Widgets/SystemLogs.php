<?php

namespace App\Filament\Widgets;

use App\Models\SystemLog;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Illuminate\Database\Eloquent\Builder;

class SystemLogs extends BaseWidget
{
    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(fn(): Builder => SystemLog::query()->with('model'))
            ->defaultSort(fn(Builder $query) => $query->latest())
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->label(__('Title'))
                    ->formatStateUsing(fn(SystemLog $record) => __($record->title, [
                        'site' => $record->model->domain ?? '-Unknown-',
                        'database' => $record->model->name ?? '-Unknown-',
                    ]))
                    ->description(fn(SystemLog $record) => __($record->description, [
                        'site' => $record->model->domain ?? '-Unknown-',
                        'database' => $record->model->name ?? '-Unknown-',
                    ]))
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label(__('Date'))
                    ->dateTime()
                    ->sortable()
            ]);
    }
}
