<x-filament::page>
    <div class="px-4 py-4 rounded-lg border border-gray-400">
        <p>{{ __("Check your system's version here. If there's an update available you'll be able to press the update button to update your system.") }}</p>

        <ul class="mt-4">
            <li>{{ __("Current version") }}: {{ $this->getCurrentVersion() }}</li>
            <li>{{ __("Remote version") }}: {{ $this->getRemoteVersion() }} <button class="text-primary-500" wire:click="refreshRemoteVersion">{{ __('Refresh') }}</button></li>
            <li>{{ __('Horizon worker status') }}: <span @class(['text-red-600' => ! $this->getHorizonWorkerStatus(), 'text-green-600' => $this->getHorizonWorkerStatus()])> {{ $this->getHorizonWorkerStatus() ? __('Active') : __('Inactive') }}</span></li>
        </ul>

        @if($this->hasAvailableUpdate())
            <div class="mt-8 bg-primary-600 text-white rounded-lg px-4 py-3">
                <h2 class="text-lg">{{ __('Update available') }}</h2>
                <p>{{ __('An update is available for your system, please upgrade.') }}</p>

                <a href="https://docs.ploi-core.io/digging-deeper/manual-update" target="_blank" class="block mt-4 underline font-bold">{{ __('Find out how to upgrade here') }}</a>
            </div>
        @endif
    </div>

    <div class="mt-8 pl-4 px-4 py-4 rounded-lg border border-gray-400">
        <ul class="list-disc ml-6 text-gray-600">
            <li><a class="text-primary-600 font-bold" target="_blank" href="https://docs.ploi-core.io/">Ploi Core Docs</a></li>
            <li><a class="text-primary-600 font-bold" target="_blank" href="https://ploi.io/">Ploi Website</a></li>
            <li><a class="text-primary-600 font-bold" target="_blank" href="https://ploi.io/login">Ploi Panel</a></li>
            <li><a class="text-primary-600 font-bold" target="_blank" href="https://github.com/ploi-deploy/ploi-core">Ploi GitHub repository </a></li>
        </ul>
    </div>
</x-filament::page>
