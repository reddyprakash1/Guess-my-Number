let secretNumber = Math.trunc(Math.random() * 20 + 1);
// console.log(secretNumber);
let score = 20;
let highscore = 0;

//Logics:
document.getElementById('checkBtn').addEventListener('click', ()=>{
    const guessedNo = Number(document.getElementById('guess').value);
    // console.log(guessedNo);
    if (!guessedNo) {
        document.querySelector('.message').textContent = "No Number!";
    }

    // Win logics:
    else if (guessedNo === secretNumber) {
        document.querySelector('.message').textContent = "Correct Number!";
        document.querySelector("#number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "green";

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    //Too high:
    else if (guessedNo > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Too High";
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You lost the Game!";
            document.querySelector('.score').textContent = 0;
        }
    }

    //Too low:
    else if (guessedNo < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Too Low";
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You lost the Game!";
            document.querySelector('.score').textContent = 0;
        }
    }
})

//Again:
document.querySelector(".again").addEventListener("click", () => {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;

    document.querySelector(".message").textContent = "start Guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('#number').textContent = "?";
    document.getElementById('guess').value = "";
    document.querySelector('body').style.backgroundColor = "black";
})