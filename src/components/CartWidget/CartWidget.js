import { BsFillCartCheckFill } from 'react-icons/bs'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexto/CartContext';
import './CartWidget.scss'

const CartWidget = () => {

  const { cartQuantity, cart } = useContext(CartContext)

  return (
    <Link to='/cart' className={`icon ${cart.length > 0 ? 'icon-active' : ''}`}>
      <BsFillCartCheckFill />
      <span>{cartQuantity()}</span>

    </Link>
  )
}

export default CartWidget