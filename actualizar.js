

import { Datacel } from "./Urls.js";

const url = new URL(window.location);
const id = url.searchParams.get("id");
console.log(id);

const tcrear = document.querySelector(".titulo-crear");
const teditar= document.querySelector(".titulo-editar");
const btncrear = document.querySelector(".button-registrar");
const btneditar= document.querySelector(".button-editar");

teditar.style.display = "none";
btneditar.style.display = "none";

if(id != null){
    console.log("estas en modo de edicion")
    tcrear.style.display = "none";
    teditar.style.display = "block";

    btncrear.style.display = "none";
    btneditar.style.display = "block";

}



const obtenerInfo = () => {
    //const url = new URL(window.location);
    //const id = url.searchParams.get("id");

    if(id === null){
        console.log("4545")
    }

    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion ]");
    const imagen = document.querySelector("[data-imagen]");


    Datacel.showCel(id).then((celular) => {

        nombre.value = celular.nombre;
        precio.value = celular.precio;
        descripcion.value = celular.descripcion;
        imagen.value = celular.imagen;

    });
}

obtenerInfo();