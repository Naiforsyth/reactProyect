import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount.js/ItemCount'
import './ItemDetail.scss'

const ItemDetail = ({ item }) => {

  const [cantidad, setCantidad] = useState(1)

  const handleAgregar = () => {

    console.log({
      imagen: item.img,
      nombre: item.nombre,
      precio: item.precio,
      cantidad: cantidad
    })

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

          <ItemCount
            stock={item.stock}
            counter={cantidad}
            setCantidad={setCantidad}
            handleAgregar={handleAgregar}

          />

        </div>
        <Link className='btn' to={"/cart"}>Comprar</Link>
      </div>

    </div>

  )
}

export default ItemDetail

