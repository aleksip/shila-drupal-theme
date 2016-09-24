<?php

$function = new Twig_SimpleFunction(
    'link',
    function ($title, $url) {
        return '<a href="' . $url . '">' . $title . '</a>';
    },
    array('is_safe' => array('html'))
);
