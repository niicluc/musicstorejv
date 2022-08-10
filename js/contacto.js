const nombres = document.getElementById('nombres');

nombres.addEventListener('blur', () => {
    const errorN = document.getElementById('errorNombre');
    nombres.value.length > 0 ? (errorN.innerHTML = '<p>Campo completo</p>') : (errorN.innerHTML = '<p>Debes escribir un nombre</p>');
})

const celular = document.getElementById('celular');

celular.addEventListener('blur', () => {
    const errorC = document.getElementById('errorCelular');
    celular.value.length > 0 ? (errorC.innerHTML = '<p>Campo completo</p>') : (errorC.innerHTML = '<p>Debes escribir un numero de celular</p>');
})

const correo = document.getElementById('correo');

correo.addEventListener('blur', () => {

    if(correo.value.length > 0 && correo.value.includes('@') && correo.value.includes('.')){

        const error = document.getElementById('errorCorreo');
        error.innerHTML = '<p>Campo completo</p>';

    }else {
        const error = document.getElementById('errorCorreo');
        error.innerHTML = '<p>Por favor, revisa que el correo este bien</p>';
    }
});



//Guardar datos
let send = document.getElementById('botonEnviarContacto');
send.addEventListener('click', (e) => {

let name = document.getElementById('nombres').value;
let mobile = document.getElementById('celular').value;
let email = document.getElementById('correo').value;
let comments = document.getElementById('comentarios').value;


let usuario = {
name: name,
mobile:mobile,
email:email,
comments:comments
}


let usuarios = JSON.parse(localStorage.getItem('usuario'));

if (!usuarios)
{
    let array = [];
    array.push(usuario);
    localStorage.setItem('usuario', JSON.stringify(array));
    return;
}
usuarios.push(usuario);
localStorage.setItem('usuario', JSON.stringify(usuarios));

});


const btn = document.getElementById("botonEnviarContacto");btn.addEventListener("click", () => {
    swal({title: '¡GRACIAS!',
    text: 'Tu consulta ha sido enviada exitosamente',
    icon: 'success',
    buttons: false,
    timer: 1500

})
})
