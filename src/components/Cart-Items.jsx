
import {FaTrash} from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeCartItem } from "../redux/slices/cartSlice"
import {Link} from "react-router-dom"
import toast from "react-hot-toast"
const CartItems = () => {
const {cartItems}=useSelector(state=>state.cartReducer)
const dispatch = useDispatch()
const incrementHandler = (cartItem) => {
  if (cartItem.quantity >= cartItem.stock) return;
  dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity + 1 }));
};
const decrementHandler = (cartItem) => {
  if (cartItem.quantity<= 1) return;
  dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity - 1 }));
};
const removeHandler = (id)=>{
dispatch(removeCartItem(id))
toast.success("removed")
}
  return (
<>
{
  cartItems && cartItems.length > 0 ? cartItems.map((item)=>(
    <div className="border flex items-center justify-between  md:pr-8 pr-4 md:mt-5 mt-2 text-center" key={item._id}>
<Link to={`/shop/product/${item._id}`}>
<div className="">
      <img src={item?.image?.url} className="md:w-[15rem] w-[8rem]" alt="" />
    </div>
</Link>
    <div>
      <h1>{item.name}</h1>
      <h3 className="mt-2">₹ {item.price}</h3>
    </div>
    <div className="flex justify-between w-[8rem] items-center">
    <button onClick={()=>decrementHandler(item)} className="text-center">-</button>
    <p>{item.quantity}</p>
      <button onClick={()=>incrementHandler(item)} className="text-center">+</button>
      <button onClick={() => removeHandler(item._id)}>
      <FaTrash />
    </button>
    </div>
  </div>
  )):(
    <div className="flex items-center justify-center flex-col gap-8 mt-20 w-[100vw] ">
      <h1 className="text-3xl font-bold">Items Not Found ! </h1>
      <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#F30000] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#f30000e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
<Link to="/shop">Go to shop</Link>
              </button>
    </div>
  )
}
</>
  )
}
export default CartItems