import { useState } from "react"
import {FaTrash} from "react-icons/fa"
const CartItems = ({product}) => {
  const [quantity, setQuantity] = useState(1)
  return (
    <div className="border flex items-center justify-between px-2 md:px-8 md:mt-5 mt-2">
      <div className="">
        <img src={product.image} className="w-[5rem]" alt="" />
      </div>
      <div>
        <h1>{product.title}</h1>
        <h3>{product.price}</h3>
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
  )
}
export default CartItems