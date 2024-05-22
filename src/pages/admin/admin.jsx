import  { BarChart, LineChart } from "../../components/admin/Charts";
import Sidebar from "../../components/admin/Sidebar";
import { FaShoppingBag, FaTshirt, FaUserAlt } from "react-icons/fa";
import { useGetBarChartDataQuery } from "../../redux/api/dashboardApi";
import CategoryPercentage from "../../components/admin/CategoryPercentage";
import MetaData from "../../components/MetaData";


const Admin = () => {
  const { data } = useGetBarChartDataQuery();

  return (
    <div className="">
      <MetaData title="Dashboard"/>
      <Sidebar />
      <div className=" mt-10 flex items-center justify-around max-w-full px-8">
        <div className="md:h-[8rem] md:w-[20rem] h-[6rem] w-[8rem] border flex flex-col items-center text-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <FaUserAlt />
            <h1>Users</h1>
            <h1>{data?.stats?.count?.user}</h1> {/* Display user count */}
          </div>
        </div>
        <div className="md:h-[8rem] md:w-[20rem] h-[6rem] w-[8rem] border flex flex-col items-center text-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <FaTshirt />
            <h1>Products</h1>
            <h1>{data?.stats?.count?.product}</h1> 
          </div>
        </div>
        <div className="md:h-[8rem] md:w-[20rem] h-[6rem] w-[8rem] border flex flex-col items-center text-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <FaShoppingBag />
            <h1>Orders</h1>
            <h1>{data?.stats?.count?.order}</h1> {/* Display order count */}
          </div>
        </div>
        <div className="md:h-[8rem] md:w-[20rem] h-[6rem] w-[8rem] border flex flex-col items-center text-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-xl font-bold">₹</h1>
            <h1>Revenue</h1>
            <h1>{data?.stats?.count?.revenue}</h1> {/* Display revenue */}
          </div>
        </div>
      </div>
      {/* dashboard for revenue */}
      <div className="mt-10 md:h-[30rem] w-full  flex items-center justify-center px-8">
        <div className="md:border h-full w-full flex flex-col items-center text-center justify-center bg-black mr-[2rem] py-[2rem] ">
          <h1>Last Six Months Revenue</h1>
          <BarChart
            data_1={data?.stats?.charts?.revenue}
            title_1="Revenue" 
            bgColor_1="rgba(255, 0, 0, 0.8)"
            bgColor_2="rgba(255, 0, 0, 0.5)"
          />
          <div className="bg-white w-full h-[2px] mt-1.5 md:hidden"></div>
        </div>
      </div>
      {/* Categories % & six month Orders */}
     <div className="md:ml-10 md:mt-10 flex items-center justify-between md:flex-row flex-col">
     <div className="w-[20rem]">
        <h1>Categories%</h1>
      {data?.stats?.categoryCount.map((i) => {
                    const [heading, value] = Object.entries(i)[0];
                    return (
                      <CategoryPercentage
                        key={heading}
                        value={value}
                        heading={heading}
                      />
                    );
                  })}
      </div>
      <div className=" md:w-[70rem] overflow-auto w-full md:mr-16 mt-2 md:p-4 m-2  md:border  border-b-2">
        <h1>Last Six Months Orders</h1>
      <LineChart borderColor={"#F30000"}  title_1={"Orders"} data_1={data?.stats?.charts?.order} />
      </div>
     </div>
     {/* Users Ratio */}
     <div></div>
    </div>
  );
};

export default Admin;
