import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Shop from "./pages/Shop/Shop";
import ProductPage from "./pages/Shop/ProductPage";
import { useDispatch } from "react-redux";
import { useFetchUserProfileQuery } from "./redux/api/userApi";
import ProtectedRoute from "./components/ProtectedRoute";


const App = () => {

  const {data}=useFetchUserProfileQuery()

  return (
    <div className="min-h-screen w-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<ProtectedRoute isAuthenticated={data ? false : true}/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          </Route>
         
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/product/:id" element={<ProductPage />} />

        </Routes>
        <Footer />
        <Toaster position="bottom-center" />
      </BrowserRouter>
    </div>
  );
};

export default App;
