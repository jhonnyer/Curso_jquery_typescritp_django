'use strict'
window.addEventListener('load',function(){
    console.log('Cuerpo de la pagina cargado-DOM');
    // capturar la informacion de los datos del formulario 
    var formulario=document.querySelector("#formulario");
    // console.log(formulario);

    // capturar la clase dashed antes de enviar los datos al formulario 
    var box_dashed=document.querySelector('.dashed');
    box_dashed.style.display='none'; /*Ocultad la caja con clase dashed antes de enviar informacion por el formulario*/

    // Permite capturar el evento submit cuando se envia los datos del formulario 
    formulario.addEventListener('submit',function () {
        console.log("Evento submit capturado");
        // Capturar los datos de nombre, apellido, edad y fecha del formulario y almacenarlos en unas variables con sus 
        //respectivos nombres 
        var nombre=document.querySelector("#name").value;
        var apellido=document.querySelector("#apellido").value;
        var edad=parseInt(document.querySelector("#edad").value);
        var fecha=document.querySelector("#fecha").value;

        // Evaluar los datos del formulario que no esten vacios o que no contengan un tipo de dato en especifico 
        // trim()==null permite evaluar que el dato no este vacio 
        if(nombre.trim()==null || nombre.trim().length==0){
            alert('El nombre no es valido')
            document.querySelector("#error_nombre").innerHTML="El nombre no es valido <br>";
            return false;
        }else{
            document.querySelector('#error_nombre').style.display='none';
        }
        if(apellido.trim()==null || apellido.trim().length==0){
            alert('Los apellidos no son validos')
            document.querySelector('#error_apellidos').innerHTML='Los apellidos no son validos <br>';
            return false
        }else{
            document.querySelector('#error_apellidos').style.display='none';
        }
        // isNaN permite evaluar si un campo no es de tipo numerico 
        if(edad==null || edad <=0 || isNaN(edad)){
            alert('La edad no es valida')
            return false
        }
        if(fecha.trim()==null || fecha.trim().length==0){
            alert('La fecha no es valida')
            return false
        }
        // Cuando se presione el  boton del evento submit, se va mostrar la caja con estilo dashed con la informacion enviada en el
        // formulario
        box_dashed.style.display='block';
        console.log(nombre+' '+apellido+' '+edad+' '+fecha)

        // Mostrar los datos del formulario segun el id de los parrafos creados en la vista o la plantilla html 
        // Estamso seleccionado los id de la caja con clase dashed  y lo adjuntamos en el span de cada elemento
        var p_nombre=document.querySelector('#p_name span')
        var p_apellidos=document.querySelector('#p_apellidos span')
        var p_edad=document.querySelector('#p_edad span')
        var p_fecha=document.querySelector('#p_fecha span')

        // A cada id de la caja dashed le voy a asignar los valores recopilados del formulario 
        p_nombre.innerHTML=nombre;
        p_apellidos.innerHTML=apellido;
        p_edad.innerHTML=edad;
        p_fecha.innerHTML=fecha;
        
    })
})