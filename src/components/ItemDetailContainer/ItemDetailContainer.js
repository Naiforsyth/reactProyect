import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import pedirDatos from "../helpers/pedirDatos"

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)

    pedirDatos()
      .then((res) => {
        setItem(res.find((prod) => prod.id === Number(itemId)))
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false)
      })
  }, [itemId])


  return (
    <>
      {
        loading
          ? <h2>Cargando...</h2>
          : <ItemDetail item={item} />
      }
    </>
  )
}

export default ItemDetailContainer