const nombresAp = document.getElementById('nombreYapellido');

nombresAp.addEventListener('blur', () => {
    const errorNA = document.getElementById('errorNombreApellido');
    nombresAp.value.length > 0 ? (errorNA.innerHTML = '<p>¡Genial!</p>') : (errorNA.innerHTML = '<p>Debes completar los datos</p>');
})

const dni = document.getElementById('dni');

dni.addEventListener('blur', () => {
    const errorDNI = document.getElementById('errorDni');
    dni.value.length > 0 ? (errorDNI.innerHTML = '<p>Campo Completo</p>') : (errorDNI.innerHTML = '<p>Por favor, escribe tu DNI</p>');
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

const pais = document.getElementById('pais');

pais.addEventListener('blur', () => {
    const errorPais = document.getElementById('errorPais');
    pais.value.length > 0 ? (errorPais.innerHTML = '<p>Campo Completo</p>') : (errorPais.innerHTML = '<p>Campo incompleto</p>');
})

const provincia = document.getElementById('provincia');

provincia.addEventListener('blur', () => {
    const errorProvincia = document.getElementById('errorProvincia');
    provincia.value.length > 0 ? (errorProvincia.innerHTML = '<p>Campo Completo</p>') : (errorProvincia.innerHTML = '<p>Campo incompleto</p>');
})

const domicilio = document.getElementById('domicilio');

domicilio.addEventListener('blur', () => {
    const errorDomicilio = document.getElementById('errorDomicilio');
    domicilio.value.length > 0 ? (errorDomicilio.innerHTML = '<p>Datos correctos</p>') : (errorDomicilio.innerHTML = '<p>No has completado tu domicilio</p>');
})

const localidad = document.getElementById('localidad');

localidad.addEventListener('blur', () => {
    const errorLocalidad = document.getElementById('errorLocalidad');
    localidad.value.length > 0 ? (errorLocalidad.innerHTML = '<p>Datos correctos</p>') : (errorLocalidad.innerHTML = '<p>No has completado tu localidad</p>');
})

//para enviar contacto y que se guarde
let enviar = document.getElementById('btnComprar');
enviar.addEventListener('click', (e) => {

let nameLastName = document.getElementById('nombreYapellido').value;
let identificacion = document.getElementById('dni').value;
let email = document.getElementById('correo').value;
let country = document.getElementById('pais').value;
let province = document.getElementById('provincia').value;
let street = document.getElementById('domicilio').value;
let notes = document.getElementById('notas').value;

//validar que no esten vacias variables

let usuarioCompra = {
nameLastName: nameLastName,
identificacion: identificacion,
email:email,
country: country,
province: province,
street: street,
notes: notes
}

let usuarios = JSON.parse(localStorage.getItem('usuarioCompra'));

if (!usuarios)
{
    let array = [];
    array.push(usuarioCompra);
    localStorage.setItem('usuarioCompra', JSON.stringify(array));
    return;
}
usuarios.push(usuarioCompra);
localStorage.setItem('usuarioCompra', JSON.stringify(usuarios));

});

//sweet alert en boton comprar
const btn = document.getElementById("btnComprar");btn.addEventListener("click", () => {
    swal({title: '¡GENIAL!',
    text: 'Tu compra ha sido realizada con exito, te enviaremos un mail con los pasos a seguir',
    icon: 'success',
    buttons: false,
    timer: 3000,
})
})