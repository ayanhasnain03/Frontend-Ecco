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
import Admin from "./pages/admin/admin";
import Cart from "./pages/Cart/Cart";
import CreateProduct from "./pages/admin/CreateProduct";
import ProductManagement from "./pages/admin/ProductManagement";
import UpdateProduct from "./pages/admin/UpdateProduct";
import UserManagement from "./pages/admin/UserManageMents";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import Fav from "./pages/User/Fav";
import Checkout from "./pages/order/PaymentPage";
import Shipping from "./pages/order/Shipping";
import MyOrder from "./pages/order/MyOrder";
import OrderDetailPage from "./pages/order/OrderDetailPage";
import OrderManagemnt from "./pages/admin/OrderManagement";
import TermsAndConditions from "./pages/TermsAndConditions";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import CouponManageMent from "./pages/admin/CouponManageMent";
import CreateCoupon from "./pages/admin/CreateCoupon";

const App = () => {

  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const { user, isAuthenticated } = useSelector((state) => state.user);

  return (
    <div className="min-h-screen w-screen">
      <BrowserRouter>
        <Navbar user={user} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart user={user}  />} />


          <Route
            element={<ProtectedRoute isAuthenticated={user ? false : true} />}
          >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgetPassword/>} />
            <Route path="/resetpassword/:token" element={<ResetPassword/>} />
          </Route>

          {/* Logged User */}

          <Route
            element={<ProtectedRoute isAuthenticated={user ? true : false} />}
          >
            <Route path="/profile" element={<Profile user={user} />}  />
            <Route path="/orders" element={<MyOrder/>}  />
            <Route path="/order/:id" element={<OrderDetailPage user={user}/>}  />
            <Route path="/favourite" element={<Fav />}  />
            <Route path="/shipping" element={<Shipping/>}  />
            <Route path="/checkout" element={<Checkout/>}  />
          </Route>
          
          <Route
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={true}
              />
            }
          >
            <Route path="/admin/dashboard" element={<Admin />} />
            <Route path="/admin/productmanagement" element={<ProductManagement />} />
            <Route path="/admin/ordermanagement" element={<OrderManagemnt  />} />
            <Route path="/admin/updateproduct/:id" element={<UpdateProduct />} />

            <Route
              path="/admin/createproduct"
              element={<CreateProduct />}
            />

            <Route
              path="/admin/usermanagement"
              element={<UserManagement />}
            />

            <Route
              path="/admin/couponmanagement"
              element={<CouponManageMent/>}
            />
            <Route
              path="/admin/couponmanagement/create"
              element={<CreateCoupon/>}
            />

          </Route>

<Route path="/termsandcondition" element={<TermsAndConditions/>}/>
<Route path="/contact" element={<ContactUs/>}/>
<Route path="*" element={<PageNotFound/>}/>
        </Routes>
        <Footer />
        <Toaster position="bottom-center" />
      </BrowserRouter>
    </div>
  );
};

export default App;
