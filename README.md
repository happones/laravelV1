# Test Laravel

clone this project

`$ git checkout happones`

`$ composer install` install dependencies

`$ cp .env.example .env` configure `.env` file according development environment

`$ php artisan key:generate` generate 

`$ php artisan migrate` add `--seed` if wish test data

`$ php artisan passport:install` generate oauth key

`$ php artisan storage:link` symbolic link for upload files

For unit testing

`$ ./vendor/bin/phpunit --filter UserCreateTest` Test for create user.

FrontEnd code localized on `frontend/src` folder