import { useState,useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";


export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    setTimeout(() => {
        



      }, "2000");
    useEffect(() =>{
        setTimeout(()=>{
            fetch('./json/productos.json')
            .then(response => response.json())
            .then(productos =>{
                setProductos(productos)
               
            })
        },2000)
        
    },[])
    return (
        <div className='row'>
            <ItemList productos={productos}/>
        </div>  
    );
}