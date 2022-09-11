import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.scss'

const CartWidget = () => {

  return (
    <div className='icon'><ShoppingCartIcon />
      <span>0</span>
    </div>
  )
}

export default CartWidget