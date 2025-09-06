const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScores.forEach((score) => {
    let liElem = document.createElement("li");
    liElem.innerText = `${score.name} - ${score.score}`;
    liElem.className = "high-score";
    highScoresList.append(liElem);
});
