import "./ahorcado.css"


export const ahorcado = () => {
    const replaceAt = (string, character, index) => {
        return string.substring(0, index) + character + string.substring(index + character.length);
    }
    const words = ["españa", "martillo", "saltamontes", "toro", "patinete", "ordenador", "programacion", "tren", "libeluna"];
    const secretWord = words[Math.floor(Math.random() * words.length)];
    let hiddenWord = secretWord.replace(/./g, "_ ");
    document.querySelector('.hiddenWord').innerHTML = hiddenWord;

    const errors = ["../assets/1.png", "../assets/2.png", "../assets/3.png", "../assets/4.png"]
    const maxErrors = errors.length;
    let errorCounter = 0



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

        if (!hiddenWord.includes("_")) {
            alert("has ganado")
        }

        if (errorCounter > maxErrors) {
            alert(`¡Has perdido! La palabra era ${secretWord}.`)
        }

    }


    document.querySelector(".verificar").addEventListener('click', evaluateWord);
}
