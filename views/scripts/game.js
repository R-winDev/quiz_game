const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const ProgressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loader");
const game = document.getElementById("game");
const urlParams = new URLSearchParams(window.location.search);
const urlGrade = urlParams.get("grade");
const urlLesson = urlParams.get("lesson");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];
// "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"

fetch(`../questions/grade${urlGrade}/${urlLesson}.json`)
    .then((res) => {
        if (!res.ok) {
            if (res.status === 404) {
                window.location.href = "/not-found";
                return;
            }
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then((loadedQuestions) => {
        if (!loadedQuestions.results) {
            throw new Error("Invalid JSON structure: 'results' not found");
        }

        questions = loadedQuestions.results.map((loadedQuestion) => {
            const formattedQuestion = {
                question: loadedQuestion.question,
            };

            const answerChoices = [...loadedQuestion.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
            answerChoices.splice(formattedQuestion.answer - 1, 0, loadedQuestion.correct_answer);

            answerChoices.forEach((choice, index) => {
                formattedQuestion["choice" + (index + 1)] = choice;
            });

            return formattedQuestion;
        });

        startGame();
    })
    .catch((err) => {
        console.error("Fetch error:", err);
        window.location.href = "/not-found";
    });

// CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

let startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
    game.classList.remove("hidden");
    loader.classList.add("hidden");
};

let getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        // go to the end page
        return window.location.assign("/end");
    }
    questionCounter++;
    progressText.innerText = `سوال ${questionCounter}/${MAX_QUESTIONS}`;
    // update the progressbar
    console.log();
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};
