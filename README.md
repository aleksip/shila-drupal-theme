# Shila theme for Drupal 8

An [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) and [Pattern Lab](http://patternlab.io/) friendly starting point for new Drupal 8 themes. Can be used stand-alone with Pattern Lab. Can be used as a Pattern Lab StarterKit as well.


## Installing development dependencies

Prerequisites: [npm](https://nodejs.org/) installed.

In the Shila theme root directory run:

```sh
npm install
```

## Integrating with Drupal

Prerequisites: Drupal 8.2 or later.


### Component Libraries module

Install and enable the [Component Libraries module](https://www.drupal.org/project/components). No configuration is needed.


### Drupal site settings

The `_patterns` directory must be excluded in the site's `settings.php` file to prevent Drupal from discovering component templates with the same name as templates in the `templates` directory.

Example:

```
$settings['file_scan_ignore_directories'] = [
  'node_modules',
  'bower_components',
  '_patterns'
];
```

If you forget this important step it is possible to end up with a WSOD (white screen of death).

The `file_scan_ignore_directories` setting was added in Drupal 8.2, so unfortunately Shila theme will not work with older versions of Drupal 8.


## Integrating with Pattern Lab

Prerequisites: [git](https://git-scm.com/) and [Composer](https://getcomposer.org/) installed.

In the Shila theme root directory run:

```sh
git clone https://github.com/pattern-lab/edition-php-drupal-standard pattern-lab
```

In the `pattern-lab` directory run:

```sh
composer install
```

In the file `pattern-lab/config/config.yml` change `sourceDir` and `twigAutoescape` like so:

 ```yml
 sourceDir: ../dist
 twigAutoescape: false
 ```

If everything went well you should now be able to generate the static Pattern Lab site. In the `pattern-lab` directory run:

```sh
php core/console --generate
```
