import "./Ppt.css"

export const Ppt = () => {
    let userPoints = 0;
    let computerPoints = 0;

    let userPointsContainer = document.querySelector("#user-points");
    let computerPointsContainer = document.querySelector("#computer-points");
    let message = document.querySelector("#message");
    let winPointContainer = document.querySelector("#win-point");
    let chooseYourWeapon = document.querySelector("#choose-your-weapon");

    let userChoiceContainer = document.querySelector("#user-choice");
    let computerChoiceContainer = document.querySelector("#computer-choice");

    let weaponButtons = document.querySelectorAll(".weapon");
    weaponButtons.forEach(button => {
        button.addEventListener("click", startTurn);
    });

    function startTurn(e) {
        let computerChoice = Math.floor(Math.random() * 3);
        let userChoice = e.currentTarget.id;

        if (computerChoice === 0) {
            computerChoice = "roca🗿";
        } else if (computerChoice === 1) {
            computerChoice = "papel📋";
        } else if (computerChoice === 2) {
            computerChoice = "tijeras✂️";
        }

        if (
            (userChoice === "roca🗿" && computerChoice === "tijeras✂️") ||
            (userChoice === "tijeras✂️" && computerChoice === "papel📋") ||
            (userChoice === "papel📋" && computerChoice === "roca🗿")
        ) {
            userWins();
        } else if (
            (computerChoice === "roca🗿" && userChoice === "tijeras✂️") ||
            (computerChoice === "tijeras✂️" && userChoice === "papel📋") ||
            (computerChoice === "papel📋" && userChoice === "roca🗿")
        ) {
            computerWins();
        } else {
            draw();
        }

        message.classList.remove("disabled");
        userChoiceContainer.innerText = userChoice;
        computerChoiceContainer.innerText = computerChoice;
        restart.classList.remove("disabled");
        restart.addEventListener("click", restartGame);
    }


    window.addEventListener("load", () => {
        if (localStorage.getItem("userPoints") && localStorage.getItem('computerPoints')) {
            userPoints = parseInt(localStorage.getItem('userPoints'));
            computerPoints = parseInt(localStorage.getItem('computerPoints'));
            updatePointsDisplay();
        }
    });
    function updatePointsDisplay() {
        userPointsContainer.innerHTML = userPoints;
        computerPointsContainer.innerText = computerPoints;
    }



    function userWins() {
        userPoints++;
        localStorage.setItem("userPoints", userPoints);
        updatePointsDisplay();
        winPointContainer.innerText = "Has ganado! 🔥";
    }

    function computerWins() {
        computerPoints++;
        localStorage.setItem("computerPoints", computerPoints);
        updatePointsDisplay();
        winPointContainer.innerText = "Has perdido! 😭";
    }

    function draw() {
        winPointContainer.innerText = "Empate! 😱";
    }

    function restartGame() {
        restart.classList.add("disabled");
        chooseYourWeapon.classList.remove("disabled");
        message.classList.add("disabled");

        userPoints = 0;
        computerPoints = 0;

        userPointsContainer.innerText = userPoints;
        computerPointsContainer.innerText = computerPoints;


    }



};