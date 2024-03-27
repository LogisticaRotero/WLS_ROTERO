function validar_formulario(){

    if(document.getElementById('Nombre').value.length < 2 ){

        todo_correcto = false;

    if(document.getElementById('Primer Apellido').value.length < 3 ){

    todo_correcto = false;

    if(document.getElementById('Segundo Apellido').value.length < 3 ){

        todo_correcto = false;

}

var expresion = [a-zA-Z0-9];

var mail = document.form.email.value;

    if (!expresion.test(mail)){

        todo_correcto = false;

}

var texto = document.getElementById('Mensaje').value;

    if(texto==''){

        alert("El textarea no puede estar vacío")

}

var checkbox = document.getElementById('check');

    checkbox.addEventListener("change", validaCheckbox, false);

function validaCheckbox(){

    var checked = checkbox.checked;

    if(checked){

        alert('checkbox esta seleccionado');

    }

    if(!document.getElementById('contactar').checked){

        todo_correcto = false;

    if(!todo_correcto){

        alert('Algunos campos no están correctos, revisa los que te quedan');

    }




    return todo_correcto;

}}}}}