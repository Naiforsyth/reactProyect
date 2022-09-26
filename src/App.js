import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/contexto/CartContext";
import Checkout from "./components/Checkout/Checkout";


const App = () => {

  

  return (

    <CartProvider >

    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route path='/' element={<ItemListContainer />} />
        <Route path='/productos/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />        
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<Navigate to="/" />} />

      </Routes>
      
    </BrowserRouter>

    </CartProvider>
  )
}

export default App;
