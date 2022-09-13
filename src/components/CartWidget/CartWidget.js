import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexto/CartContex';
import './CartWidget.scss'

const CartWidget = () => {

  const { cartQuantity } = useContext(CartContext)

  return (
    <Link to='/cart' className='icon'>

      <ShoppingCartIcon />
      <span>{cartQuantity()}</span>
      
    </Link>
  )
}

export default CartWidget