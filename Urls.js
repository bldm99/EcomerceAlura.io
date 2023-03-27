


//const URL = "http://localhost:3000/";
const URL = "https://combitec.onrender.com/717ab3b1503b549a393b14f0740a1312c90c29da/api/paraderos/";

//https://combitec.onrender.com/717ab3b1503b549a393b14f0740a1312c90c29da/api/paraderos/


/*const Ver= async () =>{
    
    try {
        const t = await axios.get(URL);
        console.log(t.data)
        return t.data
    } catch (error) {
        console.log(error)
    }  
}*/

const Vercelulares = async () =>{
    /*--------------Forma 1 Fetch -------------------------*/
    /*return fetch(URL + "productos").then(respuesta =>{
        return respuesta.json()      
    })*/

    /*--------------Forma 2 Axios -------------------------*/
    try {
        const t = await axios.get(URL);
        console.log(t.data)
        return t.data
    } catch (error) {
        console.log(error)
    }  
}

const Registrocel = async (ubicacion  ,descripcion , imagen) => {
    try {
        //await axios.post(URL + "productos"  , {
        await axios.post(URL  , {
            //"nombre": String(nombre),
            "ubicacion": String(ubicacion),
            //"precio": String(precio), 
            "descripcion": String(descripcion), 
            "imagen": String(imagen),   
        });
        
    } catch (error) {
        console.log(error)
    }
    /*return axios.post(URL + "productos"  , {
        "nombre": String(nombre),
        "precio": String(precio), 
        "descripcion": String(descripcion), 
        "imagen": String(imagen),   
    });*/
    /*return fetch(URL + "productos" , {
        method:"POST",
        headers:{
            "Content-Type": "aplication/json"
        },
        body: JSON.stringify({nombre , precio , id: "uuid.v4()"})
    });*/
}


const deleteCel = async (id) => {
    try {
        const x= "/"
        await axios.delete(`${URL}${id}${x}`)
    } catch (error) {
        console.log(error)
    }   
}

const showCel = async (id) =>{
    //const x = await axios.get(URL + "productos/" + id);
    const x = await axios.get(URL + id + "/");
    console.log(x.data)
    return x.data
}

const putCel = async (ubicacion ,descripcion , imagen ,id) => {
    
    const x= "/"
    try {
        //await axios.put(`${URL}${x}${id}` , {
        await axios.put(`${URL}${id}${x}` , {
            //"nombre": String(nombre),
            "ubicacion": String(ubicacion),
            //"precio": String(precio), 
            "descripcion": String(descripcion), 
            "imagen": String(imagen),  
            
        });   
    } catch (error) {
        console.log(error);
    }
    /*return axios.put(`${URL}${x}${id}` , {
        "nombre": String(nombre),
        "precio": String(precio), 
        "descripcion": String(descripcion), 
        "imagen": String(imagen),  
        
    });*/
}



export const Datacel = {
    Vercelulares,
    Registrocel,
    deleteCel,
    showCel,
    putCel,
    //Ver,
}






