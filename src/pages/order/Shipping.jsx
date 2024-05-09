import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetCart, saveShippingInfo } from "../../redux/slices/cartSlice";
import axios from "axios";
import { server } from "../../redux/store";
import toast from "react-hot-toast";
import MetaData from "../../components/MetaData";

const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  // Handle changes to the shipping info fields
  const changeHandler = (e) => {
    setShippingInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Retrieve cart data from Redux
  const { cartItems, total } = useSelector((state) => state.cartReducer);

  // Submit handler for the form
  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(saveShippingInfo(shippingInfo)); // Save shipping info to Redux

    try {
      // Make request to create payment
      const { data } = await axios.post(
        `${server}/payment/create`,
        { amount: total },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Navigate to the checkout with clientSecret
      navigate("/checkout", {
        state: data.clientSecret,
      });

      toast.success("Shipping info saved and payment initialized.");
    } catch (error) {
      console.error(error); // Log the error for debugging
      toast.error("Failed to initialize payment. Please try again.");
    }
  };

  // Redirect to cart if there are no items
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/cart");
    }
  }, [cartItems, navigate]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
      <MetaData title="Shipping"/>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#F30000]">
          Shipping Info
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={submitHandler}>
          <div>
            <label className="block text-sm font-medium leading-6">
              Address
            </label>
            <input
              type="text"
              name="address"
              required
              value={shippingInfo.address}
              onChange={changeHandler}
              className="block w-full p-1.5 text-black sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label className="block text-sm font-medium leading-6">City</label>
            <input
              type="text"
              name="city"
              required
              value={shippingInfo.city}
              onChange={changeHandler}
              className="block w-full p-1.5 text-black sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label className="block text-sm font-medium leading-6">State</label>
            <input
              type="text"
              name="state"
              required
              value={shippingInfo.state}
              onChange={changeHandler}
              className="block w-full p-1.5 text-black sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label className="block text-sm font-medium leading-6">Country</label>
            <input
              type="text"
              name="country"
              required
              value={shippingInfo.country}
              onChange={changeHandler}
              className="block w-full p-1.5 text-black sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label className="block text-sm font-medium leading-6">Pin Code</label>
            <input
              type="number"
              name="pinCode"
              required
              value={shippingInfo.pinCode}
              onChange={changeHandler}
              className="block w-full p-1.5 text-black sm:text-sm sm:leading-6"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center rounded-md bg-[#F30000] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#f30000e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Save and Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
