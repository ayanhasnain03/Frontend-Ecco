import { useState } from "react";
import { useForgotPasswordMutation } from "../../redux/api/userProfileApi";
import toast from "react-hot-toast";
import MetaData from "../../components/MetaData";

const ForgetPassword = () => {
  const [forgetPassword,{isLoading}] = useForgotPasswordMutation();

  const [email, setEmail] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await forgetPassword({email:email}).unwrap();
 
   toast.success(res?.message)
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-[4rem]">
        <MetaData title="Forget Password"/>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#F30000]">
            Forget Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submitHandler}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full  py-1.5 text-black  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#F30000] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#f30000e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
{
    isLoading ? <p>loding...</p> : <p>Email Sent</p> 
}              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ForgetPassword;