import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexto/CartContex';
import './CartWidget.scss'

const CartWidget = () => {

  const { cartQuantity, cart } = useContext(CartContext)

  return (
    <Link to='/cart' className={`icon ${cart.length > 0 ? 'icon-active' : ''}`}>

      <ShoppingCartIcon />
      <span>{cartQuantity()}</span>

    </Link>
  )
}

export default CartWidget