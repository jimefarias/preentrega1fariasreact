import CartWidget from "../CartWidget/CartWidger"

const NavBar=()=>{
    return(
        <>
        <nav>
      
      <h3 className="titulo"> E-commerce Jimena</h3>
      <div>
      <button className='botones'>Inicio</button>
      <button className="botones">Promociones</button>     
      <button className="botones">Contacto</button>
      </div>
      <CartWidget/>
        </nav>
        </>
    )
}
export default NavBar