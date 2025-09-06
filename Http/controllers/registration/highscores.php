<?php

use Core\App;
use Core\Database;

$db = App::resolve(Database::class);

$scores = $db->query("SELECT * FROM users ORDER BY `users`.`score` DESC LIMIT 5")->get();

view('highscores.view.php', ['scores' => $scores]);
