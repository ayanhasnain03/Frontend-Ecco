import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {  useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { resetCart } from "../../redux/slices/cartSlice";
import { useCreateOrderMutation } from "../../redux/api/orderApi";
import MetaData from "../../components/MetaData";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const {
    shippingInfo,
    cartItems,
    subtotal,
    tax,
    discount,
    shippingCharges,
    total,
  } = useSelector((state) => state.cartReducer);

  const [isProcessing, setIsProcessing] = useState(false);

  const [newOrder] = useCreateOrderMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;
    setIsProcessing(true);

    const orderData = {
      shippingInfo,
      orderItems:cartItems.map((item)=>({
        productId: item._id,
        name: item.name,
        image: item.image,
        price: item.price,
        quantity: item.quantity,
      })),
      subtotal,
      tax,
      discount,
      shippingCharges,
      total,
    };
    const { paymentIntent, error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: window.location.origin },
      redirect: "if_required",
    });

    if (error) {
      setIsProcessing(false);
      return toast.error(error.message || "Something Went Wrong");
    }

    if (paymentIntent.status === "succeeded") {
      const res = await newOrder(orderData);
      dispatch(resetCart());
      toast.success("order placed successfully")
      navigate("/orders")
    }
    setIsProcessing(false);
  };
  return (
    <div className="checkout-container bg-black text-white p-5 flex items-center justify-center mt-8">
     <MetaData title="payment"/>
      <form onSubmit={submitHandler} className="space-y-4">
        <PaymentElement className="p-2 rounded-lg w-[20rem]" />
        <button type="submit" disabled={isProcessing} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {isProcessing ? "Processing..." : "Pay"}
        </button>
      </form>
    </div>
  );
};

const Checkout = () => {
  const location = useLocation();

  const clientSecret = location.state;

  if (!clientSecret) return <Navigate to={"/shipping"} />;

  return (
    <Elements
      options={{
        clientSecret,
      }}
      stripe={stripePromise}
      className="bg-black min-h-screen"
    >
      <CheckOutForm />
    </Elements>
  );
};

export default Checkout;