<?php

require __DIR__ . '/vendor/autoload.php';

use \Drupal\Core\Template\Attribute;

/**
 * @param Twig_Environment $env - The Twig Environment - https://twig.symfony.com/api/1.x/Twig_Environment.html
 * @param $config - Config of `@basalt/twig-renderer`
 */
function addCustomExtension(\Twig_Environment &$env, $config) {

  /**
   * Add Drupal create_attribute function.
   */
  $env->addFunction(new \Twig_SimpleFunction('create_attribute', function ($attributes = []) {
    return is_array($attributes) ? new Attribute($attributes) : $attributes;
  }));

}
