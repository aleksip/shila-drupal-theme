# Shila theme for Drupal 8

An [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) and [Pattern Lab](http://patternlab.io/) friendly starting point for new Drupal 8 themes. Can be used stand-alone with Pattern Lab. Can be used as a Pattern Lab StarterKit as well.


## Installing development dependencies

Prerequisites: [npm](https://nodejs.org/) installed.

In the Shila theme root directory run:

```sh
npm install
```

Please note that latest version of Shila theme always uses the latest version of [shila-css](https://github.com/aleksip/shila-css), which is still in alpha and can introduce breaking changes. If you are pulling changes from the Shila theme repository be sure to also update to the latest version of shila-css. Or if basing your theme on a specific version of Shila theme be sure to specify the exact matching version of shila-css in `package.json`.


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
