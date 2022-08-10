const usuarios = ["Nic", "Nicky", "Niic"];

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


bienvenida.innerText = ("Buenas tardes" + ' '+ newUser);
