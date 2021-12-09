'use strict'

// Abrir una ventana pequeña en el navegador 
function abrirVentana2(url){
    window.open(url,"","width=300,heigth=200");
}

function Href(){
    console.log("Has presionado el boton cambiar color");
    document.getElementById('enlace').innerHTML=" Google"
    document.getElementById('enlace').href="http://www.google.com"
}

// abrirVentana2('https://www.youtube.com/')