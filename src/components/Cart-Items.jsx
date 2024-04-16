import { useState } from "react"
import {FaTrash} from "react-icons/fa"
import { useSelector } from "react-redux"
const CartItems = () => {
const {cartItems}=useSelector(state=>state.cartReducer)
console.log(cartItems)
  const [quantity, setQuantity] = useState(1)
  return (
<>
{
  cartItems && cartItems.map((item)=>(
    <div className="border flex items-center justify-between px-2 md:px-8 md:mt-5 mt-2 text-center">
    <div className="">
      <img src={item.image.url} className="w-[5rem]" alt="" />
    </div>
    <div>
      <h1>{item.name}</h1>
      <h3>{item.price}</h3>
    </div>
    <div className="flex justify-between w-[8rem] items-center">
    <button onClick={()=>setQuantity(quantity - 1)} className="text-center">-</button>
    <p>{quantity}</p>
      <button onClick={()=>setQuantity(quantity + 1)} className="text-center">+</button>
      <button >
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