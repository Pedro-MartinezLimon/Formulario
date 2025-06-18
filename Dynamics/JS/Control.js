/*=============================Elementos formulario======== */
let formulario = document.getElementById('main-form');

let GENEROS = [ "Masculino", "Femenino", "Otro"];
let INTERESES = ["Tecnologia", "Deportes", "Musica", "Arte"];
let PAISES = ["Mexico", "China", "USA", "Peru", "Italia", "Francia"];

/*=============================Validación de formularios JS======== */

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    let usuario_nombre = document.getElementById('nombre');
    let usuario_edad = document.getElementById('edad');
    let usuario_codigo_postal = document.getElementById('CodigoPostal');
    let genero = document.querySelector("input[name='Genero']: checked");
    let interes = document.querySelector("input[name='']:checked");
    let pais = document.querySelector("input[name='Pais']: checked");

    /* Validando */
    if(!isNaN(usuario_nombre.value)) return;
    if(isNaN(usuario_edad.value)) return;
    if(isNaN(usuario_codigo_postal.value)) return;
    if(GENEROS.indexOf(genero.value.toString() == -1)) return;
    if(INTERESES.indexOf(interes.value.toString()) == -1) return;
    if(PAISES.indexOf(pais.value.toString() == -1)) return;
})