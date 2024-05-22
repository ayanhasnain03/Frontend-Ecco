import React from "react";
import {
  BarChart,
  DoughnutChart,
  LineChart,
  VerticalBarChart,
} from "../../components/admin/Charts";
import Sidebar from "../../components/admin/Sidebar";
import { FaShoppingBag, FaTshirt, FaUserAlt } from "react-icons/fa";
import {
  useGetBarChartDataQuery,
  useGetPieChartDataQuery,
  useGetYearChartDataQuery,
} from "../../redux/api/dashboardApi";
import CategoryPercentage from "../../components/admin/CategoryPercentage";
import MetaData from "../../components/MetaData";

const Admin = () => {
  const { data, isLoading: isLoadingBarChartData } = useGetBarChartDataQuery();
  const { data: yearStats, isLoading: isLoadingYearStats } = useGetYearChartDataQuery();
  const { data: pieStats, isLoading: isLoadingPieStats } = useGetPieChartDataQuery();

  // Check if any of the data is still loading
  const isLoading = isLoadingBarChartData || isLoadingYearStats || isLoadingPieStats;



  // Extracting labels and data for the DoughnutChart when data is available
  const labels = pieStats ? Object.keys(pieStats.charts.usersAgeGroup) : [];
  const doughnutData = pieStats ? Object.values(pieStats.charts.usersAgeGroup) : [];

  // Define specific colors for each age group
  const colorMapForAgeGroup = {
    adult: "hsl(200, 70%, 50%)", // Blue
    teen: "hsl(100, 70%, 50%)",  // Green
    old: "hsl(0, 70%, 50%)"      // Red
  };

  const backgroundColor = labels.map(label => colorMapForAgeGroup[label]);

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading message while data is being fetched
  }

  return (
    <div className="">
      <MetaData title="Dashboard" />
      <Sidebar />
      <div className="mt-10 flex items-center justify-around max-w-full px-8">
        <div className="md:h-[8rem] md:w-[20rem] h-[6rem] w-[8rem] border flex flex-col items-center text-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <FaUserAlt style={{ color: "red" }} />
            <h1>Users</h1>
            <h1>{data?.stats?.count?.user}</h1> {/* Display user count */}
          </div>
        </div>
        <div className="md:h-[8rem] md:w-[20rem] h-[6rem] w-[8rem] border flex flex-col items-center text-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <FaTshirt style={{ color: "blue" }} />
            <h1>Products</h1>
            <h1>{data?.stats?.count?.product}</h1>
          </div>
        </div>
        <div className="md:h-[8rem] md:w-[20rem] h-[6rem] w-[8rem] border flex flex-col items-center text-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <FaShoppingBag style={{ color: "rgba(0, 255, 127, 0.76)" }} />
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
      <div className="mt-10 md:h-[30rem] w-full flex items-center justify-center px-8">
        <div className="md:border h-full w-full flex flex-col items-center text-center justify-center bg-black mr-[2rem] py-[2rem] ">
          <h1>Last Six Months Revenue</h1>
          <BarChart
            data_1={data?.stats?.charts?.revenue}
            title_1="Revenue"
            bgColor_1="rgb(255, 255, 255)"
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
              <CategoryPercentage key={heading} value={value} heading={heading} />
            );
          })}
        </div>
        <div className="md:w-[70rem] w-[30rem] p-2 md:mr-16 mt-4 md:p-4 m-2 md:border border-b-2">
          <h1>Last Six Months Orders</h1>
          <LineChart
            borderColor={"#F30000"}
            title_1={"Orders"}
            data_1={data?.stats?.charts?.order}
          />
        </div>
      </div>
      {/* Users Ratio */}
      <div className="flex items-center justify-center md:flex-row flex-col ">
        <div className="p-10 md:w-[60rem] w-[32rem]  md:h-[35rem] border-b-2">
          <h1>Last 12 Months Order & Products</h1>
          <VerticalBarChart
            title_1="Orders"
            title_2="Products"
            title_3="Users"
            data_1={yearStats?.charts.orders}
            data_2={yearStats?.charts?.products}
            data_3={yearStats?.charts?.users}
          />
        </div>
        <div className=" md:w-[25rem] w-[20rem] ">
          <h1 className="mt-5 underline">Users Age Ratio</h1>
          <DoughnutChart
            labels={labels}
            data={doughnutData}
            backgroundColor={backgroundColor}
            cutout="50%"
            legends={false}
            offset={[0, 0, 0, 80]}
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;
