import { useDispatch, useSelector } from "react-redux";
import CartItems from "../../components/Cart-Items";
import { calculatePrice } from "../../redux/slices/cartSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const {cartItems,subtotal,shippingCharges,tax,total}=useSelector(state=>state.cartReducer)
const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculatePrice())
      }, [cartItems])
  return (
    <main className="bg-black   flex flex-col md:flex-row items-center mt-8 relative">
      <div className="bg-black md:w-[70%] w-full  h-full px-1 ">
            <CartItems/> 
      </div>

      <div className="bg-black w-full md:w-[30%]  flex flex-col px-8 md:absolute top-1 right-0">
        <div className="mt-6 flex flex-col gap-5 ">
          <p className="text-xl font-thin">Subtotal: ₹{subtotal}</p>
          <p className="text-xl font-thin">Shipping: ₹{shippingCharges}</p>
          <p className="text-xl font-thin">Tax: ₹{tax}</p>
          <p className="text-xl font-thin">Discount:2323</p>
          <p className="text-xl font-thin">Total: ₹{total}</p>
        </div>
        <div className="mt-10">
          <input
            id="coupan"
            type="text"
            placeholder="Enter Your Coupan Code"
            className="block   p-1.5 text-black  sm:text-sm sm:leading-6 w-[20rem]"
          />
             <Link to="/shipping">
             <button
                className="flex w-[20rem] justify-center rounded-md bg-[#F30000]  py-1.5 text-sm mt-8 font-semibold leading-6 text-white shadow-sm hover:bg-[#f30000e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Check Out
              </button>
             </Link>
        </div>
     
      </div>
    </main>
  );
};
export default Cart;
