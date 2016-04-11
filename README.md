# Shila theme for Drupal 8

An [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) and [Pattern Lab](http://patternlab.io/) friendly starting point for new Drupal 8 themes.

Defines only four regions: Header, Main, Footer and Off Canvas. Other layout is expected to be implemented using Drupal blocks and a CSS grid framework.

A Pattern Lab generated style guide can be found [here](https://aleksip.github.io/styleguide-shila-drupal-theme/) (online style guide might not be up to date).

Please note that this theme is in early stages of development.


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

Please note that the contents of the `css`, `images` and `templates/patterns` directories are copied from the StarterKit and should not be edited.



## Integrating with Pattern Lab

At the moment a forked version of Pattern Lab is required for Drupal template compatibility.

Prerequisites: Shila Drupal Theme StarterKit and [Composer](https://getcomposer.org/) installed.

In the theme root directory run:

```sh
git clone https://github.com/aleksip/edition-php-drupal-standard pattern-lab
```

In the `pattern-lab` directory run:

```sh
composer install
```

In the file `pattern-lab/config/config.yml` change `sourceDir` and `twigAutoescape` like so:

```yml
sourceDir: ../starterkit/dist
twigAutoescape: false
```

If everything went well you should now be able to generate the static Pattern Lab site. In the `pattern-lab` directory run:

```sh
php core/console --generate
```
