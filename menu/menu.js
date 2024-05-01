import "./menu.css"


export const menu = () => {
    const boton1 = document.getElementById("menuboton1")
    const boton2 = document.getElementById("menuboton2")
    const boton3 = document.getElementById("menuboton3")
    const botonVolver = document.getElementById("volver")
    const section1 = document.getElementById("section1")
    const section2 = document.getElementById("section2")
    const section3 = document.getElementById("section3")
    const menu = document.getElementById("menu")


    boton1.addEventListener('click', function () {
        section1.classList.remove('oculto');
        if (!section2.classList.contains('oculto')) {
            section2.classList.add('oculto');
        }
        if (!section3.classList.contains('oculto')) {
            section3.classList.add('oculto');
        }
        if (!menu.classList.contains('oculto')) {
            menu.classList.add('oculto');
        }
        botonVolver.classList.remove("oculto")
    });


    boton2.addEventListener('click', function () {
        section2.classList.remove('oculto');
        if (!section1.classList.contains('oculto')) {
            section1.classList.add('oculto');
        }
        if (!section3.classList.contains('oculto')) {
            section3.classList.add('oculto');
        }
        if (!menu.classList.contains('oculto')) {
            menu.classList.add('oculto');
        }
        botonVolver.classList.remove("oculto")


    });


    boton3.addEventListener('click', function () {
        section3.classList.remove('oculto');
        if (!section1.classList.contains('oculto')) {
            section1.classList.add('oculto');
        }
        if (!section2.classList.contains('oculto')) {
            section2.classList.add('oculto');
        }
        if (!menu.classList.contains('oculto')) {
            menu.classList.add('oculto');
        }
        botonVolver.classList.remove("oculto")
    });

    botonVolver.addEventListener('click', function () {
        menu.classList.remove("oculto");
        if (!section1.classList.contains('oculto')) {
            section1.classList.add('oculto');
        }
        if (!section2.classList.contains('oculto')) {
            section2.classList.add('oculto');
        }
        if (!section3.classList.contains('oculto')) {
            section3.classList.add('oculto');
        }
        botonVolver.classList.add("oculto")


    });
}