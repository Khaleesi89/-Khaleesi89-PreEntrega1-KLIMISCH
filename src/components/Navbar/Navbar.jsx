import { CartWidget } from "../CartWidget/CartWidget"
import logo from "../../img/fondo.png"
export const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src={logo} alt="logo" />
                <a className="navbar-brand" href="#">MK Shows</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Sobre Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Conciertos POP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Conciertos Reggaeton</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Stand up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Partidos de Fútbol</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Filarmónicas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget cantCarrito={0} />
        </nav>
            
    )
}


