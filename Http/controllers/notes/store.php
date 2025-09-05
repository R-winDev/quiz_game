<?php

use Core\App;
use Core\Database;
use Core\Validator;

$db = App::resolve(Database::class);
$errors = [];

if (! (Validator::string($_POST["body"], 1, 1000))) {
    $errors["body"] = "Please enter a body not more than 1,000 characters.";
}

if (!empty($errors)) {
    view("notes/create.view.php", ['heading' => 'Create Note', 'errors' => $errors]);
    die();
}
$db->query("INSERT INTO notes (body, user_id) VALUES (:body, :user_id)", [
    "body" => $_POST["body"],
    "user_id" => 2
]);

header('Location: /notes');
die();

//view("notes/create.view.php", ['heading' => 'Create Note', 'errors' => $errors]);