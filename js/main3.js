let productos = [
    {id: 1, nombre: "Amo", banda: "Bring me the horizon", cantidad: 1, precio: 5629},
    {id: 2, nombre: "Death of a Bachelor", banda: "Panic at the disco", cantidad: 1, precio: 3880},
    {id: 3, nombre: "Demon days", banda: "gorillaz", cantidad: 1, precio: 5800},
    {id: 4, nombre: "Happier than ever", banda: "Billie elish", cantidad: 1, precio: 2200},
    {id: 5, nombre: "Im with you", banda: "Red hot chili peppers", cantidad: 1, precio: 1500},
    {id: 6, nombre: "Manic", banda: "Halsey", cantidad: 1, precio: 1695},
    {id: 7, nombre: "Plastic hearts", banda: "Miley cyrus", cantidad: 1, precio: 3990},
    {id: 8, nombre: "Scaled and icy", banda: "Twenty one pilots", cantidad: 1, precio: 2100},
    {id: 9, nombre: "Stoney", banda: "Post malone", cantidad: 1, precio: 4959},
    {id: 10, nombre: "The new abnormal", banda: "The strokes", cantidad: 1, precio: 4700},
    {id: 11, nombre: "Tickets to my downfall", banda: "Machine Gun Kelly", cantidad: 1, precio: 5007},
    {id: 12, nombre: "Underclass hero", banda: "Sum 41", cantidad: 1, precio: 6500},
    ]

// Array para que no se repita el nombre de usuario
const usuarios = ["Nic", "Nicky", "Niic"];

console.log(usuarios.indexOf("Nic"));  
console.log(usuarios.indexOf("Nicky"));
console.log(usuarios.indexOf("Niic"));

let newUser = "";

do {

    if (newUser != "") {
        alert("Este usuario ha sido ocupado, por favor elija otro");
    }

    newUser = prompt("¿me puedes recordar tu nombre?");
} while (usuarios.includes(newUser));

alert("Gracias", + ' ' + newUser);


const carrito = []

//Inicio de compra:

let compra = prompt(newUser + "," + '' + "¿deseas comprar algún cd?");

if(compra === null){
    alert("No has seleccionado nigún disco :(");

    return; //Asi no se rompe
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

        if(escogerCd === null){
            return;
        }

        if (escogerCd === "no"){

            mensaje("Gracias por visitar Discos Wes" + ''+ newUser+ ","+''+ "hasta pronto")
            break;
        }
        agregarDiscos(parseInt(escogerCd)); //aca llame a la funcion de agregar al carrito
        console.log(compraTotal()); //llame la funcion de la compra total para que me muestre el total del precio
    }

    let

}else {

    mensaje("Gracias por visitar Discos Wes" + ''+ newUser+ ","+''+ "hasta pronto")

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

    return total;
}

//funcion para filtrar por banda ver foto de la primera preentrega. Me quede en el zoom 1:02
//funcion para filtrar por cd
/*const arrayCdArtistas = [];

const agregarDisco = (disco) => {
    const cd = arrayCdArtistas.find(element => element.cd == disco);
    if (cd != -1)
        {
            //aca encuentra el cd
        }
}*/