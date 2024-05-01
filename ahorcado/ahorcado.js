import "./ahorcado.css"


export const ahorcado = () => {
    const replaceAt = (string, character, index) => {
        return string.substring(0, index) + character + string.substring(index + character.length);
    }

    let secretWord
    let hiddenWord
    let errorCounter
    const setGame = () => {

        const words = ["españa", "martillo", "saltamontes", "toro", "patinete", "ordenador", "programacion", "tren", "libeluna"];
        secretWord = words[Math.floor(Math.random() * words.length)];

        hiddenWord = secretWord.replace(/./g, "_ ");
        document.querySelector('.hiddenWord').innerHTML = hiddenWord;

        const img = document.createElement("img");
        img.src = "../assets/b.png";

        const ahorcadoDiv = document.querySelector(".ahorcado");
        ahorcadoDiv.innerHTML = "";
        ahorcadoDiv.appendChild(img);
        errorCounter = 0

    }
    setGame();


    const errors = ["../assets/1.png", "../assets/2.png", "../assets/3.png", "../assets/4.png"]
    const maxErrors = errors.length;




    const evaluateWord = () => {
        const letter = document.querySelector('input').value;

        let error = true;
        for (let i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === letter) {

                hiddenWord = replaceAt(hiddenWord, letter, i * 2);
                error = false;

            }

        }
        document.querySelector('.hiddenWord').innerHTML = hiddenWord;


        if (error) {
            errorCounter++;
            if (errorCounter <= maxErrors) {
                const img = document.createElement("img");
                img.src = errors[errorCounter - 1];
                img.alt = `Error ${errorCounter}`;
                const ahorcadoDiv = document.querySelector(".ahorcado");
                ahorcadoDiv.innerHTML = "";
                ahorcadoDiv.appendChild(img);
            }

        }
        document.querySelector('input').value = ""


        if (!hiddenWord.includes("_")) {
            alert("has ganado")
        }

        if (errorCounter >= maxErrors) {
            setTimeout(() => {
                alert(`¡Has perdido! La palabra era ${secretWord}.`)
            }, 500);

        }

    }



    const restartGame = () => {


        setGame();



    }


    document.querySelector(".verificar").addEventListener('click', evaluateWord);
    document.getElementById("restartAhorcado").addEventListener('click', restartGame);
}


