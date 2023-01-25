var texto = document.getElementById("mensaje"); // el get me permite llamar al elemneto por el nombre del id
var muneco = document.querySelector(".muneco");
var h1 = document.querySelector(".caja2 h1");
var h3 = document.querySelector(".caja2 h3");
var reulta = document.querySelector(".texto-resuelto");

function imprimir(frase) {
    document.write(frase);
}
console.log(texto);

var letras_mayusculas = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";

function tiene_mayusculas(texto) {

    for (i = 0; i < texto.length; i++) {
        if (letras_mayusculas.indexOf(texto.charAt(i), 0) != -1) {
            swal('Oops!','Ingrese solo letras minúsculas', 'error');
            mostrar();
            break;           
        }
    }
}
var letras_acento = "áéíóú";

function tiene_acento(texto) {

    for (i = 0; i < texto.length; i++) {
        if (letras_acento.indexOf(texto.charAt(i), 0) != -1) {
            swal('Oops!','Ingrese solo letras sin acento', 'error');
            mostrar();
            break;           
        }
    }
}


function encriptar() {
    var re = texto.value;    
    ocultarElementos();
    var texIn = re.replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('o', 'ober')
        .replaceAll('a', 'ai')
        .replaceAll('u', 'uftan');
    reulta.textContent = texIn;
    tiene_mayusculas(re);
    tiene_acento(re);    
    
}



var botonEnc = document.getElementById("encriptar");
botonEnc.onclick = encriptar;

function ocultarElementos() {
    muneco.classList.add("ocultar");
    h1.classList.add("ocultar");
    h3.classList.add("ocultar");
}

function desenciptar() {
    ocultarElementos();
    var re = texto.value;
    var texDes = re.replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ober', 'o')
        .replaceAll('ai', 'a')
        .replaceAll('uftan', 'u');
    reulta.textContent = texDes;

}

var botonDes = document.getElementById("desencriptar");
botonDes.onclick = desenciptar;


var copear = document.querySelector('#copiar');


copear.addEventListener('click', async () => {
    await navigator.clipboard.writeText(reulta.value)
    swal('Yess!','El mensaje a sido copiado','success');
});


function limpiarCajas() {

    texto.value = "";
    reulta.innerText = "";
    mostrar();


}
var botoneLimpiar = document.querySelector('#limpiar');
botoneLimpiar.onclick = limpiarCajas;

function mostrar() {
    muneco.classList.remove("ocultar")
    h1.classList.remove("ocultar");
    h3.classList.remove("ocultar");


}

