const contenedorCds = document.getElementById('estiloCd');  //vairable para crear las cards de productos

const contenedorCarro = document.getElementById('carrtioGeneral'); //variable para contenedor del carro

const vaciarCarroBoton = document.getElementById('vaciarCarro'); //variable para que vacie el carro

const costoTotal = document.getElementById('precioTotal'); //variable para que quede el costo total en el carro


let carrito = [] //variable para agregar productos al carrito

//Local Storage: Get Item

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarro ();
    }
});

//Vaciar el carrito por completo

vaciarCarroBoton.addEventListener('click', () => {
    carrito.length = 0;
    actualizarCarro () ;
});


//Card

stockCds.forEach((element) => {
    const div = document.createElement("div"); 
    div.setAttribute("class", "card"); 
    div.innerHTML = 
    ` 
        <img src="${element.image}" alt="${element.cd}">
        <h3>$${element.price}</h3>
        <h4>${element.name}</h4>
        <h5>${element.cd}</h5>
        <button id="${element.id}" class='button add'>Agregar</button> 
    `;

    contenedorCds.appendChild(div)

    const boton = document.getElementById("${element.id}");

    boton.addEventListener('click', () => {
        agregarCarrito(element.id)
    })

})

//funcion de agregar al carrito

const agregarCarrito = (cdId) => {

    // Para evitar una repetición en lista cuando agrego un mismo producto
    const productoExistente = carrito.some(element => element.id === cdId)
    if (productoExistente) {
        const element = carrito.map (element => {
            if (element.id === cdId) {
                element.cantidad++
            }
        })
    } else {


    const item = stockCds.find ((element) => element.id === cdId);
    carrito.push(item);
    console.log(carrito)
}
actualizarCarro();
};

//funcion para eliminar productos del carrito

const eliminarCarro = (cdId) => {
    const item = carrito.find ((element) => element.id === cdId );
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarro();
}

//funcion para actualizar carrito y que por cada id se cree un div con el elemento

const actualizarCarro = () => {
contenedorCds.innerHTML = " "

    carrito.forEach((producto) => {
        const div = document.createElement("div"); 
        div.innerHTML = 
        `
        <p>${element.name}</p>
        <p>Precio:$${element.price}</p>
        <p>Cantidad: <span id="cantidad">${element.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito(${element.id})"> <i class="fa-solid fa-delete-left"></i></button>
        `;
        contenedorCds.appendChild(div)

        //Local Storage: Set Item

        localStorage.setItem('carrito', JSON.stringify(carrito));

    })

    costoTotal.innerText = carrito.reduce ((acc, element) => acc + element.price, 0) //acumula el precio para que salga el total
};

