var checkbox = document.getElementById('check')  //constante menu
var nombre = document.getElementById('nombre')
var correo = document.getElementById('correo')


function validaSubmite(){ 
    if (nombre.value == "" || correo.value == "" || checkbox.checked==false) {
        alert("Debe llenar los espacios y aceptar los terminos y condiciones") 
    }
    else {
        document.formulario.action = 'mailto:'+ correo.value
    }   
}

