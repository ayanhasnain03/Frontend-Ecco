import { useDispatch, useSelector } from "react-redux";
import CartItems from "../../components/Cart-Items";
import { calculatePrice, discountApplied } from "../../redux/slices/cartSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import {server} from "../../redux/store"
import { VscError } from "react-icons/vsc";
const Cart = () => {
  const { cartItems, subtotal, shippingCharges, tax, total, discount } =
    useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();

  const [couponCode, setcouponCode] = useState("");
  const [isValidCouponCode, setisVaildCouponCode] = useState(false);

  useEffect(() => {
    const {token:cancelToken,cancel}=axios.CancelToken.source()
    const timeOutID = setTimeout(() => {

      axios.get(`${server}/payment/coupon/discount?coupon=${couponCode}`,
      {
        cancelToken
      }).then((res)=>{
        dispatch(discountApplied(res.data.discount))
    dispatch(calculatePrice())
        setisVaildCouponCode(true);
      }).catch(()=>{
  
        dispatch(discountApplied(0))
        dispatch(calculatePrice())
   setisVaildCouponCode(false);

      })
    }, 1000);
    return () => {
      clearTimeout(timeOutID);
      setisVaildCouponCode(false);
      cancel()
    };
  }, [couponCode]);
  useEffect(() => {
    dispatch(calculatePrice());
  }, [cartItems]);
  return (
    <main className="bg-black   flex flex-col md:flex-row items-center mt-8 relative">
      <div className="bg-black md:w-[70%] w-full  h-full px-1 ">
        <CartItems />
      </div>

      <div className="bg-black w-full md:w-[30%]  flex flex-col px-8 md:absolute top-1 right-0">
        <div className="mt-6 flex flex-col gap-5 ">
          <p className="text-xl font-thin">Subtotal: ₹{subtotal}</p>
          <p className="text-xl font-thin">Shipping: ₹{shippingCharges}</p>
          <p className="text-xl font-thin">Tax: ₹{tax}</p>
          <p className="text-xl font-thin">Discount:{discount}</p>
          <p className="text-xl font-thin">Total: ₹{total}</p>
        </div>
        <div className="mt-10">
          <input
            id="coupan"
            type="text"
            placeholder="Coupon Code"
            value={couponCode}
            onChange={(e) => setcouponCode(e.target.value)}
            className="block   p-1.5 text-black mb-2  sm:text-sm sm:leading-6 w-[20rem]"
          />
           {couponCode &&
          (isValidCouponCode ? (
            <span className="text-green-300 mt-5">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="text-red-600 flex items-center gap-2">
              Invaild Coupon Code <VscError />
            </span>
          ))}
       {
        cartItems.length > 0 && (
          <Link to="/shipping">
          <button className="flex w-[20rem] justify-center rounded-md bg-[#F30000]  py-1.5 text-sm mt-8 font-semibold leading-6 text-white shadow-sm hover:bg-[#f30000e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Check Out
          </button>
        </Link>
        )
       }
        </div>
      </div>
    </main>
  );
};
export default Cart;
