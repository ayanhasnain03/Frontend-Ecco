import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Shop from "./pages/Shop/Shop";
import ProductPage from "./pages/Shop/ProductPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/User/Profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./redux/action/userAction";


const App = () => {

const dispatch = useDispatch()
  useEffect(()=>{
dispatch(loadUser())
},[dispatch])
const {user,isAuthenticated}= useSelector(state=>state.user)

  
  return (
    <div className="min-h-screen w-screen">
      <BrowserRouter>
        <Navbar user={user} />
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
<Route path="/shop/product/:id" element={<ProductPage/>}/>
          <Route
            element={<ProtectedRoute isAuthenticated={user ? false : true} />}
          >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>



{/* Logged User */}

<Route  element={<ProtectedRoute isAuthenticated={user ? true : false} />}>
<Route path="/profile" element={<Profile/>}/>
</Route>



        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={true}
         />}>
     
         </Route>
        </Routes>
        <Footer />
        <Toaster position="bottom-center" />
      </BrowserRouter>
    </div>
  );
};

export default App;
