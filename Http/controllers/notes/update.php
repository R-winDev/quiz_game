<?php

use Core\App;
use Core\Database;
use Core\Validator;

$db = App::resolve(Database::class);

$currentUserId = 2;

$note = $db->query("SELECT * FROM notes WHERE id = :id", [":id" => $_POST['id']])->findOrFail();

authorize($note['user_id'] === $currentUserId);

$errors = [];

if (! (Validator::string($_POST["body"], 1, 1000))) {
    $errors["body"] = "Please enter a body not more than 1,000 characters.";
}

if (!empty($errors)) {
    view("notes/edit.view.php", [
        'heading' => 'Edit Note',
        'errors' => $errors,
        'note' => $note
    ]);
    die();
}

$db->query("UPDATE notes SET body = :body WHERE id = :id", [
    ':body' => $_POST["body"],
    ':id' => $_POST["id"]
]);

header("Location: /notes");
die();