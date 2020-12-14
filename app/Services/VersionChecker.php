<?php

namespace App\Services;

class VersionChecker
{
    public $remoteVersion;
    public $currentVersion;

    public function getVersions(): self
    {
        $this->remoteVersion = trim($this->getRemoteVersion());
        $this->currentVersion = trim($this->getApplicationVersion());

        return $this;
    }

    public function getApplicationVersion()
    {
        return cache()->remember('ploi-core-current-version', now()->addDay(), function () {
            return shell_exec('git describe --tag --abbrev=0');
        });
    }

    public function getRemoteVersion()
    {
        return cache()->remember('ploi-core-remote-version', now()->addDay(), function () {
            shell_exec('git fetch --tags');
            return shell_exec('git describe --tags $(git rev-list --tags --max-count=1)');
        });
    }

    public function isOutOfDate()
    {
        return $this->currentVersion < $this->remoteVersion || $this->currentVersion != $this->remoteVersion;
    }

    public function flushVersionData()
    {
        try {
            cache()->forget('ploi-core-current-version');
            cache()->forget('ploi-core-remote-version');
        } catch (\Exception $exception) {

        }
    }
}
