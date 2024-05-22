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
import LatestTransaction from "../../components/admin/LatestTransaction";

const Admin = () => {
  const { data, isLoading: isLoadingBarChartData } = useGetBarChartDataQuery();
  const { data: yearStats, isLoading: isLoadingYearStats } =
    useGetYearChartDataQuery();
  const { data: pieStats, isLoading: isLoadingPieStats } =
    useGetPieChartDataQuery();

  // Check if any of the data is still loading
  const isLoading =
    isLoadingBarChartData || isLoadingYearStats || isLoadingPieStats;

  // Extracting data for the DoughnutChart when data is available
  const ageGroupLabels = pieStats
    ? Object.keys(pieStats.charts.usersAgeGroup)
    : [];
  const ageGroupData = pieStats
    ? Object.values(pieStats.charts.usersAgeGroup)
    : [];

  const orderStatusLabels = pieStats
    ? Object.keys(pieStats.charts.orderFullfillment)
    : [];
  const orderStatusData = pieStats
    ? Object.values(pieStats.charts.orderFullfillment)
    : [];

  const adminCustomerLabels = pieStats
    ? Object.keys(pieStats.charts.adminCustomer)
    : [];
  const adminCustomerData = pieStats
    ? Object.values(pieStats.charts.adminCustomer)
    : [];

  const productCategoriesData = pieStats
    ? Object.values(pieStats.charts.productCategories)
    : [];

  const categoriesMappedData = productCategoriesData.map((i) => {
    const categoryName = Object.keys(i)[0];
    const categoryValue = Object.values(i)[0];
    return { categoryName, categoryValue };
  });

  const revenueDistributionLabel = pieStats
    ? Object.keys(pieStats.charts.revenueDistribution)
    : [];
  const revenueDistributionLabelData = pieStats
    ? Object.values(pieStats.charts.revenueDistribution)
    : [];

  // Define specific colors for each category
  const ageGroupColors = {
    adult: "hsl(200, 70%, 50%)", // Blue
    teen: "hsl(100, 70%, 50%)", // Green
    old: "hsl(0, 70%, 50%)", // Red
  };

  const orderStatusColors = {
    delivered: "hsl(120, 70%, 50%)", // Green
    processing: "hsl(60, 70%, 50%)", // Yellow
    shipped: "hsl(240, 70%, 50%)", // Blue
  };

  const adminCustomerColors = {
    admin: "hsl(300, 70%, 50%)", // Purple
    customer: "hsl(0, 70%, 50%)", // Red
  };

  const productCategoriesColors = [
    "hsl(0, 70%, 50%)",
    "hsl(30, 70%, 50%)",
    "hsl(60, 70%, 50%)",
    "hsl(90, 70%, 50%)",
    "hsl(120, 70%, 50%)",
  ];

  const revenueDistributionColors = [
    "hsl(0, 70%, 50%)",
    "hsl(30, 70%, 50%)",
    "hsl(60, 70%, 50%)",
    "hsl(90, 70%, 50%)",
    "hsl(120, 70%, 50%)",
  ];

  const ageGroupBackgroundColor = ageGroupLabels.map(
    (label) => ageGroupColors[label]
  );
  const orderStatusBackgroundColor = orderStatusLabels.map(
    (label) => orderStatusColors[label]
  );
  const adminCustomerBackgroundColor = adminCustomerLabels.map(
    (label) => adminCustomerColors[label]
  );
  const productCategoriesBackgroundColor = productCategoriesColors;

  const revenueDistributionBackgound = revenueDistributionColors;
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
            <FaUserAlt />
            <h1>Users</h1>
            <h1>{data?.stats?.count?.user}</h1> {/* Display user count */}
          </div>
        </div>
        <div className="md:h-[8rem] md:w-[20rem] h-[6rem] w-[8rem] border flex flex-col items-center text-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <FaTshirt  />
            <h1>Products</h1>
            <h1>{data?.stats?.count?.product}</h1>
          </div>
        </div>
        <div className="md:h-[8rem] md:w-[20rem] h-[6rem] w-[8rem] border flex flex-col items-center text-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <FaShoppingBag  />
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
            bgColor_1="#F30000"
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
        <div className="md:w-[70rem]  p-2 md:mr-16 mt-4 md:p-4 m-2 md:border border-b-2">
          <h1>Last Six Months Orders</h1>
          <LineChart
            borderColor={"#F30000"}
            title_1={"Orders"}
            data_1={data?.stats?.charts?.order}
          />
        </div>
      </div>
      {/* Users Ratio */}
      <div className="flex items-center justify-center  flex-col  ">
        <div className="p-10 md:w-[60rem] w-[32rem] md:h-[35rem] border-b-2">
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
        <div className="mt-[10rem] ">
          <div className="flex w-full ">
            <div className="flex items-center justify-between w-[100vw] md:flex-row  flex-col ml-[3rem] md:m-0 md:px-[10rem]">
              <div className=" w-[20rem]">
                <h1 className=" underline">Order Fulfillment Status</h1>
                <DoughnutChart
                  labels={orderStatusLabels}
                  data={orderStatusData}
                  backgroundColor={orderStatusBackgroundColor}
                  legends={false}
                  offset={[0, 0, 0, 80]}
                />
              </div>
              <div className=" w-[20rem]">
                <h1 className=" underline">Product Categories</h1>
                <DoughnutChart
                  labels={categoriesMappedData.map((item) => item.categoryName)}
                  data={categoriesMappedData.map((item) => item.categoryValue)}
                  backgroundColor={productCategoriesBackgroundColor}
                  legends={false}
                  offset={[0, 0, 0, 80]}
                />
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center  ">
            <div className=" md:w-[25rem] w-[20rem]">
              <h1 className=" underline">Revenue Distribution</h1>
              <DoughnutChart
                labels={revenueDistributionLabel}
                data={revenueDistributionLabelData}
                backgroundColor={revenueDistributionBackgound}
                legends={false}
                offset={[0, 0, 0, 80]}
              />
            </div>
          </div>

          <div className="flex w-[100vw] md:px-[10rem] md:flex-row  justify-between  flex-col  ml-[7rem] md:m-0  ">
            <div className=" w-[20rem] ">
              <h1 className=" underline">Users Age Ratio</h1>
              <DoughnutChart
                labels={ageGroupLabels}
                data={ageGroupData}
                backgroundColor={ageGroupBackgroundColor}
                legends={false}
                offset={[0, 0, 0, 80]}
              />
            </div>
            <div className=" w-[20rem]">
              <h1 className="mt-2 underline">Admin Customer Ratio</h1>
              <DoughnutChart
                labels={adminCustomerLabels}
                data={adminCustomerData}
                backgroundColor={adminCustomerBackgroundColor}
                cutout="50%"
                legends={false}
                offset={[0, 0, 0, 80]}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <LatestTransaction />
      </div>
    </div>
  );
};

export default Admin;
