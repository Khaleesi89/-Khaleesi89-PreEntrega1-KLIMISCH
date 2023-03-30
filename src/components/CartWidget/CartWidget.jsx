import carro from '../../img/anadir-al-carrito.png'
export const CartWidget = ({ cantCarrito }) => {
    return (
        <div className="carrito">
            <img src={carro} id="carro" alt="carrito" />
            <p>{cantCarrito}</p>
        </div>
    )
}