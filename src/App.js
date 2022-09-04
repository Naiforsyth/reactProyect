import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


const App = () => {

  return (

    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path="*" element={ <Navigate to='/' />}/>
      </Routes>



    </BrowserRouter>

  )
}

export default App;
