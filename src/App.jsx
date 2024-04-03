
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Shop from "./pages/Shop/Shop";
import ProductPage from "./pages/Shop/ProductPage";
const App = () => {
  return (
    <div className="min-h-screen w-screen">
    <BrowserRouter>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/shop" element={<Shop/>}/>
       <Route path="/shop/product/:id" element={<ProductPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </div>
  )
}

export default App