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

    newUser = prompt("Buenas tardes, ¿podrías indicarme tu nombre?");
} while (usuarios.includes(newUser));

alert(newUser + " ha sido registrado exitosamente");

//Bienvenida personalizada
let bienvenida= document.getElementById("bienvenida")
console.log (bienvenida.innerText)

bienvenida.innerText = ("Buenas tardes" + ' '+ newUser);
console.log (bienvenida.innerText)