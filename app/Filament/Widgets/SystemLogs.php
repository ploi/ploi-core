<?php

namespace App\Filament\Widgets;

use Filament\Tables\Columns\TextColumn;
use Filament\Tables;
use App\Models\SystemLog;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Filament\Widgets\TableWidget as BaseWidget;

class SystemLogs extends BaseWidget
{
    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(fn (): Builder => SystemLog::query()->with('model'))
            ->defaultSort(fn (Builder $query) => $query->latest())
            ->columns([
                TextColumn::make('title')
                    ->label(__('Title'))
                    ->formatStateUsing(fn (SystemLog $record) => __($record->title, [
                        'site' => $record->model->domain ?? '-Unknown-',
                        'database' => $record->model->name ?? '-Unknown-',
                    ]))
                    ->description(fn (SystemLog $record) => __($record->description, [
                        'site' => $record->model->domain ?? '-Unknown-',
                        'database' => $record->model->name ?? '-Unknown-',
                    ]))
                    ->searchable()
                    ->sortable(),
                TextColumn::make('created_at')
                    ->label(__('Date'))
                    ->dateTime()
                    ->sortable()
            ]);
    }
}
