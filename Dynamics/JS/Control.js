/*=============================Elementos formulario======== */
let formulario = document.getElementById('main-form');


let usuario_nombre = document.getElementById('nombre');
let usuario_edad = document.getElementById('edad');
let usuario_codigo_postal = document.getElementById('CodigoPostal');
let genero = document.querySelector("input[name='usuario-gen']:checked");
let interes = document.querySelector("input[name='Interes']:checked");
let pais = document.querySelector("input[name='Pais']:checked");
    
let GENEROS = [ "Masculino", "Femenino", "Otro"];
let INTERESES = ["Tecnologia", "Deportes", "Musica", "Arte"];
let PAISES = ["Mexico", "China", "USA", "Peru", "Italia", "Francia"];

/*=============================Validación de formularios JS======== */
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    
    /**NO LOGRÉ VALIDAR :( */

    console.log("Enviado");
})