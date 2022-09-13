import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/contexto/CartContex";

const App = () => {

  

  return (

    <CartProvider >

    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route path='/' element={<ItemListContainer />} />
        <Route path='/productos/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Navigate to="/" />} />

      </Routes>
      
    </BrowserRouter>

    </CartProvider>
  )
}

export default App;
