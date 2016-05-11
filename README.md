# Shila theme for Drupal 8

An [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) and [Pattern Lab](http://patternlab.io/) friendly starting point for new Drupal 8 themes.

A Pattern Lab generated style guide can be found [here](https://aleksip.github.io/styleguide-shila-drupal-theme/) (online style guide might not be up to date).

Please note that this theme is in early stages of development.


## Background

This theme is not meant to be usable as is. It is meant to be a starting point for development of new themes.

It is also meant to demonstrate Drupal template compatibility and Pattern Lab integration made possible by the [Drupal Edition of Pattern Lab](https://github.com/pattern-lab/edition-php-drupal-standard) and [Data Transform Plugin](https://github.com/aleksip/plugin-data-transform). For this reason most of the templates are actually unmodified Drupal [Stable base theme](https://www.drupal.org/node/2580687) templates.


## Installing development dependencies

While it is possible to use Shila theme on its own, [Shila Drupal Theme StarterKit](https://github.com/aleksip/starterkit-shila-drupal-theme) is required for development.

Prerequisites: [npm](https://nodejs.org/) and [Bower](http://bower.io/) installed.

In the theme root directory run:

```sh
git clone http://github.com/aleksip/starterkit-shila-drupal-theme starterkit
```

In the `starterkit` directory run:

```sh
npm install
bower install
```


## Files copied from the StarterKit

Please note that the contents of the `css`, `images` and `templates/patterns` directories are copied from the StarterKit and should not be edited. Copies are included in the theme repository to make it possible to try out and use the theme without installing development dependencies.



## Integrating with Pattern Lab

Prerequisites: Shila Drupal Theme StarterKit and [Composer](https://getcomposer.org/) installed.

In the theme root directory run:

```sh
git clone https://github.com/pattern-lab/edition-php-drupal-standard pattern-lab
```

In the `pattern-lab` directory run:

```sh
composer install
```

In the file `pattern-lab/config/config.yml` change `sourceDir` like so:

```yml
sourceDir: ../starterkit/dist
```

If everything went well you should now be able to generate the static Pattern Lab site. In the `pattern-lab` directory run:

```sh
php core/console --generate
```
