# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ploi Core is a Laravel-based webhosting management platform that allows users to launch their own webhosting service using ploi.io as the backend infrastructure.

## Essential Commands

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Watch for changes
npm run watch

# Format PHP code
composer format

# Run tests
php artisan test
php artisan test --filter=TestName

# Run browser tests
php artisan dusk

# Clear all caches
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear

# Queue management
php artisan horizon
php artisan queue:work
```

### Database
```bash
# Run migrations
php artisan migrate

# Rollback migrations
php artisan migrate:rollback

# Fresh migration with seeders
php artisan migrate:fresh --seed
```

### Custom Artisan Commands
```bash
php artisan core:install      # Initial installation
php artisan core:synchronize  # Sync with Ploi API
php artisan core:cleanup      # Clean up resources
php artisan core:trial        # Manage trials
```

## Architecture Overview

### Technology Stack
- **Backend**: Laravel 11 (PHP 8.2+), Filament v3 admin panel
- **Frontend**: Vue 3 with Inertia.js, Tailwind CSS, Vite
- **Queue**: Laravel Horizon with Redis
- **Payments**: Laravel Cashier (Stripe)
- **Testing**: Pest PHP, Laravel Dusk

### Key Directories
- `app/Services/Ploi/` - Ploi.io API integration layer
- `app/Filament/` - Admin panel resources and pages
- `app/Http/Controllers/` - Web and API controllers
- `app/Jobs/` - Async queue jobs for Ploi API operations
- `resources/js/Pages/` - Inertia.js Vue pages
- `resources/js/components/` - Reusable Vue components

### Ploi API Integration
The application heavily integrates with the Ploi.io API. Key service class is at `app/Services/Ploi/Ploi.php`. All server/site management operations go through this API layer. Use queue jobs for long-running operations to avoid timeouts.

### Database Structure
Main entities: Users, Packages, Servers, Sites, Databases, Certificates, Cronjobs. Multi-tenancy through user-server-site relationships. Role-based access: admin, reseller, user.

### Frontend Architecture
- Inertia.js handles the Vue-Laravel bridge
- Pages are in `resources/js/Pages/` following Laravel route structure
- Shared data is passed via Inertia middleware
- Vuex store modules in `resources/js/store/`
- Form handling uses Inertia forms

### Testing Approach
- Feature tests use Pest PHP syntax
- Database tests use RefreshDatabase trait
- API calls should be mocked using Http::fake()
- Browser tests in `tests/Browser/` using Dusk

### Important Environment Variables
```
PLOI_TOKEN=            # Ploi API token
APP_DEMO=false         # Demo mode toggle
STRIPE_KEY=            # Stripe public key
STRIPE_SECRET=         # Stripe secret key
```

### Development Workflow
1. Always run `npm run dev` for frontend changes
2. Use queue workers for Ploi API operations
3. Clear caches when changing config or routes
4. Format code with `composer format` before commits
5. Test with `php artisan test` for unit/feature tests

### Common Patterns
- Use Actions (`app/Actions/`) for business logic
- API responses follow Laravel's resource pattern
- Filament resources handle admin CRUD operations
- Queue jobs for async Ploi API calls
- Service classes for external integrations

### Deployment
Production deployment uses the `update.sh` script which handles git pull, composer install, migrations, and cache clearing. Laravel Horizon manages queues in production.