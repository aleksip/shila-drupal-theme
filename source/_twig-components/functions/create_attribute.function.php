<?php

// This file is for Pattern Lab PHP only.
// The function will work if Data Transform Plugin is installed.
$function = new Twig_SimpleFunction('create_attribute', function($attributes = []) {
  return is_array($attributes) ? new \Drupal\Core\Template\Attribute($attributes) : $attributes;
});
