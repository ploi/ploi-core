<x-filament::page>
    <form wire:submit.prevent="save">
        {{ $this->form }}

        <div class="mt-4">
            <x-filament-support::button type="submit">
                {{ __('Save') }}
            </x-filament-support::button>
        </div>
    </form>
</x-filament::page>
