#!/bin/bash

echo "Ploi Core update script"

echo "Pulling in new file changes.."

git pull origin master

echo "Installing possible new packages.."

composer install --no-interaction --prefer-dist --no-dev --optimize-autoloader --quiet

echo "Updating database.."

php artisan migrate --force

echo "Clearing cache.."

php artisan cache:clear

echo "Refreshing routes.."

php artisan route:cache

echo "Restarting workers.."

php artisan horizon:terminate

echo "All done!"
