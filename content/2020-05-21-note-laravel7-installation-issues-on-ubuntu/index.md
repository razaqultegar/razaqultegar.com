---
thumbnail: thumbnail-laravel.png
title: 'Note, Laravel 7 Installation Issues on Ubuntu'
date: 2020-05-21T00:00:00.000Z
category:
   - laravel
slug: note-laravel7-installation-issues-on-ubuntu
layout: post
---

This is my note when installing laravel on Ubuntu 18.04 and I got some error messages. So far there have been 4 error messages that I have experienced and it doesn't rule out the possibility that one day there will be new errors popping up or even this error recurring.

> Note: I will not go into how this error message occurs or go into more detail, but I will cover it with troubleshooting methods.

## The core problem

Here is a list of some of the error messages I've encountered, from global composer configurations to laravel configurations:

1. zsh: laravel command not found
1. php artisan serve warning require (../vendor/autoload.php): failed to open stream: no such file or directory in ../artisan
1. error: Your requirements could not be resolved to an installable set of packages
1. laravel 500 internal server error

## Troubleshooting

To solve the problem with the error message `zsh: laravel command not found`, the only way to do this is to create a PATH in the zshrc configuration file.

```bash
sudo nano ~/.zshrc
# and add the following script to the very bottom:
alias laravel="~/.config/composer/vendor/bin/laravel"
# or
alias laravel="~/.composer/vendor/bin/laravel"
```

You can check for yourself to find out where the composer folder is by running the following command

```bash
$ composer global about
```

<div className="filename">Output</div>

```bash
"Changed current directory to /home/username/.config/composer"
# or
"Changed current directory to /home/username/.composer"
```

Meanwhile, to solve the problem `php artisan serve warning require (../vendor/autoload.php): failed to open stream: no such file or directory in ../ artisan`, just run the following command:

```bash
composer install
# or
composer update
```

Then ʻerror: Your requirements could not be resolved to an installable set of packages`, this is an error message that occurs because the php extension required by Laravel has not been installed. For that we have to run the command:

```bash
sudo apt install php-zip php-xml php-mbstring
```

Finally, there is a problem solving for the error message `laravel 500 internal server error`, that is

- Enter the project root directory
- Change the file `.env-example` to` .env`
- Run the command `php artisan key: generate`
- After that clean cahce with the command `php artisan cache: clear && php artisan config: clear`
