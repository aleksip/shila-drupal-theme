# Shila theme for Drupal 8 🐕

An [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) and [Pattern Lab](http://patternlab.io/) friendly, [component-based](https://github.com/aleksip/component-based-theming), fairly unopinionated starting point for new Drupal 8 themes. Shila theme can be used stand-alone with Pattern Lab, and currently supports both Pattern Lab Node and Pattern Lab PHP.

For more information and documentation, see the [project Wiki](https://github.com/aleksip/shila-drupal-theme/wiki).


## Setup

Prerequisites: [npm](https://nodejs.org/) and [Composer](https://getcomposer.org/) installed.

In the Shila theme root directory run

```sh
npm run setup
```


## Additional setup for Pattern Lab PHP

The default setup is for Pattern Lab Node. Follow these additional instructions if you want to use Pattern Lab PHP.

In the Shila theme root directory run

```sh
npm run setup-pattern-lab-php
```

Then open `gulp-config.yml` and uncomment the `dir` line in the Pattern Lab section.


## Gulp tasks

The theme includes a `gulpfile.js` with some useful tasks. However, using Gulp and these tasks is completely optional.

The default task compiles any Sass files, generates Pattern Lab, launches a Browsersync server at `http://localhost:3000` and then keeps watching for any changes made to Sass, Twig and other files.

For the default task, in the Shila theme root directory run

```sh
gulp
```

To list all available tasks with short descriptions, in the Shila theme root directory run

```sh
gulp --tasks
```


## Known issues with Pattern Lab Node

- There might be one or more errors similar to `request to http://127.0.0.1:32853/?type=renderFile failed, reason: connect ECONNRESET 127.0.0.1:32853`. Try generating the site again until there are no such errors.


## Integrating with Drupal

Prerequisites:  [Component Libraries](https://www.drupal.org/project/components) module installed and enabled.
