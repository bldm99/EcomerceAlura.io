
import { Datacel } from "../Urls.js";

const url = new URL(window.location);
const id = url.searchParams.get("id");
console.log(id);



const obtenerInfo = async () => {

    const nombre = document.getElementById("name");
    const imagen = document.getElementById("im");
    const precio= document.getElementById("pre");
    //const nombree = document.querySelector("[name]");
    //const precio = document.querySelector("[pre]");

    const celular = await Datacel.showCel(id);
    nombre.innerHTML= celular.ubicacion
    imagen.src = celular.imagen;
    //precio.innerHTML = ("S/."+celular.precio);
    precio.innerHTML = (celular.descripcion);
    //descripcion.value = celular.descripcion;
    //imagen.value = celular.imagen;
}
obtenerInfo()