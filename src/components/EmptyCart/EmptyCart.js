
import { Link } from "react-router-dom";
import "./EmptyCart.scss"
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';


const EmptyCart = () => {

    return (
      <div className="emptyCart">
        <h2 className="emptyCart-title">Tu carrito está vacío</h2>
        <ProductionQuantityLimitsIcon color="warning" fontSize="large"/>
        
        <Link to="/" className="btn-link">Ir a comprar</Link>
      </div>
    )
  }


export default EmptyCart