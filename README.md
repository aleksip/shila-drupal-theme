# Shila theme for Drupal 8

An [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) and [Pattern Lab](http://patternlab.io/) friendly starting point for new Drupal 8 themes. Can be used stand-alone with Pattern Lab. Can be used as a Pattern Lab StarterKit as well.

Shila theme is based on [pattern-lab-project](https://github.com/aleksip/pattern-lab-project) and uses [shila-css](https://github.com/aleksip/shila-css).

Please note that theme-specific CSS files are not committed to the repository. They can be generated after installing development dependencies.


## Installing development dependencies

Prerequisites: [npm](https://nodejs.org/) installed.

In the Shila theme root directory run:

```sh
npm install
```


## Generating theme-specific CSS files

In the Shila theme root directory run:

```sh
gulp sass
```


## Integrating with Drupal

### Required: Component Libraries module

Install and enable the [Component Libraries module](https://www.drupal.org/project/components). No configuration is needed.


### Optional: UI Patterns module

Install and enable the [UI Patterns module](https://www.drupal.org/project/ui_patterns). Some components have a `ui_patterns.yml` definition file, which enables them to be used with UI Patterns.


## Integrating with Pattern Lab

Prerequisites: [npm](https://nodejs.org/) and [Composer](https://getcomposer.org/) installed.

In the Shila theme root directory run:

```sh
npm run install-pattern-lab
```

This will download Pattern Lab, make required configuration changes and generate the Pattern Lab website. The command will not do anything if a `pattern-lab` directory already exists.
