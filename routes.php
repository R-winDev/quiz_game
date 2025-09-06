<?php

$router->get('/', 'index.php')->only('guest');
$router->get('/question', 'game.php')->only('guest');
$router->get('/end', 'end.php')->only('guest');


$router->get('/highscores', 'registration/highscores.php')->only('guest');
$router->post('/register', 'registration/store.php')->only('guest');
