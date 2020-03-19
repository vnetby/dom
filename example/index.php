<?php
require(__DIR__ . '/bootstrap.php');

echo $twig->render('header.twig');

echo $twig->render('home.twig');

echo $twig->render('footer.twig');
