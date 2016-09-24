# Shila theme for Drupal 8

An [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) and [Pattern Lab](http://patternlab.io/) friendly starting point for new Drupal 8 themes.

A Pattern Lab generated style guide can be found [here](https://aleksip.github.io/styleguide-shila-drupal-theme/) (online style guide might not be up to date).


## Background

This theme is not meant to be usable as is. It is meant to be a starting point for development of new themes.

This theme is also meant to demonstrate Drupal template compatibility and Pattern Lab integration made possible by the [Drupal Edition of Pattern Lab](https://github.com/pattern-lab/edition-php-drupal-standard) and [Data Transform Plugin](https://github.com/aleksip/plugin-data-transform). For this reason many templates in the theme are actually unmodified Drupal [Stable base theme](https://www.drupal.org/node/2580687) templates.


## Installing required dependencies

### Component Libraries module

Install and enable the [Component Libraries module](https://www.drupal.org/project/components). No configuration is needed.

## Installing development dependencies

Prerequisites: [npm](https://nodejs.org/) installed.

In the Shila theme root directory run:

```sh
npm install
```


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
