const btn = document.getElementById("suscripcion");btn.addEventListener("click", () => {
    swal({title: 'SUSCRIPCIÓN EXITOSA',
    text: 'Tu mail ha sido agregado, pronto te llegaran las nuevas novedades',
    icon: 'success',
    buttons: false,
    timer: 3000
})
})

const correo = document.getElementById('email');

correo.addEventListener('blur', () => {

    if(correo.value.length > 0 && correo.value.includes('@') && correo.value.includes('.')){
        
        const error = document.getElementById('errorCorreo');
        error.innerHTML = '<p>Campo completo</p>';

    }else {
        const error = document.getElementById('errorCorreo');
        error.innerHTML = '<p>Por favor, revisa que el correo este bien</p>';
    }
});

//Carga de correo suscripción
let suscribirse = document.getElementById('suscripcion');
suscribirse.addEventListener('click', (e) => {

let email = document.getElementById('email').value;

let usuario = {
email:email,
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
