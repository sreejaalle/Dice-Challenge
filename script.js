var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
var leftDiceImage = document.querySelector(".img1");
var rightDiceImage = document.querySelector(".img2");
leftDiceImage.setAttribute("src", "images/dice" + randomNumber1 + ".png");
rightDiceImage.setAttribute("src", "images/dice" + randomNumber2 + ".png");
var heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "Player 2 Wins! 🚩";
} else {
    heading.innerHTML = "It's a Draw! 🎲";
}
