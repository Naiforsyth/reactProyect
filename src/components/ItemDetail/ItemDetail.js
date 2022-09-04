
import './ItemDetail.scss'

  const ItemDetail = ({item}) => {

    return (

      <div className='box'>
      <img src={item.img} className='image' alt={item.name} />
      <div className='content'>
        <h2 className='title'>{item.nombre}</h2>
        <div className='text'>
          <p>{item.descripcion}</p>
          <p className='price'>Precio: <span>{item.precio}</span></p>
          <p>Stock: <span>{item.stock}</span></p>
        </div>
        <button className='btn' to={`/item/${item.id}`}>Comprar</button>
      </div>
    </div>

    )
}

export default ItemDetail

