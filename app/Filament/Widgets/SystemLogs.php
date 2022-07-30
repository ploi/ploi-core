<?php

namespace App\Filament\Widgets;

use App\Models\SystemLog;
use Filament\Tables\Columns\TextColumn;
use Filament\Widgets\TableWidget as BaseWidget;
use Illuminate\Database\Eloquent\Builder;

class SystemLogs extends BaseWidget
{
    protected int|string|array $columnSpan = 'full';

    protected int $defaultTableRecordsPerPageSelectOption = 5;

    protected function getTableQuery(): Builder
    {
        return SystemLog::query()
            ->latest()
            ->with('model');
    }

    protected function getTableColumns(): array
    {
        return [
            TextColumn::make(__('Title'))
                ->formatStateUsing(fn (SystemLog $record) => __($record->title, [
                    'site' => $record->model->domain ?? '-Unknown-',
                    'database' => $record->model->name ?? '-Unknown-',
                ]))
                ->description(fn (SystemLog $record) => $record->description),
        ];
    }
}
