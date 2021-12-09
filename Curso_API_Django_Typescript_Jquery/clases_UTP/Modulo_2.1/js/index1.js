'use strict'

console.log('Hola mundo con javascript')
function cambiaColor(color) {
    listaOrdenada.style.background=color;
}

// #Esto modifica el DOM que son todos los elementos que contiene un archivo HMTL 

//Buscar el elemento que contenga el id: listaOrdenada
var listaOrdenada1=document.getElementById('listaOrdenada');
console.log(listaOrdenada1);

//mostrar el contenido del elemento con id:listaOrdenada

var listaOrdenada2=document.getElementById('listaOrdenada').innerHTML;
console.log(listaOrdenada2)

//Cambiar el parrafo del texto con id: listaOrdenada
//utilizar querySelector para seleccionar un id
// #Voy a cambiar el texto del contenido del id listaOrdenada
var texto=document.querySelector('#listaOrdenada')
texto.innerHTML='Texto de prueba pagina HTML'
texto.style.background='yellow'
texto.style.color='black'
