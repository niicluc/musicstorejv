let disco = "";
let costo = 0;
let cantidad = 0;
let subTotal = 0;
let totalDefinitivo = 0;
let verMas = false;

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


//Funcion para que hasta que el usuario no ponga correctamente el cd no siga los pasos siguientes
const nombrarCdCorrecto = () => {
    let CorrectoDisco = Number(prompt("¿cuantos discos quieres?"));
    return CorrectoDisco;
}

do {
    disco = prompt(newUser + ' ' + "¿Que disco te gustaría comprar?: Amo, Death of a Bachelor,Demon Days,Happier than ever, Im with you, Manic, Plastic Hearts, Scaled and Icy, Stoney, The new Abnormal, Tickets to my downfall,Underclass Hero o todos");

    switch (disco) {
        case "Amo":
            costo = 5629;
            cantidad = nombrarCdCorrecto();
            verMas = true;
            break;
        case "Death of a Bachelor":
            costo = 3880;
            cantidad = nombrarCdCorrecto();
            verMas = true;
            break;
        case "Demon Days":
            costo = 5800;
            cantidad = nombrarCdCorrecto();
            verMas = true;
            break;
        case "Happier than ever":
            costo = 2200;
            cantidad = nombrarCdCorrecto();
            verMas = true;
            break;
        case "Im with you":
            costo = 1500;
            cantidad = nombrarCdCorrecto();
            verMas = true;
            break;
        case "Manic":
            costo = 1695;
            cantidad = nombrarCdCorrecto();
            verMas = true;
            break;
        case "Plastic Hearts":
            costo = 3990;
            cantidad = nombrarCdCorrecto();
            verMas = true;
            break;
        case "Scaled and Icy":
            costo = 2100;
            cantidad = nombrarCdCorrecto();
            verMas = true;
            break;
        case "Stoney":
            costo = 4959;
            cantidad = nombrarCdCorrecto();
            verMas = true;
            break;
        case "The new Abnormal":
            costo = 4700;
            cantidad = nombrarCdCorrecto();
            verMas = true;
            break;
        case "Tickets to my downfall":
            costo = 5007;
            cantidad = nombrarCdCorrecto();
            verMas = true;
            break;
        case "Underclass Hero":
            costo = 6500;
            cantidad = nombrarCdCorrecto();
            verMas = true;
            break;
        case "todos":
            costo = 47690;
            cantidad = nombrarCdCorrecto();
            verMas = true;
            break;
        default:
            alert("Por favor, escribe correctamente el nombre del cd");
            precio = 0;
            cantidad = 0;
            break;
    }
    subTotal += costo * cantidad;
    totalDefinitivo += cantidad
} while (!verMas); // mientras verMas sea false sigo preguntando por el nombre del disco a comprar

alert("¡Gracias por tu compra" + ' ' + newUser + ' ' + "el total es de $" + subTotal + ' ' + "(con iva incluido)" +' ' + "en unos instantes recibirás un mail con la confirmación");


const artistas = [
    {nombre: "Bring me the horizon"},
    {nombre: "Panic at the disco"},
    {nombre: "Gorillaz"},
    {nombre: "Billie Elish"},
    {nombre: "Red hot chili peppers"},
    {nombre: "Halsey"},
    {nombre: "Miley Cyrus"},
    {nombre: "Twenty one pilots"},
    {nombre: "Post Malone"},
    {nombre: "The Strokes"},
    {nombre: "Machine Gun Kelly"},
    {nombre: "Underclass Hero"},
    ];
    
    console.log (artistas.some (artista => artista.nombre === "Post Malone"));