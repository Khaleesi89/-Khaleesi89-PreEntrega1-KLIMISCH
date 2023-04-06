
export const Item = ({producto}) =>{
    return (
        <div className="card " style={{width: '18rem'}}>
        <img src={producto.img} className="card-img-top" alt={`Imagen de ${producto.artista}`} />
        <div className="card-body">
          <h5 className="card-title text-center">{producto.artista}</h5>
          <p className="card-text"><strong>Tour: </strong> {producto.tour}</p>
          <p className="card-text"><strong>Auspicio:</strong> {producto.auspicio}</p>
          <p className="card-text"><strong>Fecha del concierto:</strong> {producto.fecha}</p>
          <p className="card-text"><strong>Lugar:</strong> {producto.lugar}</p>
          <a href="#" className="btn btn-danger text-center">Comprar</a>
        </div>
      </div>
    )
}