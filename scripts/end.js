const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveCoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", function () {
    saveScoreBtn.disabled = !username.value;
});

function saveHighScore(e) {
    console.log("clicked the saved button");
    e.preventDefault();
}
