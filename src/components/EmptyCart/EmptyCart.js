import { BsCartX } from 'react-icons/bs'
import { Link } from "react-router-dom";
import "./EmptyCart.scss"


const EmptyCart = () => {

    return (
      <div className="emptyCart">
        <h2 className="emptyCart-title">Tu carrito está vacío</h2>
        <BsCartX className='emptyCart-icon' />
        <Link to="/" className="btn-link">Ir a comprar</Link>
      </div>
    )
  }


export default EmptyCart