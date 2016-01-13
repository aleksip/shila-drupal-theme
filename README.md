# Shila theme for Drupal 8

An [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) and [Pattern Lab](http://patternlab.io/) friendly starting point for new Drupal 8 themes.

Defines only four regions: Header, Main, Footer and Off Canvas. Other layout is expected to be implemented using Drupal blocks and a CSS grid framework.

Tries to follow [Drupal CSS coding standards](https://www.drupal.org/coding-standards/css).

Please note that this theme is in early stages of development.


## Development tools, libraries and frameworks used

- [libSass](http://sass-lang.com/libsass) Sass engine
- [Gulp](http://gulpjs.com/) toolkit
- [Bower](http://bower.io/) package manager
- [Composer](https://getcomposer.org/) dependency manager (for installing Pattern Lab)
- [Bourbon](http://bourbon.io/) mixin library
- [Neat](http://neat.bourbon.io/) grid framework


## Installing development dependencies

Prerequisites: npm, Gulp and Bower installed.

In the theme root directory run:
 
```sh
npm install
bower install
```


## Integrating Pattern Lab

While it is possible to use the theme on its own, it is designed to be used with the [Twig edition of Pattern Lab](https://github.com/pattern-lab/edition-php-twig-standard), [Shila Drupal Theme StarterKit](https://github.com/aleksip/starterkit-shila-drupal-theme) and [Data Transform Plugin](https://github.com/aleksip/plugin-data-transform). At the moment a forked version of Pattern Lab is required for Drupal template compatibility.

In the theme root directory run:

```sh
git clone -b shila-drupal-theme http://github.com/aleksip/edition-php-twig-standard pattern-lab
git clone http://github.com/aleksip/starterkit-shila-drupal-theme starterkit
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


## Using Gulp

The included `gulpfile.js` contains tasks for watching theme files and acting according to those changes. Processed master files from the theme will be copied over to the `starterkit` directory, which in turn is used by Pattern Lab.
