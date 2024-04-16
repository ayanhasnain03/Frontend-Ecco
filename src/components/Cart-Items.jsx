import { useState } from "react"
import {FaTrash} from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeCartItem } from "../redux/slices/cartSlice"
const CartItems = () => {
const {cartItems}=useSelector(state=>state.cartReducer)
const dispatch = useDispatch()
console.log(cartItems)
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
}
  return (
<>
{
  cartItems && cartItems.map((item)=>(
    <div className="border flex items-center justify-between  md:pr-8 pr-4 md:mt-5 mt-2 text-center">
    <div className="">
      <img src={item?.image?.url} className="md:w-[15rem] w-[8rem]" alt="" />
    </div>
    <div>
      <h1>{item.name}</h1>
      <h3>{item.price}</h3>
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
  ))
}
</>
  )
}
export default CartItems