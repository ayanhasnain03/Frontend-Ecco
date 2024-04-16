import { useSelector } from "react-redux";
import CartItems from "../../components/Cart-Items";

const Cart = () => {
  const {cartItems}=useSelector(state=>state.cartReducer)
  console.log(cartItems)
  return (
    <main className="bg-black h-[100vh] flex flex-col md:flex-row items-center mt-8 ">
      <div className="bg-black md:w-[70%] w-full  h-full px-1 ">
            <CartItems/>
      </div>
      <div className="bg-black w-full md:w-[30%] h-[100vh] flex flex-col px-8">
        <div className="mt-6 flex flex-col gap-5 ">
          <p className="text-xl font-thin">Subtotal:2323</p>
          <p className="text-xl font-thin">Shipping:2323</p>
          <p className="text-xl font-thin">Tax:2323</p>
          <p className="text-xl font-thin">Discount:2323</p>
          <p className="text-xl font-thin">Total:2323</p>
        </div>
        <div className="mt-10">
          <input
            id="coupan"
            type="text"
            placeholder="Enter Your Coupan Code"
            className="block   p-1.5 text-black  sm:text-sm sm:leading-6 w-[20rem]"
          />
             <button
                className="flex w-[20rem] justify-center rounded-md bg-[#F30000]  py-1.5 text-sm mt-8 font-semibold leading-6 text-white shadow-sm hover:bg-[#f30000e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Check Out
              </button>
        </div>
     
      </div>
    </main>
  );
};
export default Cart;
