jQuery(document).ready(function ($) {
  'use strict';
  $('.menu-item__action').click(function() {
    var $menuItem = $(this).parent().parent();
    if ($menuItem.is('.menu-item--expanded') || $menuItem.is('.menu-item--collapsed')) {
      $menuItem.toggleClass("menu-item--expanded").toggleClass('menu-item--collapsed');
      $(this).parent().siblings('.menu').slideToggle(300);
    }
  });
  $('.menu-item__action').each(function() {
    var $menuItem = $(this).parent().parent();
    if (!$menuItem.is('.menu-item--active-trail') && $menuItem.is('.menu-item--expanded')) {
      $menuItem.toggleClass("menu-item--expanded").toggleClass("menu-item--collapsed");
      $(this).parent().siblings('.menu').hide();
    }
  });
});
