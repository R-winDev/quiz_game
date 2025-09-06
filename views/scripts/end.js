const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveCoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const form = document.querySelector("form");

finalScore.innerText = mostRecentScore;

const newElem = document.createElement("input");
newElem.type = "hidden";
newElem.name = "score";
newElem.id = "score";
newElem.value = mostRecentScore;

form.append(newElem);

username.addEventListener("keyup", function () {
    saveScoreBtn.disabled = !username.value;
});
