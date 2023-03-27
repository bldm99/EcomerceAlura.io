
import { Datacel } from "../Urls.js";


const formulario = document.querySelector("[data-form]"); 


const url = new URL(window.location);
const id = url.searchParams.get("id");
//console.log(id);

const btncrear = document.getElementById("btn-registrar");
const titulocrear = document.getElementById("titulo-crear2");


const obtenerInfo = async () => {
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion ]");
    const imagen = document.querySelector("[data-imagen]");

    const celular = await Datacel.showCel(id);
    //nombre.value = celular.nombre;
    nombre.value = celular.ubicacion;
    //precio.value = celular.precio;
    descripcion.value = celular.descripcion;
    imagen.value = celular.imagen;
}

if(id != null){   
    obtenerInfo();
    //console.log("estas en modo de edicion")
    btncrear.innerHTML = "Confirmar edicion";
    titulocrear.innerHTML = "Editar Celular";
    

}




/*--------------------------Registrar-----------------------*/
formulario.addEventListener("submit" , async (evento) =>{
    
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    const imagen= document.querySelector("[data-imagen]").value;

    if(id === null){
        evento.preventDefault();
        await Datacel.Registrocel(nombre , descripcion , imagen );
        window.location.href = "general.html";
            
    }else{
        evento.preventDefault();
        await Datacel.putCel(nombre , descripcion , imagen , id);
        window.location.href = "general.html";
        
    }

})







