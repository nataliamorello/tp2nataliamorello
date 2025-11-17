
// Captura de elementos 
const formulario = document.querySelector('#formulario');
const inputEmail = document.querySelector('#inputEmail');
const inputNombre = document.querySelector('#inputNombre');
const checkCyborg = document.querySelector('#checkCyborg');



//captura elementos de error

const errorEmail = document.querySelector('#error-email');
const errorNombre = document.querySelector('#error-nombre');
const errorCyborg = document.querySelector('#error-cyborg');



// funcion para borrar los estilos de error en caso de que los haya
function limpiarErrores() {

    inputEmail.classList.remove('error-input');
    inputNombre.classList.remove('error-input');

    errorEmail.innerText = ''; 
    errorNombre.innerText = '';
    errorCyborg.innerText = '';

}

//funcion para validar el nombre ingresado
//con trim eliminamos espacios en blanco al inicio y al final

function validarNombre() {
    const nombreValor = inputNombre.value.trim(); 

    if (nombreValor === "") {
     
        inputNombre.classList.add('error-input'); 
        errorNombre.innerText = 'Tu nombre y apellido son obligatorios.'; 
        return false;
    }
    //  si el campo es válido, aseguramos la limpieza
    inputNombre.classList.remove('error-input');
    errorNombre.innerText = '';
    return true;
}





// funcion para validarEmail


function validarEmail() {
    const emailValor = inputEmail.value.trim();
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
   
    if (emailValor === "") {
       
        inputEmail.classList.add('error-input'); 
        errorEmail.innerText = 'El correo electrónico es obligatorio.'; 
        return false;
    } 
    
    // Validamos formato (usando Expresión Regular)

    if (!regexEmail.test(emailValor)) {
       
        inputEmail.classList.add('error-input'); 
        errorEmail.innerText = 'El formato del e-mail debe tener un @ y un dominio.';
        return false;
    }
    
    //  si el campo es válido, aseguramos la limpieza
    inputEmail.classList.remove('error-input');
    errorEmail.innerText = '';
    return true;
}


//funcion para validar cyborg checkbox

function validarCyborg() {
    if (!checkCyborg.checked) {
      
        errorCyborg.innerText = 'Tenés que confirmar que sos humano!'; 
        return false;
    }
    return true;
}



//evento submit del formulario

formulario.addEventListener('submit', function (e) {
    //detener el envío por defecto para controlarlo con JS
    e.preventDefault(); 
    
    // Limpiamos los estilos de error anteriores
    limpiarErrores();
    
    // Ejecutamos todas las validaciones
    const emailOK = validarEmail();
    const nombreOK = validarNombre();
    const cyborgOK = validarCyborg();
    
    // Verificamos si todas las validaciones fueron exitosas
    if (emailOK && nombreOK && cyborgOK) {
        // Si todo es TRUE, notificamos el éxito
        alert("Muchas gracias! Vas a recibir pronto nuestras novedades en tu casilla.");
        // En este lugar iría el envío final del formulario si en este caso estuviera trabajando con un servidor.

    } else {
        // Si alguna validación falla, no se envía el formulario

    }
});
