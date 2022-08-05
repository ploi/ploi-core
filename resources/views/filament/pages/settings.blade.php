<x-filament::page>
    <x-filament::form wire:submit.prevent="save">
        {{ $this->form }}

        <div class="mt-4">
            <x-filament-support::button type="submit">
                {{ __('Save') }}
            </x-filament-support::button>
        </div>
    </x-filament::form>
</x-filament::page>
