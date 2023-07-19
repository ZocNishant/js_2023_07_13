"use strict";
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Number!";

console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 10;
document.querySelector(".score").textContent = 13;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayNumber = function(number) {
  document.querySelector(".number") = number;
}

const displayScore = function(score) {
  document.querySelector(".score") = score;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No Number 🛑");
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!🥳🥳🥳");
    displayNumber().textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    displayNumber().style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "Uhhhhh! Too High.☝️" : "Uhhhhh! Too Low.👇"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost The Game.😒");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score;
  displayNumber().textContent = "?";
  document.querySelector(".guesss").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  displayNumber().style.width = "15rem";
});
