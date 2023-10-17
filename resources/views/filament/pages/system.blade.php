<x-filament::page>
    <div class="grid md:grid-cols-2 gap-4">
        <x-filament::section>
            <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ __("Check your system's version here. If there's an update available you'll be able to press the update button to update your system.") }}
            </p>

            <ul class="mt-4 text-sm text-gray-500 dark:text-gray-400">
                <li>{{ __("Current version") }}:
                    <span class="text-gray-900 dark:text-gray-100">{{ $this->getCurrentVersion() }}</span>
                </li>
                <li>{{ __("Remote version") }}:
                    <span class="text-gray-900 dark:text-gray-100">{{ $this->getRemoteVersion() }}</span>
                    <button class="text-primary-600" wire:click="refreshRemoteVersion">{{ __('Refresh') }}</button>
                </li>
                <li>{{ __('Horizon worker status') }}:
                    <span @class(['text-red-600' => ! $this->getHorizonWorkerStatus(), 'text-green-600' => $this->getHorizonWorkerStatus()])> {{ $this->getHorizonWorkerStatus() ? __('Active') : __('Inactive') }}</span>
                </li>
            </ul>

            @if($this->hasAvailableUpdate())
                <x-filament::section
                    class="mt-4"
                    icon="heroicon-o-arrow-path"
                    icon-color="info"
                    :heading="__('Update available')"
                    compact
                >
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                        {{ __('An update is available for your system, please upgrade.') }}
                    </p>

                    <x-filament::button
                        class="mt-4"
                        tag="a"
                        href="https://docs.ploi-core.io/263-digging-deeper/752-manual-update"
                        target="_blank"
                        icon="heroicon-o-arrow-top-right-on-square"
                    >
                        {{ __('Find out how to upgrade here') }}
                    </x-filament::button>

                </x-filament::section>
            @endif
        </x-filament::section>

        <x-filament::section>
            <ul class="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>
                    <a class="text-sm text-primary-600 font-bold" target="_blank" href="https://docs.ploi-core.io/">
                        Ploi Core Docs
                    </a>
                </li>
                <li>
                    <a class="text-sm text-primary-600 font-bold" target="_blank" href="https://ploi.io/">
                        Ploi Website
                    </a>
                </li>
                <li>
                    <a class="text-sm text-primary-600 font-bold" target="_blank" href="https://ploi.io/login">
                        Ploi Panel
                    </a>
                </li>
                <li>
                    <a class="text-sm text-primary-600 font-bold" target="_blank"
                       href="https://github.com/ploi-deploy/ploi-core">
                        Ploi GitHub repository
                    </a>
                </li>
            </ul>
        </x-filament::section>
    </div>
</x-filament::page>
