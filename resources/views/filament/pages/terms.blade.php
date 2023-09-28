<x-filament::page>
    <form wire:submit.prevent="save">
        {{ $this->form }}

        <div class="mt-4">
            <x-filament::button type="submit">
                {{ __('Save') }}
            </x-filament::button>
        </div>
    </form>
</x-filament::page>
