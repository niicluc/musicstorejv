
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



fetch('/data.json')
.then((response) => response.json())
.then((data) =>{
loadProducts(data);
});


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


