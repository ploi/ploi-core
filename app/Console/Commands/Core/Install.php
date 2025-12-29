<?php

namespace App\Console\Commands\Core;

use Exception;
use App\Models\User;
use RuntimeException;
use App\Models\Package;
use App\Services\Ploi\Ploi;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Console\Command;
use App\Services\VersionChecker;
use function Laravel\Prompts\info;
use function Laravel\Prompts\note;
use function Laravel\Prompts\spin;
use function Laravel\Prompts\text;
use Illuminate\Support\Facades\DB;
use function Laravel\Prompts\error;
use function Laravel\Prompts\intro;
use function Laravel\Prompts\outro;
use function Laravel\Prompts\select;
use Illuminate\Support\Facades\Http;
use function Laravel\Prompts\confirm;
use function Laravel\Prompts\warning;
use function Laravel\Prompts\password;

class Install extends Command
{
    protected $company;
    protected $signature = 'core:install {--force}';
    protected $description = 'Installation command for Ploi Core';
    protected $versionChecker;
    protected $installationFile = 'app/installation';

    public function handle()
    {
        try {
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
            $this->linkStorage();

            outro('🎉 Installation completed successfully!');
            
            note(
                "Next steps:\n\n" .
                "📧 Setup email: https://docs.ploi-core.io/261-getting-started/918-setting-up-email\n" .
                "⚙️ Setup cron & queue: https://docs.ploi-core.io/261-getting-started/638-installation\n\n" .
                "Visit your platform at: " . env('APP_URL')
            );
            
            return Command::SUCCESS;
        } catch (Exception $e) {
            error('Installation failed: ' . $e->getMessage());
            return Command::FAILURE;
        }
    }

    protected function init()
    {
        $this->versionChecker = (new VersionChecker)->getVersions();
    }

    protected function askAboutAdministrationAccount()
    {
        if (!User::query()->where('role', User::ADMIN)->count()) {
            note('Let\'s set up your administration account');

            $name = text(
                label: 'What is your name?',
                default: $this->company['user_name'],
                required: true
            );

            $email = text(
                label: 'What is your email address?',
                default: $this->company['email'],
                required: true,
                validate: fn (string $value) => match (true) {
                    !filter_var($value, FILTER_VALIDATE_EMAIL) => 'Please enter a valid email address.',
                    User::where('email', $value)->exists() => 'This email is already registered in the system.',
                    default => null
                }
            );

            $password = password(
                label: 'Choose a secure password',
                required: true,
                validate: fn (string $value) => match (true) {
                    strlen($value) < 8 => 'Password must be at least 8 characters.',
                    default => null
                }
            );

            spin(
                function () use ($name, $email, $password) {
                    User::forceCreate([
                        'name' => $name,
                        'email' => $email,
                        'password' => $password,
                        'role' => User::ADMIN
                    ]);
                },
                'Creating administrator account...'
            );

            info('✓ Administrator account created successfully');
        } else {
            note('Administrator account already exists. Use existing credentials to login.');
        }
    }

    protected function askAboutDefaultPackages()
    {
        $createPackages = confirm(
            label: 'Would you like to create default packages?',
            default: true,
            hint: 'Basic (5 sites), Professional (30 sites), and Unlimited packages'
        );

        if (!$createPackages) {
            return false;
        }

        spin(
            function () {
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
            },
            'Creating default packages...'
        );

        info('✓ Created 3 default packages');
    }

    protected function getCompany($token)
    {
        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Content-Type' => 'application/json'
        ])
            ->withToken($token)
            ->get((new Ploi)->url . 'ping');

        if (!$response->ok() || !$response->json()) {
            return [
                'error' => Arr::get($response->json(), 'message', 'An unknown error has occurred.')
            ];
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
        intro('🚀 Ploi Core Installation');
        
        note(
            "Ploi Core v{$this->versionChecker->currentVersion} (Remote: v{$this->versionChecker->remoteVersion})\n" .
            "Laravel v" . app()->version() . " | PHP v" . trim(phpversion()) . "\n\n" .
            "Website: https://ploi-core.io\n" .
            "E-mail: core@ploi.io\n" .
            "Terms: https://ploi-core.io/terms"
        );
    }

    protected function isInstalled()
    {
        if (file_exists(storage_path($this->installationFile)) && !$this->option('force')) {
            warning('Ploi Core has already been installed before.');
            error(
                "To reinstall, either:\n" .
                "• Remove the file: ./storage/{$this->installationFile}\n" .
                "• Or run with --force flag"
            );
            exit();
        }

        return false;
    }

    protected function checkApplicationKey(): void
    {
        if (!config('app.key')) {
            spin(
                fn () => $this->call('key:generate', [], $this->getOutput()),
                'Generating application key...'
            );
            info('✓ Application key has been set');
        }
    }

    protected function checkApplicationUrl()
    {
        $url = text(
            label: 'What URL will this platform use?',
            default: env('APP_URL', 'https://example.com'),
            required: true,
            validate: fn (string $value) => match (true) {
                !filter_var($value, FILTER_VALIDATE_URL) => 'Please enter a valid URL.',
                !str_starts_with($value, 'http://') && !str_starts_with($value, 'https://') => 'URL must start with http:// or https://',
                default => null
            },
            hint: 'Include the protocol (http:// or https://)'
        );

        try {
            $this->writeToEnvironmentFile('APP_URL', $url);
            info('✓ Application URL configured');
        } catch (Exception $e) {
            error('Failed to save application URL: ' . $e->getMessage());
            exit(1);
        }
    }

    protected function createInstallationFile()
    {
        try {
            $path = storage_path($this->installationFile);
            $content = json_encode($this->getInstallationPayload(), JSON_PRETTY_PRINT);
            
            if (file_put_contents($path, $content) === false) {
                error('Failed to create installation file');
                exit(1);
            }
            
            info('✓ Installation marker created');
        } catch (Exception $e) {
            error('Error creating installation file: ' . $e->getMessage());
            exit(1);
        }
    }

    protected function linkStorage()
    {
        // Create storage symlink
        $publicPath = public_path('storage');
        $storagePath = storage_path('app/public');
        
        // Remove existing symlink if it exists
        if (is_link($publicPath)) {
            unlink($publicPath);
        }
        
        // Create new symlink
        if (!file_exists($publicPath)) {
            try {
                symlink($storagePath, $publicPath);
                info('✓ Storage symlink created');
            } catch (Exception $e) {
                warning('Could not create storage symlink (may need manual creation)');
            }
        } else {
            info('✓ Storage path already exists');
        }
    }

    protected function createDatabaseCredentials(): bool
    {
        $storeCredentials = confirm(
            label: 'Would you like to configure database credentials now?',
            default: true
        );

        if (!$storeCredentials) {
            return false;
        }

        $connection = select(
            label: 'Select database type',
            options: [
                'mysql' => 'MySQL / MariaDB',
                'pgsql' => 'PostgreSQL'
            ],
            default: 'mysql'
        );

        $defaultPort = $connection === 'mysql' ? '3306' : '5432';

        $variables = [
            'DB_CONNECTION' => $connection,

            'DB_HOST' => text(
                label: 'Database host',
                default: config("database.connections.{$connection}.host", '127.0.0.1'),
                required: true,
                hint: 'Usually 127.0.0.1 or localhost'
            ),

            'DB_PORT' => text(
                label: 'Database port',
                default: config("database.connections.{$connection}.port", $defaultPort),
                required: true
            ),

            'DB_DATABASE' => text(
                label: 'Database name',
                default: config("database.connections.{$connection}.database", 'ploi_core'),
                required: true
            ),

            'DB_USERNAME' => text(
                label: 'Database username',
                default: config("database.connections.{$connection}.username", 'root'),
                required: true
            ),

            'DB_PASSWORD' => password(
                label: 'Database password',
                hint: 'Leave empty if no password is set'
            ) ?: '',
        ];

        spin(
            fn () => $this->persistVariables($variables),
            'Saving database configuration...'
        );

        return true;
    }

    protected function checkCredentials()
    {
        $ploiApiToken = text(
            label: 'Enter your Ploi API token',
            default: env('PLOI_TOKEN'),
            required: true,
            hint: 'You can find this in your Ploi account settings'
        );

        $this->company = spin(
            fn () => $this->getCompany($ploiApiToken),
            'Authenticating with Ploi API...'
        );

        if (!$this->company) {
            error('Could not authenticate with ploi.io');
            exit();
        }

        if (isset($this->company['error'])) {
            error($this->company['error']);
            exit();
        }

        if ($this->company['user']['subscription'] !== 'unlimited') {
            error('Your Ploi subscription does not support Ploi Core.');
            warning('Please upgrade to the Unlimited plan at https://ploi.io');
            exit();
        }

        info('✓ Successfully authenticated with Ploi');

        $this->writeToEnvironmentFile('PLOI_TOKEN', $ploiApiToken);

        $name = text(
            label: 'What is the name of your company?',
            default: $this->company['name'],
            required: true
        );
        
        $this->writeToEnvironmentFile('APP_NAME', $name);
        setting(['name' => $name]);
    }

    protected function runDatabaseMigrations()
    {
        spin(
            fn () => $this->call('migrate', ['--force' => true], $this->getOutput()),
            'Running database migrations...'
        );
        info('✓ Database migrations completed');
    }

    protected function checkDatabaseConnection(): void
    {
        try {
            spin(
                fn () => DB::connection()->getPdo(),
                'Testing database connection...'
            );
            info('✓ Database connection successful');
        } catch (Exception $e) {
            warning('Unable to connect to database');
            
            try {
                if (!$this->createDatabaseCredentials()) {
                    error('Database connection could not be established.');
                    $this->printDatabaseConfig();
                    exit();
                }
            } catch (RuntimeException $e) {
                error('Failed to persist environment configuration.');
                exit();
            }

            $this->checkDatabaseConnection();
        }
    }

    protected function printDatabaseConfig(): void
    {
        $connection = config('database.default');

        note(
            "Current Database Configuration:\n" .
            "• Connection: {$connection}\n" .
            "• Host: " . config("database.connections.{$connection}.host") . "\n" .
            "• Port: " . config("database.connections.{$connection}.port") . "\n" .
            "• Database: " . config("database.connections.{$connection}.database") . "\n" .
            "• Username: " . config("database.connections.{$connection}.username") . "\n" .
            "• Password: " . (config("database.connections.{$connection}.password") ? '***' : '(not set)')
        );
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
