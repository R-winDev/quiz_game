<!DOCTYPE html>
<html lang="en" dir="rtl">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Congrats!</title>
    <link rel="stylesheet" href="/views/styles/app.css" />
</head>

<body>
    <div class="container">
        <div class="flex-center flex-column" id="end">
            <div class="final-score-wrapper">
                <h2>امتیاز نهایی شما</h2>
                <h1 id="finalScore">0</h1>
            </div>
            <form action="/register" method="POST">
                <input type="text" name="username" id="username" placeholder="نام مستعار" />
                <button type="submit" class="btn" id="saveCoreBtn" disabled>ذخیره</button>
            </form>
            <a href="/" class="btn">بازگشت به خانه</a>
        </div>
    </div>
    <script src="/views/scripts/end.js"></script>
</body>

</html>