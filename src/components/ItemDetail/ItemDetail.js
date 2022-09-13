import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexto/CartContex'
import ItemCount from '../ItemCount.js/ItemCount'
import './ItemDetail.scss'

const ItemDetail = ({ item }) => {

  const { cart, addToCart, isInCart } = useContext(CartContext)
  console.log(cart)

  const [cantidad, setCantidad] = useState(1)

  const handleAgregar = () => {

    const itemToCart = {
      id: item.id,
      imagen: item.img,
      nombre: item.nombre,
      precio: item.precio,
      cantidad: cantidad
    }

    console.log(isInCart(item.id))
    addToCart(itemToCart)
  };

  return (

    <div className='box'>

      <img src={item.img} className='image' alt={item.name} />
      <div className='content'>
        <h2 className='title'>{item.nombre}</h2>
        <div className='text'>
          <p>{item.descripcion}</p>
          <p className='price'>Precio: <span>{item.precio}</span></p>
          <p className='stock'>Disponible: <span>{item.stock}</span> </p>
          <br></br>

          {
            isInCart(item.id) && <p className='agregado'>Producto agregado al carrito</p>
          }

          {
            isInCart(item.id)
              ? <Link className='btn' to="/cart">Comprar</Link>
              : <ItemCount
                stock={item.stock}
                counter={cantidad}
                setCantidad={setCantidad}
                handleAgregar={handleAgregar}

              />
          }


        </div>
      </div>
    </div>

  )
}

export default ItemDetail

