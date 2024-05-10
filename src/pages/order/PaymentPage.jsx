import React, { useState } from "react";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { resetCart } from "../../redux/slices/cartSlice";
import { useCreateOrderMutation } from "../../redux/api/orderApi";
import toast from "react-hot-toast";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { shippingInfo, cartItems, subtotal, tax, shippingCharges, discount, total } = useSelector(
    (state) => state.cartReducer
  );

  const [isProcessing, setIsProcessing] = useState(false);
  const [createOrder] = useCreateOrderMutation(); // Get the mutation to create orders

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      toast.error("Stripe is not ready. Please refresh the page and try again.");
      return;
    }

    setIsProcessing(true);

    try {
      const orderData = {
        shippingInfo,
        orderItems: cartItems.map(item => ({
          ...item,
          productId: item._id // Assuming each item has an `id` field that corresponds to `productId`
      })),
        subtotal,
        tax,
        shippingCharges,
        discount,
        total,
      };

      const { paymentIntent, error } = await stripe.confirmPayment({
        elements,
        confirmParams: { return_url: window.location.origin },
        redirect: 'if_required',
      });

      if (error) {
        throw new Error(error.message || "Payment failed");
      }

      if (paymentIntent && paymentIntent.status === "succeeded") {
        const res = await createOrder(orderData).unwrap(); // Create the order
        dispatch(resetCart()); // Clear the cart
        toast.success("Order placed successfully");
        navigate("/orders"); // Navigate to the orders page or success page
      } else {
        toast.error("Payment did not complete successfully"); // Handle failed payment
      }
    } catch (err) {
      console.error("Error during checkout:", err);
      toast.error(err.message || "An error occurred during checkout"); // Handle checkout errors
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="checkout-container bg-black text-white p-5 flex items-center justify-center mt-8">
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

  if (!clientSecret) {
    toast.error("Client secret is missing. Please restart the payment process.");
    return <Navigate to="/shipping" />; // Redirect if clientSecret is missing
  }

  return (
    <Elements
      options={{ clientSecret }}
      stripe={stripePromise}
    >
      <CheckOutForm />
    </Elements>
  );
};

export default Checkout;
