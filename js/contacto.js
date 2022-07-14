// const formRegistro = document.getElementById('formularioRegistro');

// formRegistro.addEventListener('submit', (e)=> {

//     e.preventDefault();
//     const nombre = document.getElementById('nombres').value;
//     const apellido = document.getElementById('celular').value;
//     const telefono = document.getElementById('correo').value;
//     const email = document.getElementById('comentarios').value;
// });

const nombres = document.getElementById('nombres');

nombres.addEventListener('blur', () => {

    if(nombres.value.length > 0){
        
        console.log("Tienes un nombre genial");

        const error = document.getElementById('errorNombre');
        error.innerHTML = '<p>Campo completo</p>';

    }else {
        
        console.log("Nombre Incorrecto");
        const error = document.getElementById('errorNombre');
        error.innerHTML = '<p>Debes escribir un nombre</p>';
    }
});

const celular = document.getElementById('celular');

celular.addEventListener('blur', () => {

    if(celular.value.length > 0){
        
        console.log("Excelente");

        const error = document.getElementById('errorCelular');
        error.innerHTML = '<p>Campo completo</p>';

    }else {
        
        console.log("Celular Incorrecto");
        const error = document.getElementById('errorCelular');
        error.innerHTML = '<p>Debes escribir un numero de celular</p>';
    }
});

const correo = document.getElementById('correo');

correo.addEventListener('blur', () => {

    if(correo.value.length > 0 && correo.value.includes('@') && correo.value.includes('.')){
        
        console.log("luce genial");

        const error = document.getElementById('errorCorreo');
        error.innerHTML = '<p>Campo completo</p>';

    }else {
        
        console.log("Correo Incorrecto");
        const error = document.getElementById('errorCorreo');
        error.innerHTML = '<p>Por favor, revisa que el correo este bien</p>';
    }
});



//para enviar contacto y que se guarde
let send = document.getElementById('botonEnviarContacto');
send.addEventListener('click', (e) => {

let name = document.getElementById('nombres').value;
let mobile = document.getElementById('celular').value;
let email = document.getElementById('correo').value;
let comments = document.getElementById('comentarios').value;
//validar que no esten vacias variables

let user = {
name: name,
mobile:mobile,
email:email,
comments:comments
}


localStorage.setItem('user', JSON.stringify(user));

})
