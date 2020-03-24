var randomNumber = Math.round(Math.random() * 100);
var count = 1;
var button = document.getElementById("submitGuess");
var easy = document.querySelector("#easy");
var medium = document.querySelector("#medium");
var hard = document.querySelector("#hard");
var p = document.querySelector("p");
var gameOver = false;
var info = document.querySelector("#info");
var restart = document.querySelector("#restart");
var img = document.querySelector("img");


easy.addEventListener("click", function () {
    randomNumber = Math.round(Math.random() * 10);
    p.textContent = "Easy MODE! - Guess Between 1 - 10";
    info.textContent = "";
});

medium.addEventListener("click", function () {
    randomNumber = Math.round(Math.random() * 50);
    p.textContent = "Medium MODE! - Guess Between 1 - 50";
    info.textContent = "";
});

hard.addEventListener("click", function () {
    randomNumber = Math.round(Math.random() * 100);
    p.textContent = "HARD MODE!!! - Guess Between 1 - 100";
    info.textContent = "";
});

button.addEventListener("click", function () {
    var guess = document.getElementById("guess").value;
    if (!gameOver) {
        count++;
        if (guess == randomNumber) {
            info.textContent = "YOU DID IT BUDDY!!! It took you " + count + " attempts";
            info.style.color = "green";
            info.style.fontSize = "20px"
            img.style.visibility = "visible";
            gameOver = true;
        } else if (guess > randomNumber) {
            alert("TOO HIGH!!");
        } else {
            alert("TOO LOW");
        }
        if (count > 5) {
            info.style.color = "red";
            info.textContent =" ***** GAME OVER MAN ***** ";
            gameOver = true;
        }
    }
});

restart.addEventListener("click", function() {
    gameOver = false;
    count = 0;
    info.textContent = "NEW GAME - PICK A DIFFICULTY";
    info.style.color = "Black";
    img.style.visibility = "hidden";
})