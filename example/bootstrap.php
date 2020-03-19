<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require(realpath(dirname(__FILE__) . '/../vendor/autoload.php'));

$loader = new \Twig\Loader\FilesystemLoader(__DIR__ . '/templates');

$twig = new \Twig\Environment($loader);
