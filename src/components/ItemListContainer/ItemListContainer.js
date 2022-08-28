
import ItemCount from '../ItemCount.js/ItemCount'
import './ItemListContainer.scss'


const ItemListContainer = ({stock, initial, addOn}) =>{    
    return(
      <div>
        <ItemCount stock="5" initial = "1"/>
      </div>
    )
}

export default ItemListContainer