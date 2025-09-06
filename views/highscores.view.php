<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>نفرات برتر</title>
    <link rel="stylesheet" href="/views/styles/app.css" />
    <link rel="stylesheet" href="/views/styles/highscores.css" />
</head>

<body>
    <div class="container">
        <div class="flex-center flex-column" id="highScores">
            <h1 id="finalScore">نفرات برتر</h1>
            <ul id="highScoresList">
                <?php foreach ($scores as $score) : ?>
                    <li class="high-score"><?= $score['username'] ?> - <?= $score['score'] ?></li>
                <?php endforeach ?>
            </ul>
            <a href="/" class="btn">بازگشت</a>
        </div>
    </div>

</body>

</html>