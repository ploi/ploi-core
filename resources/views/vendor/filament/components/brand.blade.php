@if($logo = setting('logo'))
    <img src="{{ Storage::disk('logos')->url($logo) }}" class="h-8" alt="{{ setting('name') }}" />
@elseif (filled($brand = config('filament.brand')))
    <div @class([
        'text-xl font-bold tracking-tight filament-brand',
        'dark:text-white' => config('filament.dark_mode'),
    ])>
        {{ $brand }}
    </div>
@endif
