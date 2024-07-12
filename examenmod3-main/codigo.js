let fotosMarcadas = 0;      /*FALLO 1: se cambia const por let para que se puedan modificar las imagenes*/

function marcar(evt) {
    if (evt.target.dataset.marcada == "true") {
        evt.target.style.filter = "";
        evt.target.dataset.marcada = "false";
        fotosMarcadas--;
    } else {
        /*FALLO 2: se pone 1 para que pase de 0 a 1 y se vea al 100% el sepia*/
        evt.target.style.filter = "sepia(1)"; 
        evt.target.dataset.marcada = "true";
        fotosMarcadas++;
    }

    /*FALLO 3: se modifica value por textContent*/
    document.getElementById("marcadas").textContent = fotosMarcadas;
}

const fotos = document.querySelectorAll("#fotografias img");
for (const foto of fotos) {
    /*FALL 4: se corrige marcarFoto por marcar para que coincida con la función de arriba*/
    foto.addEventListener("click", marcar);
}
