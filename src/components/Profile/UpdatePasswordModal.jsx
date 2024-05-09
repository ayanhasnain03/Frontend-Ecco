import { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import profilePng from "../../assets/Profile.png";
import toast from "react-hot-toast";
import { useUpdatePasswordMutation } from "../../redux/api/userProfileApi";

const UpdatePasswordModal = ({ profilePassChange }) => {
  const [oldPassword, setoldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [updatepassword, { isLoading }] = useUpdatePasswordMutation();
  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await updatepassword({ oldPassword, newPassword }).unwrap();
    toast.success(res?.message);
    console.log(res);
  };

  return (
    <div className="relative flex items-center h-full w-full ">
      <button className="absolute top-5 right-8" onClick={profilePassChange}>
        X
      </button>

      <div className="w-full flex flex-col items-center ">
        <>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8 w-[60%]">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-[#F30000]">
                Update Password
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={submitHandler}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6"
                  >
                    oldPassword
                  </label>
                  <div className="mt-2">
                    <input
                      value={oldPassword}
                      onChange={(e) => setoldPassword(e.target.value)}
                      required
                      className="block w-full  py-1.5 text-black  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 "
                    >
                      New Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      name="password"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      autoComplete="current-password"
                      required
                      className="block w-full  py-1.5 text-black  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                 
                    <button
                      type="submit"
                      className="flex w-[11.5rem] justify-center rounded-md bg-[#F30000]  py-1.5 text-sm mt-8  font-semibold leading-6 text-white shadow-sm hover:bg-[#f30000e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
{
  isLoading ? (<>Updateing...</>):(<>Update</>)
}                    </button>
             
                </div>
              </form>
            </div>
          </div>
        </>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default UpdatePasswordModal;
