

const ItemList = ( {productos = []}) => {
  return (
    <div>
    <h2 className='title'>Productos</h2>
    <hr/>
    { productos.map((prod) =>{
      return <div key={prod.id}>
      <img   alt= {"jkjlk"} src  ={prod.img}/>
      <h4>{prod.nombre}</h4>
      <p>Precio: {prod.precio} </p>
      <p>Stock disponible: {prod.stock} </p>
      <p>descripcion: {prod.descripcion} </p>
      </div>
    })}
    </div>
  )
}

export default ItemList