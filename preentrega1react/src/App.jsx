import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/itemListContainer/ItemListContainer'
import caart from './componentes/CartWidget/CartWidger'





function App() {
  return (

    <>
      <NavBar />
      <ItemListContainer />
      <CartWidget />
      <ItemCunt initial={1} stock={10} onAdd={(quantity)=>consolelog("cantidad agregada",quantity)} />

    </>
  )

}


export default App









