const Products = [
    {id: 1, name: 'Amo', cd: 'Bring me the horizon', cantidad: '1', price: '5629', image: '../multimedia/im16.jpg'},
    {id: 2, name: 'Death of a Bachelor', cd: 'Panic at the disco', cantidad: '1', price: '3880', image: '../multimedia/im17.jpg'},
    {id: 3, name: 'Demon days', cd: 'Gorillaz', cantidad: '1', price: '5800', image: '../multimedia/im18.jpg'},
    {id: 4, name: 'Happier than ever', cd: 'Billie Elish', cantidad: '1', price: '2200', image: '../multimedia/im19.jpg'},
    {id: 5, name: 'Im with you', cd: 'Red hot chili peppers', cantidad: '1', price: '1500', image: '../multimedia/im20.jpg'},
    {id: 6, name: 'Manic', cd: 'Halsey', cantidad: '1', price: '1695', image: '../multimedia/im21.jpg'},
    {id: 7, name: 'Plastic hearts', cd: 'Miley Cyrus', cantidad: '1', price: '3990', image: '../multimedia/im22.jpg'},
    {id: 8, name: 'Scaled and icy', cd: 'Twenty one pilots', cantidad: '1', price: '2100', image: '../multimedia/im23.jpg'},
    {id: 9, name: 'Stoney', cd: 'Post Malone', cantidad: '1', price: '4959', image: '../multimedia/im24.jpg'},
    {id: 10, name: 'The new abnormal', cd: 'The strokes', cantidad: '1', price: '4700', image: '../multimedia/im25.jpg'},
    {id: 11, name: 'Tickets to my downfall', cd: 'Machine Gun Kelly', cantidad: '1', price: '5007', image: '../multimedia/im26.jpg'},
    {id: 12, name: 'Underclass hero', cd: 'Sum 41', cantidad: '1', price: '6500', image: '../multimedia/im27.jpg'},
    ]


//cards de los cds
const loadEvents = () =>
{
    let buttons = document.getElementsByClassName('add'); 
    console.log(buttons); 
    for (const element of buttons)
    {
        element.addEventListener('click', ()=>{
            console.log(element.id); 
            Toastify({
                text: ("Has seleccionado el disco " + element.id),
                duration: 4000,
                gravity: "bottom",
                position: "right",
                backgroundColor: "#000000",
                stopOnFocus: true,
                close: true,
            }).showToast();
        });
    }
}

const loadProducts = (prods) =>
{   
    let estiloCd = document.getElementsByClassName('estiloCd'); 
    
    for (const element of prods)
    {   
        let div = document.createElement("div"); 
        div.setAttribute("class", "card"); 
        div.innerHTML = 
        ` 
            <img src="${element.image}" alt="${element.cd}">
            <h3>$${element.price}</h3>
            <h4>${element.name}</h4>
            <h5>${element.cd}</h5>
            <button id="${element.id}" class='button add'>Agregar</button> 
        `;

        estiloCd[0].appendChild(div);
    }

    loadEvents();
}

loadProducts(Products); 

//preguntas de carrito
const carrito = []

//Inicio de compra:

let compra = prompt("¿deseas comprar algún cd?");

if(compra === null){
    alert("No has seleccionado nigún disco :(");

}

if (compra === "si"){

    let escogerCd = "";
    while(escogerCd != "no"){

        escogerCd = prompt(`
        ¿Qué cd te gustaría comprar?, por favor selecciona el numero:
        1:Amo
        2:Death of a Bachelor
        3:Demon days
        4:Happier than ever
        5:Im with you
        6:Manic
        7:Plastic hearts
        8:Scaled and icy
        9:Stoney
        10:The new abnormal
        11:Tickets to my downfall
        12:Underclass hero

        Si no deseas comprar nada por favor escribe no.

        `)


        if (escogerCd === "no"){

            mensaje("Gracias por visitar Discos Wes" +''+ "hasta pronto")
            break;
        }
        agregarDiscos(parseInt(escogerCd)); //aca llame a la funcion de agregar al carrito
        console.log(compraTotal()); //llame la funcion de la compra total para que me muestre el total del precio
    }

    let

}else {

    mensaje("Gracias por visitar Discos Wes" + "hasta pronto")

}

//funcion para agregar productos al carrito
function agregarDiscos(){
    let producto = productos.find(producto => producto.id === id);

    //para que impacte en cantidad si ya esta
    let mismoProducto = carrito.find(producto => producto.id === id);

    if(mismoProducto){
        mismoProducto.cantidad++;
    }else {
        producto.cantidad = 1;
        carrito.push(producto);
    }

}

//funcion para sumar total de compra
function compraTotal(){
    let total = 0;

    carrito.forEach(producto => {
        total = total + producto.cantidad * producto.precio;
    })

    //return total;
}


//funcion para filtrar por cd
/*const arrayCdArtistas = [];

const agregarDisco = (disco) => {
    const cd = arrayCdArtistas.find(element => element.cd == disco);
    if (cd != -1)
        {
            //aca encuentra el cd
        }
}*/

