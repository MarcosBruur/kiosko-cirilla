const url = 'http://127.0.0.1:8000/api/v1/categorias/';

export const obtenerCategorias = async () =>{
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }
        return await response.json();
    }catch(e){
        console.error(e.message);
    }
}

