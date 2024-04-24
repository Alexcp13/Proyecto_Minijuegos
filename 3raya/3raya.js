import "./3raya.css"

export const tresRaya = () => {

    const statusDisplay = document.querySelector('.game-notification'),
        xWinsDisplay = document.querySelector('.x-wins'),
        oWinsDisplay = document.querySelector('.o-wins'),
        gameState = ["", "", "", "", "", "", "", "", ""],
        winnings = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ],
        winMessage = () => `El jugador ${currentPlayer} ha ganado!`,
        drawMessage = () => `Empate!`,
        currentPlayerTurn = () => `Turno del jugador ${currentPlayer}`


    let gameActive = true,
        currentPlayer = "X",
        xWins = 0,
        oWins = 0



    function main() {
        handleStatusDisplay(currentPlayerTurn())
        handleWinsDisplay()
        listeners()
    }

    function listeners() {
        document.querySelector('.game-container').addEventListener('click', handleCellClick)
        document.querySelector('.game-restart').addEventListener('click', handleRestartGame)
        document.getElementById('start-X').addEventListener('click', () => handlePlayerChoice("X"))
        document.getElementById('start-O').addEventListener('click', () => handlePlayerChoice("O"))
    }
    function handlePlayerChoice(player) {
        currentPlayer = player;
        handleStatusDisplay(currentPlayerTurn());
        document.querySelectorAll('.player-choice').forEach(button => {
            button.style.display = "none"
        })
    }

    function handleStatusDisplay(message) {
        statusDisplay.innerHTML = message
    }

    function handleWinsDisplay() {
        xWinsDisplay.innerHTML = `Victorias de X: ${xWins}`
        oWinsDisplay.innerHTML = `Victorias de O: ${oWins}`
    }
    function handleRestartGame() {
        gameActive = true

        restartGameState()
        currentPlayer = "X"

        handleStatusDisplay(currentPlayerTurn())
        document.querySelectorAll('.game-cell').forEach(cell => cell.innerHTML = "")
        document.querySelectorAll('.player-choice').forEach(button => {
            button.style.display = "inline-block"
        });
    }

    function handleCellClick(clickedCellEvent) {
        const clickedCell = clickedCellEvent.target
        if (clickedCell.classList.contains('game-cell')) {
            const clickedCellIndex = Array.from(clickedCell.parentNode.children).indexOf(clickedCell)
            if (gameState[clickedCellIndex] !== '' || !gameActive) {
                return false
            }

            handleCellPlayed(clickedCell, clickedCellIndex)
            handleResultValidation()
        }
    }

    function handleCellPlayed(clickedCell, clickedCellIndex) {
        gameState[clickedCellIndex] = currentPlayer
        clickedCell.innerHTML = currentPlayer
    }

    function handleResultValidation() {
        let roundWon = false
        for (let i = 0; i < winnings.length; i++) {
            const winCondition = winnings[i]
            let position1 = gameState[winCondition[0]],
                position2 = gameState[winCondition[1]],
                position3 = gameState[winCondition[2]]

            if (position1 === '' || position2 === '' || position3 === '') {
                continue;
            }
            if (position1 === position2 && position2 === position3) {
                roundWon = true
                break
            }
        }

        if (roundWon) {
            handleStatusDisplay(winMessage(currentPlayer))
            gameActive = false;
            if (currentPlayer === "X") {
                xWins++;
                handleWinsDisplay();
            } else {
                oWins++;
                handleWinsDisplay();
            }
            return;
        }

        let roundDraw = !gameState.includes("")
        if (roundDraw) {
            handleStatusDisplay(drawMessage())
            gameActive = false
            return
        }

        handlePlayerChange()
    }

    function handlePlayerChange() {
        currentPlayer = currentPlayer === "X" ? "O" : "X"
        handleStatusDisplay(currentPlayerTurn())
    }

    function restartGameState() {
        let i = gameState.length
        while (i--) {
            gameState[i] = ''
        }
    }

    main()
}