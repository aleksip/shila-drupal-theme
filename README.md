# Shila theme for Drupal 8

An [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) and [Pattern Lab](http://patternlab.io/) friendly, [component-based](https://github.com/aleksip/component-based-theming), fairly unopinionated starting point for new Drupal 8 themes. Shila theme can be used stand-alone with Pattern Lab.

For more information and documentation, see the [project Wiki](https://github.com/aleksip/shila-drupal-theme/wiki).


## Integrating with Drupal

Prerequisites:  [Component Libraries](https://www.drupal.org/project/components) module installed and enabled.


## Integrating with Pattern Lab

Prerequisites: [npm](https://nodejs.org/) and [Composer](https://getcomposer.org/) installed.

In the Shila theme root directory run:

```sh
npm run install-pattern-lab
```

This will download Pattern Lab, make required configuration changes and generate the Pattern Lab website. The command will not do anything if a `pattern-lab` directory already exists.


## Installing optional development dependencies

Prerequisites: [npm](https://nodejs.org/) installed.

In the Shila theme root directory run:

```sh
npm install
```

To generate theme-specific CSS files, in the Shila theme root directory run:

```sh
gulp sass
```
