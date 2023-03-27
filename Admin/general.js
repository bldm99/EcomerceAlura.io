

import { Datacel } from "../Urls.js";


//console.log(Datacel)
const menuglobal = document.querySelector(".menu");

const varmenu = () => {
    const html_me = document.createElement("div"); 

    const contenidom = `
            
            <div class="contenedor-menu">

                <div class="icon">
                    <h3 class="title"> <i class="fa-solid fa-gamepad-modern" style="color: #0b5be5;"></i> AluraGeek </h3>
                    <input
                    name="buscar"
                    id="buscar"
                    class="busqueda"
                    type="search"
                    placeholder="Que estas buscando"
                    data-buscar
                    />
                </div>
                
            
                <div class="login">
                    <button class="btn-login" type="button" >Logear</button>
                </div>
            
            </div>
    `;
    html_me.innerHTML= contenidom;
    return( html_me); 
}
menuglobal.appendChild(varmenu());




const valuecelulares = document.querySelector(".listado__productos");

//valuecelulares.style.backgroundColor = "red";

const verProductos = (ubicacion , descripcion , imagen, id ) =>{
    //console.log(id);
    const html_ul = document.createElement("div");  /* creando una etiquetq ul*/
    
    html_ul.setAttribute("style",
        "background: white; \
         margin:10px;\
         padding:0; ");

    

    const contenido = `
            <div class="caja-producto">

                <div class="dato-producto">
                    <h3>${ubicacion}</h3>
                </div>
            
                <img src="${imagen}" alt="" >

                <div class="dato-producto">
                    <p>${descripcion}</p>
                </div>

                <button class="btn-eliminar" type="button" id="${id}">Eliminar</button>
                <a href="./registros.html?id=${id}" class="editar"> Editar </a> </br>
                <a href="../verproducto/producto.html?id=${id}" class="editar"> Ver producto </a>
          
            </div>
            
        

    `;
    
    html_ul.innerHTML= contenido; /* añadimos el cun contenido dentro de la etiqueta nates creada */
    const btn = html_ul.querySelector("button")
    
    btn.addEventListener("click" , async () =>{
        const idd = btn.id;
        await Datacel.deleteCel(idd);
        window.location.href = "general.html";

    });
    //console.log(btn);
    return( html_ul);    
}









Datacel.Vercelulares().then((datos)=>{
    
    /*------------------Forma 2 de recorrer u json---------------*/
    datos.map((x)=>{
        const mostrar = verProductos(x.ubicacion , x.descripcion , x.imagen , x.id);
        valuecelulares.appendChild(mostrar);   /*Value celulares padre de todo acoge a mostrar
                                                el cual es igual a verProductos*/
                                             
    })
})/*.catch((error)=>alert("Ha ocurrido un erroriiiiiiiiiiii"))*/;







  























