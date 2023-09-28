<x-filament::page>
    <x-filament-panels::form wire:submit.prevent="save">
        {{ $this->form }}

        <div class="mt-4">
            <x-filament::button type="submit">
                {{ __('Save') }}
            </x-filament::button>
        </div>
    </x-filament-panels::form>
</x-filament::page>
