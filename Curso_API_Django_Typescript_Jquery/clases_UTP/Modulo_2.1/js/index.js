'use strict'
console.log("Hola Mundo con JavaScript");
alert("Hola Mundo, curso programación web");


function myFunction() {
    alert("Bienvenidos al curso de programación web!");
  }


function cambiaColor(color){
  parrafo1.style.background=color;
}

//Buscamos el elemento que tenga id parrafo1
var parrafo1=document.getElementById('parrafo1');
console.log(parrafo1);
console.log()
console.log('Prueba contenido')
//Muestra el contenido del elemento con id parrafo1
var parrafo2=document.getElementById('parrafo1').innerHTML;
console.log(parrafo2)

// Cambia el texto o valor de un DIV
var parrafo1= document.getElementById("parrafo1");

// Tambien para seleccion un elemento con querySelector, con almohadilla # 
var parrafo2=document.querySelector("#parrafo1");
parrafo2.innerHTML="Texto prueba DOM desde JS";
// Cambiar el estilo del texto 
parrafo2.style.background="yellow";
parrafo2.style.padding="20px";
parrafo2.style.color="black";
parrafo2.class="Hola";
// Añadir mas clases 
parrafo2.className="hola hola2";
console.log(parrafo2);


// CONSEGUIR ELEMENTO POR SU ETIQUETA
// saca un array de todos los elementos div en la pagina 
var todosDivs=document.getElementsByTagName('div');
console.log(todosDivs);
// mirar el contenido del div seleccionado, en este caso 2
var contenidoDiv=todosDivs[2].textContent;
// Cambiar el texto contenido del div 2 seleccionado  mediante innerHTML
var contenidoDiv=todosDivs[2];

// Abrir una ventana en otra pestaña 
function abrirVentana1(url){
  window.open(url);
}

// Abrir una ventana pequeña en el navegador 
function abrirVentana2(url){
  window.open(url,"","width=300,heigth=200");
}

abrirVentana2('https://www.youtube.com/')


