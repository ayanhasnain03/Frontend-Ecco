import { BarChart } from "../../components/admin/Charts";
import Sidebar from "../../components/admin/Sidebar";
import { FaShoppingBag, FaUserAlt } from "react-icons/fa";

const Admin = () => {
  return (
    <div className="h-screen">
      <Sidebar />
      <div className="h-[10rem] mt-10 flex items-center justify-around max-w-full px-8">
        <div className="md:h-[8rem] md:w-[20rem] h-[4rem] w-[8rem] border flex flex-col items-center text-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <FaUserAlt />
            <h1>Users</h1>
            <h1>123</h1>
          </div>
        </div>
        <div className="md:h-[8rem] md:w-[20rem] h-[4rem] w-[8rem] border flex flex-col items-center text-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <FaShoppingBag />
            <h1>Orders</h1>
            <h1>123</h1>
          </div>
        </div>
        <div className="md:h-[8rem] md:w-[20rem] h-[4rem] w-[8rem] border flex flex-col items-center text-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-xl font-bold">₹</h1>
            <h1>Revenue</h1>
            <h1>123</h1>
          </div>
        </div>
      </div>
      {/* dashboard for revenue */}
      <div className="mt-10 h-[30rem] w-full  flex items-center justify-center px-8">
      <div className="  md:border  h-full w-full flex flex-col items-center text-center justify-center bg-black mr-[2rem] py-[2rem] ">
      <BarChart
                        data_1={[10, 20, 30, 40, 50, 60, 70]}
                        data_2={[20, 30, 40, 50, 60, 70, 80]}
                        title_1="Dataset 1"
                        title_2="Dataset 2"
                        bgColor_1="rgba(255, 0, 0, 0.8)"
                        bgColor_2="rgba(255, 0, 0, 0.5)"
                    />
                   <div className="bg-white w-full h-[2px] mt-1.5 md:hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
