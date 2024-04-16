
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/action/userAction";

const LogoutPopUp = ({ logoutModal }) => {
    const dispatch = useDispatch();
    const logoutHandler = async () => {
      dispatch(logout());
      toast.success("logout success")
    };

  return (
    <div className="relative flex items-center h-full w-full ">
      <button className="absolute top-5 right-8" onClick={logoutModal}>
        X
      </button>

      <div className="w-full flex flex-col items-center ">
        <>
          <div className="flex  flex-col  px-6  lg:px-8 ">
           
              <h2 className=" text-center text-2xl font-bold  tracking-tight text-[#F30000]">
                Logout
              </h2>
          
              <h1 className="text-center">Are You Sure?</h1>

            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex flex-row justify-between items-center mt-5 w-[12rem]">
            <button onClick={logoutModal}
            className=" w-[5rem] justify-center rounded-md bg-[#c94949]  py-1 text-sm font-semibold  text-white shadow-sm hover:bg-[#f30000e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >back</button>
            <button onClick={logoutHandler}
            className=" w-[5rem] justify-center rounded-md bg-[#F30000]  py-1 text-sm font-semibold  text-white shadow-sm hover:bg-[#f30000e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >logout</button>
          </div>
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
export default LogoutPopUp;
