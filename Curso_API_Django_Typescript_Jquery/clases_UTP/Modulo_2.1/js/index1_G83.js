'use strict'
var num1=10
var num2=20

var multiplicacion=num1*num2
console.log('La multiplicacion de num1 y num2 es:',num1,num2)
console.log(multiplicacion)

function myFunction(){
    alert('Has presionado el boton, cuenta regresiva')
    console.log('Mensaje en consola')
}

function cambiaColor(color){
    var color=prompt('Ingrese un color en ingles: ')
    parrafo1.style.background=color;
}

//Capturar el elemento con id: parrafo1
var parrafo1=document.getElementById('parrafo1')
console.log(parrafo1)
console.log()
//Mostrar el contenido del elemento con id: parrafo1
var parrafo2=document.getElementById('parrafo1').innerHTML
console.log(parrafo2)

//Selecionar el id con un elemento en este caso querySelector que permite seleccionar el id de un documento html
//el querySelector selecciona un id por medio del simbolo de la almohadilla #
var parrafo1=document.querySelector('#parrafo1')
parrafo1.innerHTML='Texto de prueba'
parrafo1.style.background='yellow'
parrafo1.style.color='black'