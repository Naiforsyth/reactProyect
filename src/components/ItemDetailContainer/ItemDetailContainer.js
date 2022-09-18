import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import Loader from "../Loader/Loader"
import { doc, getDoc} from "firebase/firestore"
import { db} from "../../firebase/config"

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)
    // 1.- Armar referencia (sync)
    const docRef = doc(db, 'productos', itemId)
    //2.- consumir esa referencia (async)
    getDoc(docRef)
    .then((doc) => {
      setItem({id: doc.id, ...doc.data()})
  })
  .finally(() => {
      setLoading(false)
  })
}, [itemId])


  return (
    <>
      {
        loading
          ? <h2><Loader /></h2>
          : <ItemDetail item={item} />
      }
    </>
  )
}

export default ItemDetailContainer