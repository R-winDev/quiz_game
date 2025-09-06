<?php

use Core\App;
use Core\Database;
use Core\Validator;

$db = App::resolve(Database::class);


$username = $_POST["username"];
$score = $_POST["score"];

if ($score > 0 && $score <= 100) {
    $db->query("INSERT INTO `users` (`username`, `score`) VALUES (?, ?)", [$username, $score]);
    header('location: /');
    die();
}
header('location: /');
die();
