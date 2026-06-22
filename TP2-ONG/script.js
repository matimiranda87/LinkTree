function abrirMenu(){


    let flexNav = document.querySelector("ul"); // Selecciona el elemento <ul> del menú

    flexNav.classList.toggle("flexNav"); // Agrega o quita la clase "flexNav" para mostrar u ocultar el menú

    let boton = document.querySelector("button"); // Selecciona el botón que se hizo clic

    if(flexNav.classList.contains("flexNav")){ // Verifica si el menú está abierto (tiene la clase "flexNav")
        boton.innerHTML = "✖"; // Cambia el texto del botón a "X" para indicar que el menú está abierto
    }else{
        boton.innerHTML = "☰"; // Cambia el texto del botón a "☰" para indicar que el menú está cerrado
    }
}

/*funcion carrousel*/
let imagenes = document.querySelectorAll('.slides img') // Selecciona todas las imágenes dentro del contenedor con la clase "slides"

let posicion = 0

function activarImagen(posicion) {  // Elimina la clase 'active' de todas las imágenes
    imagenes.forEach((img) => img.classList.remove('active')) // Agrega la clase 'active' a la imagen en la posición actual
    imagenes[posicion].classList.add('active') // Actualiza el texto del indicador de posición
}

function siguiente() {
    posicion = posicion + 1

    if (posicion >= imagenes.length) { // Si la posición supera el número de imágenes, vuelve al inicio
        posicion = 0
    }

    activarImagen(posicion)     // Activa la imagen en la posición actual
}

function anterior() { // Resta 1 a la posición actual para mostrar la imagen anterior
    posicion = posicion - 1

    if (posicion < 0) { // Si la posición es menor que 0, vuelve al final de la lista de imágenes
        posicion = imagenes.length - 1
    }

    activarImagen(posicion)
}

// =====================================
// MODAL DONACIONES CON CALCULADORA
// =====================================

function abrirModalDonacion(){

    let modal = document.createElement("div"); // Crea un nuevo elemento <div> para el modal

    modal.classList.add("modal-impacto");// Agrega la clase "modal-impacto" al nuevo elemento para aplicar estilos

    modal.innerHTML = ` 

        <div class="contenido-impacto">

            <h2>Calculá el impacto de tu ayuda 🐾</h2>

            <p>
                Ingresá un monto estimado y descubrí cómo tu donación puede ayudar
                a nuestros perros y gatos rescatados.
            </p>

            <input type="number" id="montoDonacion" placeholder="Ingresá un monto en pesos"> 

            <button class="btn-calcular" id="calcularImpacto">
                Calcular impacto
            </button>

            <p class="resultado-impacto" id="resultadoImpacto"></p>

            <button class="btn-confirmar" id="hacerDonacion">
                Hacer donación
            </button>

            <button class="btn-cerrar" id="cerrarModal">
                Cerrar
            </button>

        </div>
    `;

    document.body.appendChild(modal); // Agrega el modal al final del cuerpo del documento para que sea visible en la página

    let inputMonto = modal.querySelector("#montoDonacion"); // Selecciona el campo de entrada para el monto de la donación dentro del modal
    let botonCalcular = modal.querySelector("#calcularImpacto"); // Selecciona el botón para calcular el impacto dentro del modal
    let resultadoImpacto = modal.querySelector("#resultadoImpacto");// Selecciona el elemento donde se mostrará el resultado del impacto dentro del modal    
    let botonHacerDonacion = modal.querySelector("#hacerDonacion");// Selecciona el botón para confirmar la donación dentro del modal
    let botonCerrar = modal.querySelector("#cerrarModal");// Selecciona el botón para cerrar el modal dentro del modal

    botonCalcular.addEventListener("click", function(){ // Agrega un evento de clic al botón de calcular impacto

        let monto = Number(inputMonto.value);

        if(monto <= 0){

            resultadoImpacto.textContent = "Por favor, ingresá un monto válido.";

        }else{

            let raciones = Math.floor(monto / 800);
            let vacunas = Math.floor(monto / 5000);

            resultadoImpacto.textContent =
                "Con $" + monto + " podemos cubrir aproximadamente " +
                raciones + " raciones de alimento o ayudar con " +
                vacunas + " vacunas.";

        }

    });

    botonHacerDonacion.addEventListener("click", function(){

        modal.innerHTML = `

            <div class="contenido-impacto">

                <h2>¡Gracias por tu ayuda! ❤️</h2>

                <p>
                    Tu colaboración nos ayuda a seguir rescatando, alimentando
                    y cuidando animales que esperan una familia.
                </p>

                <a href="index.html">Volver al inicio</a>

            </div>
        `;

    });

    botonCerrar.addEventListener("click", function(){
        modal.remove();
    });

}



function enviarConsulta(event){

    event.preventDefault();

    alert("Gracias por contactarte con Huellas de Esperanza 🐾. Recibimos tu consulta y te responderemos pronto.");

}