<x-filament::page>
    <div class="px-4 py-4 rounded-lg border border-gray-400">
        <h2 class="font-bold text-lg">{{ __("Reset database password") }}</h2>
        @unless($this->recentlyUpdatedPassword)
            <div>
                <form wire:submit.prevent="resetDatabasePassword" class="mt-2 flex flex-row justify-between max-w-2xl items-center">
                    {{ $this->resetDatabasePasswordForm }}
                    <x-filament::button type="submit" class="">
                        {{ __('Reset database password') }}
                    </x-filament::button>
                </form>
            </div>
        @else
            <div>
                <p class="mt-4">{{ __('The new database password is: :newPassword.', ['newPassword' => $this->recentlyUpdatedPassword ]) }}</p>
            </div>
        @endunless
    </div>
</x-filament::page>
