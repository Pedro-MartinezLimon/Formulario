/*=============================Elementos formulario======== */
let formulario = document.getElementById('main-form');


const usuario_nombre = document.getElementById('nombre');
const usuario_edad = document.getElementById('edad');
const usuario_codigo_postal = document.getElementById('CodigoPostal');

let GENEROS = [ "Masculino", "Femenino", "Otro"];
let INTERESES = ["Tecnologia", "Deportes", "Musica", "Arte"];
let PAISES = ["Mexico", "China", "USA", "Peru", "Italia", "Francia"];

/*=============================Validación de formularios JS======== */
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    
    if(isNaN(usuario_nombre.value)) console.log("Nombre valido!");
    else console.log("Nombre invalido");

    if(!isNaN(usuario_edad.value) && usuario_edad.value < 100 || usuario_edad.value > 18) console.log("Edad Valida");
    else console.log("Edad invalida");

    if(!isNaN(usuario_codigo_postal.value) || usuario_codigo_postal.value.length == 5) console.log("Código Postal valido");
    else console.log("Invalido");


    
    const genero = document.querySelector("input[name='usuario-gen']:checked");
    const interes = document.querySelector("input[name='Interes']:checked");
    const pais = document.querySelector("input[name='Pais']:checked");
    
    if(GENEROS.indexOf(genero.value) != -1) console.log("Género invalido");
    else console.log("Género valido!");

    if(INTERESES.indexOf(interes.value) != -1) console.log("Intéreses validos");
    else console.log("Intéres invalido");
    
    if(PAISES.indexOf(pais.value) != -1) console.log("Nación Valida");
    else console.log("Nación invalida");

    console.log("Enviado");
})