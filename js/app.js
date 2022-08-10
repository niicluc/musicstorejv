const contenedorCds = document.getElementById('estiloCd');
const contenedorCarro = document.getElementById('carritoGeneral'); 
const vaciarCarroBoton = document.getElementById('vaciarCarro'); 
const precioTotal = document.getElementById('precioTotal') 
const botonCarrito = document.getElementById('botonCarrito'); 

let carrito = [] 

//funcion para actualizar carrito y que por cada id se cree un div con el elemento
const actualizarCarro = () => 
{
    if(carrito)
    {
        let contenedorCarrito = document.getElementById('contenedorCarrito');
        let carritoGeneral = document.getElementById('carritoGeneral');
        if(carritoGeneral)
        {
            carritoGeneral.parentNode.removeChild(carritoGeneral);
        }
        const generalCart = document.createElement('div'); 
        generalCart.setAttribute('id','carritoGeneral');
        generalCart.setAttribute('class','carritoGeneral');
        carrito.forEach((element) => { 
            const div = document.createElement("div"); 
            div.setAttribute('class','carritoItem');
            div.innerHTML = 
            `
            <img src="${element.image}" alt="${element.cd}">
            <p>${element.name}</p>
            <p>Precio:$${element.price}</p>
            <p>Cantidad: <span id="cantidad">${element.cantidad}</span></p>
            <button onclick = "eliminarDelCarrito(${element.id})" class="eliminarB"><i class="fa-solid fa-xmark"></i></i></button>
            `;
            generalCart.appendChild(div)
        });

//Local Storage: Set Item
localStorage.setItem('carrito', JSON.stringify(carrito));

contenedorCarrito.appendChild(generalCart);

precioTotal.innerText = carrito.reduce ((acc, element) => acc + element.cantidad * element.price, 0) //acumula el precio para que salga el total
    }
};

//Eliminar producto del carro
const eliminarDelCarrito = (cdId) => {
    const item = carrito.find ((element) => element.id === cdId );
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarro();
}

//Local Storage: Get Item
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarro();
    }
});


//Vaciar carrito
vaciarCarroBoton.addEventListener('click', () => {
    carrito.length = 0;
    actualizarCarro();
});

const btnVaciar = document.getElementById("vaciarCarro");
btnVaciar.addEventListener("click", () => {
    swal({
        title: '¿Estas seguro que deseas vaciar el carrito?',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
    }).then( respuesta => {
        if (respuesta) {
            swal({
                title: '¡Productos eliminados!',
                text: 'El carrito ha sido vaciado con exito',
                icon: 'success',
                buttons: false,
                timer: 2000,
            })
        }
    })
})


//Fetch:
const stockCds = [];
const getData = async () =>
{
    try
    {   
        const response = await fetch('/data.json');
        const data = await response.json();
        stockCds.push(...data);
        loadProducts(data);
    }
    catch(error)
    {
        console.log(error);
    }
}

getData();

const loadEvents = () =>
{
    let buttons = document.getElementsByClassName('add'); 
    for (const element of buttons)
    {
        element.addEventListener('click', ()=>{
            Toastify({
                text: ("Has seleccionado el disco " + element.id),
                duration: 2000,
                gravity: "bottom",
                position: "right",
                backgroundColor: "#000000",
                stopOnFocus: true,
            }).showToast();
        });
    }
}

//Card productos
const loadProducts = (data) =>
{
    data.forEach((element) => {
    const div = document.createElement("div"); 
    div.setAttribute("class", "card"); 
    div.innerHTML = 
    ` 
        <img src="${element.image}" alt="${element.cd}">
        <h3 class="precioProducto">$${element.price}</h3>
        <h4>${element.name}</h4>
        <h5>${element.cd}</h5>
        <button id="${element.id}" class='button add'>Agregar</button> 
    `;
    
    contenedorCds.appendChild(div)
    const boton = document.getElementById(element.id);
    boton.addEventListener('click', () => {
        agregarCarrito(element.id)
        });
    });
    loadEvents();
}

//Funcion de agregar al carrito
const agregarCarrito = (cdId) => {
    const productoExistente = carrito.some(element => element.id === cdId)
    if (productoExistente)
    {
        carrito.map (element => {
            if (element.id == cdId) {
                element.cantidad++
            }
        });
    } 
    else
    {
        const item = stockCds.find ((element) => element.id === cdId);
        carrito.push(item);
    }
    actualizarCarro();
};


const btn = document.getElementById("btnFinalizarCompra");btn.addEventListener("click", () => {
    swal({title: 'GENIAL',
    text: 'Tu compra ha sido gestionada con exito. Gracias por comprar en Music Store ¡hasta la próxima!',
    icon: 'success',
    buttons: false,
    timer: 3000
})
})




