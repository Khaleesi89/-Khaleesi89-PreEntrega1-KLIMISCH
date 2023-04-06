import './App.css'
import { Navbar } from './Navbar/Navbar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
export const App = () => {
  //Aqui irian los hooks
  return (
    <div>
      <Navbar />
      <div className='titulo'>
        <p><img src="../img/icons8-boleto.gif" alt="" srcset="" /> Conciertos</p>
      </div>
      
      <ItemListContainer />
    </div>
  )
}





