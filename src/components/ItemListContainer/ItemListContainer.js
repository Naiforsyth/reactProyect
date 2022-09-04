
import { useEffect, useState } from 'react'
import pedirDatos from '../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.scss'

const ItemListContainer = () => {

  const [productos, setproductos] = useState([])

  useEffect(() => {    
      pedirDatos()
        .then((res) => {
          setproductos(res)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          // console.log("Fin del proceso")
        })
  }, [])


  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer