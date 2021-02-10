<?php

namespace App\Console\Commands\Core;

use Exception;
use App\Models\User;
use RuntimeException;
use App\Models\Package;
use App\Services\Ploi\Ploi;
use Illuminate\Support\Str;
use Illuminate\Console\Command;
use App\Services\VersionChecker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class Install extends Command
{
    protected $company;
    protected $signature = 'core:install';
    protected $description = 'Installation command for Ploi Core';
    protected $versionChecker;
    protected $installationFile = 'app/installation';

    public function handle()
    {
        $this->init();
        $this->intro();
        $this->isInstalled();
        $this->checkApplicationKey();
        $this->checkDatabaseConnection();
        $this->runDatabaseMigrations();
        $this->checkCredentials();
        $this->askAboutAdministrationAccount();
        $this->askAboutDefaultPackages();
        $this->checkApplicationUrl();
        $this->createInstallationFile();

        $this->info('Succes! Installation has finished.');
        $this->info('Visit your platform at ' . env('APP_URL'));
    }

    protected function init()
    {
        $this->versionChecker = (new VersionChecker)->getVersions();
    }

    protected function askAboutAdministrationAccount()
    {
        $this->info('Let\'s start by setting up your administration account.');

        $name = $this->ask('What is your name', $this->company['user_name']);
        $email = $this->ask('What is your e-mail address', $this->company['email']);
        $password = $this->secret('What password do you desire');

        $check = User::where('email', $email)->count();

        if ($check) {
            $this->line('');
            $this->comment('This user is already present in your system, please refresh your database or use different credentials.');
            $this->comment('Aborting installation..');

            exit();
        }

        User::forceCreate([
            'name' => $name,
            'email' => $email,
            'password' => $password,
            'role' => User::ADMIN
        ]);
    }

    protected function askAboutDefaultPackages()
    {
        $basicPackages = $this->confirm(
            'Do you want to create the basic packages which you can edit later?',
            true
        );

        if (!$basicPackages) {
            return false;
        }

        Package::create([
            'name' => 'Basic',
            'maximum_sites' => 5,
            'site_permissions' => [
                'create' => true,
                'update' => true,
                'delete' => true
            ],
            'server_permissions' => [
                'create' => false,
                'update' => false,
                'delete' => false
            ]
        ]);

        Package::create([
            'name' => 'Professional',
            'maximum_sites' => 30,
            'site_permissions' => [
                'create' => true,
                'update' => true,
                'delete' => true
            ],
            'server_permissions' => [
                'create' => false,
                'update' => false,
                'delete' => false
            ]
        ]);

        Package::create([
            'name' => 'Unlimited',
            'maximum_sites' => 0,
            'site_permissions' => [
                'create' => true,
                'update' => true,
                'delete' => true
            ],
            'server_permissions' => [
                'create' => false,
                'update' => false,
                'delete' => false
            ]
        ]);
    }

    protected function getCompany($ploiCoreKey, $token)
    {
        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'X-Ploi-Core-Key' => $ploiCoreKey
        ])
            ->withToken($token)
            ->get((new Ploi)->url . 'ping');

        if (!$response->ok() || !$response->json()) {
            return false;
        }

        return $response->json();
    }

    protected function getInstallationPayload()
    {
        return [
            'installed_at' => now()
        ];
    }

    protected function intro()
    {
        $this->info('*---------------------------------------------------------------------------*');
        $this->line('Ploi Core Installation');
        $this->line('Ploi Core version: ' . $this->versionChecker->currentVersion);
        $this->line('Ploi Core remote: ' . $this->versionChecker->remoteVersion);
        $this->line('Laravel version: ' . app()->version());
        $this->line('PHP version: ' . trim(phpversion()));
        $this->line(' ');
        $this->line('Website: https://ploi-core.io');
        $this->line('E-mail: core@ploi.io');
        $this->line('Terms of service: https://ploi-core.io/terms');
        $this->info('*---------------------------------------------------------------------------*');
        $this->line('');
    }

    protected function isInstalled()
    {
        if (file_exists(storage_path($this->installationFile))) {
            $this->line('');
            $this->comment('Ploi Core has already been installed before.');
            $this->comment('If you still want to start installation, remove this file to continue: ./storage/' . $this->installationFile);
            $this->comment('Aborting installation..');

            exit();
        }

        return false;
    }

    protected function checkApplicationKey(): void
    {
        if (!config('app.key')) {
            $this->call('key:generate');
        }

        $this->info('Application key has been set');
    }

    protected function checkApplicationUrl()
    {
        // Ask about URL
        $url = $this->ask('What URL is this platform using?', env('APP_URL'));

        $this->writeToEnvironmentFile('APP_URL', $url);
    }

    protected function createInstallationFile()
    {
        file_put_contents(storage_path($this->installationFile), json_encode($this->getInstallationPayload(), JSON_PRETTY_PRINT));
    }

    protected function createDatabaseCredentials(): bool
    {
        $storeCredentials = $this->confirm(
            'Unable to connect to your database. Would you like to enter your credentials now?',
            true
        );

        if (!$storeCredentials) {
            return false;
        }

        $connection = $this->choice('Type', ['mysql', 'pgsql'], 0);

        $variables = [
            'DB_CONNECTION' => $connection,

            'DB_HOST' => $this->anticipate(
                'Host',
                ['127.0.0.1', 'localhost'],
                config("database.connections.{$connection}.host", '127.0.0.1')
            ),

            'DB_PORT' => $this->ask(
                'Port',
                config("database.connections.{$connection}.port", '3306')
            ),

            'DB_DATABASE' => $this->ask(
                'Database',
                config("database.connections.{$connection}.database")
            ),

            'DB_USERNAME' => $this->ask(
                'Username',
                config("database.connections.{$connection}.username")
            ),

            'DB_PASSWORD' => $this->secret(
                'Password',
                config("database.connections.{$connection}.password")
            ),
        ];

        $this->persistVariables($variables);

        return true;
    }

    protected function checkCredentials()
    {
        do {
            $ploiApiToken = $this->ask('Enter the Ploi API token', env('PLOI_TOKEN'));
        } while (empty($ploiApiToken));

        do {
            $ploiCoreKey = $this->ask('Enter the Ploi Core key', env('PLOI_CORE_TOKEN'));
        } while (empty($ploiCoreKey));

        $this->company = $this->getCompany($ploiCoreKey, $ploiApiToken);

        if (!$this->company) {
            $this->error('Could not authenticate with ploi.io, please retry by running this command again.');

            exit();
        }

        $this->writeToEnvironmentFile('PLOI_TOKEN', $ploiApiToken);
        $this->writeToEnvironmentFile('PLOI_CORE_TOKEN', $ploiCoreKey);

        $name = $this->ask('What is the name of your company? (Press enter to keep the name here)', $this->company['name']);
        $this->writeToEnvironmentFile('APP_NAME', $name);

        setting(['name' => $name]);
    }

    protected function runDatabaseMigrations()
    {
        $this->info('Running database migrations..');
        $this->call('migrate');
        $this->info('Database migrations successful');
    }

    protected function checkDatabaseConnection(): void
    {
        try {
            DB::connection()->getPdo();
            $this->info('Database connection successful.');
        } catch (Exception $e) {
            try {
                if (!$this->createDatabaseCredentials()) {
                    $this->error('A database connection could not be established. Please update your configuration and try again.');
                    $this->printDatabaseConfig();
                    exit();
                }
            } catch (RuntimeException $e) {
                $this->error('Failed to persist environment configuration.');
                exit();
            }

            $this->checkDatabaseConnection();
        }
    }

    protected function printDatabaseConfig(): void
    {
        $connection = config('database.default');

        $this->line('');
        $this->info('Database Configuration:');
        $this->line("- Connection: {$connection}");
        $this->line('- Host: ' . config("database.connections.{$connection}.host"));
        $this->line('- Port: ' . config("database.connections.{$connection}.port"));
        $this->line('- Database: ' . config("database.connections.{$connection}.database"));
        $this->line('- Username: ' . config("database.connections.{$connection}.username"));
        $this->line('- Password: ' . config("database.connections.{$connection}.password"));
    }

    protected function persistVariables(array $connectionData): void
    {
        $connection = $connectionData['DB_CONNECTION'];

        $configMap = [
            'DB_CONNECTION' => "database.default",
            'DB_HOST' => "database.connections.{$connection}.host",
            'DB_PORT' => "database.connections.{$connection}.port",
            'DB_DATABASE' => "database.connections.{$connection}.database",
            'DB_USERNAME' => "database.connections.{$connection}.username",
            'DB_PASSWORD' => "database.connections.{$connection}.password",
        ];

        foreach ($connectionData as $envKey => $value) {
            $this->writeToEnvironmentFile($envKey, $value);
            $this->writeToConfig($configMap[$envKey], $value);
        }

        DB::purge($this->laravel['config']['database.default']);
    }

    protected function writeToEnvironmentFile(string $key, ?string $value): void
    {
        file_put_contents($this->laravel->environmentFilePath(), preg_replace(
            $this->keyReplacementPattern($key),
            "{$key}=\"{$value}\"",
            file_get_contents($this->laravel->environmentFilePath())
        ));

        if (!$this->checkEnvValuePresent($key, $value)) {
            throw new RuntimeException("Failed to persist environment variable value. {$key}={$value}");
        }
    }

    protected function checkEnvValuePresent(string $key, ?string $value): bool
    {
        $envContents = file_get_contents($this->laravel->environmentFilePath());

        $needle = "{$key}=\"{$value}\"";

        return Str::contains($envContents, $needle);
    }

    protected function keyReplacementPattern(string $key): string
    {
        return "/^{$key}.*/m";
    }

    protected function writeToConfig(string $key, ?string $value): void
    {
        $this->laravel['config'][$key] = $value;
    }
}
