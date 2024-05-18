import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import MetaData from "../../components/MetaData";
import { useCreateCouponMutation } from "../../redux/api/couponApi";


export default function CreateCoupon() {

const naviagte = useNavigate()
  const [coupon, setCoupon] = useState("");
  const [amount, setAmount] = useState("");
  const [createCoupon,{isLoading}]=useCreateCouponMutation()

  const submitHandler =async e => {
    e.preventDefault();
try {
  const res = await createCoupon({coupon,amount}).unwrap()
toast.success(res?.message)
naviagte("/admin/couponmanagement")
} catch (error) {
  toast.error(error?.data?.message)

}
  };
  return (
    <>
    <MetaData title="create coupon"/>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-[4rem]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#F30000]">
            Create Coupon
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submitHandler}>
            <div>
              <label
             
                className="block text-sm font-medium leading-6"
              >
              Coupon
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  type="text"
                  autoComplete="email"
                  required
                  className="block px-2 w-full  py-1.5 text-black  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 "
                >
                  Amount
                </label>
            
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  name="password"
                  type="text"
                  autoComplete="current-password"
                  required
                  className="block px-2 w-full  py-1.5 text-black  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#F30000] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#f30000e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
{
  isLoading ? (<>createing...</>):(<>create</>)
}              </button>
            </div>
          </form>

       
        </div>
      </div>
    </>
  );
}
