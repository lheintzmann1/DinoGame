const leaderboard = document.querySelector("#leaderboard");
const leaderboardList = document.querySelector("#leaderboard-list");
const SCORES_KEY = "highscores";

function setupLeaderboard() {
  const scores = getScores();
  scores.forEach(score => {
    const li = document.createElement("li");
    li.textContent = score;
    leaderboardList.append(li);
  });
}

function getScores() {
  const scores = localStorage.getItem(SCORES_KEY);
  if (scores == null) return [];
  return JSON.parse(scores);
}