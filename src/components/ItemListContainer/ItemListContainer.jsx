export const ItemListContainer = ({ greeting }) => {
    return (
        <div className="listaCarrito">
            <h5 className="modal-title text-center m-5 ">{greeting}</h5>
            <p className="text-center">El carrito está vacío</p>  
            <div className="botones align-items-center">
                <button type="button" className="btn btn-secondary bg-danger m-2 " data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-primary bg-danger m-2">Finalizar Compra</button>
            </div>    
                
        </div>
        
    );
}