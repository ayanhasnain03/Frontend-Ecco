import React from "react";
import { useGetBarChartDataQuery } from "../../redux/api/dashboardApi";

const LatestTransaction = () => {
  const { data } = useGetBarChartDataQuery();

  const transactions = data?.stats?.latestTransaction;

  return (
    <div className="flex items-center justify-center ">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <h1 className="underline">Latest Transection</h1>

        <table className="w-full text-sm text-left border  ">
          <thead className="text-xs  uppercase  border-b-2">
            
            <tr>
              <th scope="col" className="py-3 px-6">TransactionId</th>
              <th scope="col" className="py-3 px-6">Amount</th>
              <th scope="col" className="py-3 px-6">Quantity</th>
              <th scope="col" className="py-3 px-6">Discount</th>
              <th scope="col" className="py-3 px-6">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.map((transaction, index) => (
              <tr
                key={index}
                className=""
              >
                <td className="py-4 px-6">{transaction._id}</td>
                <td className="py-4 px-6">{transaction.amount}</td>
                <td className="py-4 px-6">{transaction.quantity}</td>
                <td className="py-4 px-6">{transaction.discount}</td>
                <td className="py-4 px-6">{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestTransaction;
