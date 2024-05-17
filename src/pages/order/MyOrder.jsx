import React, { useEffect } from 'react';
import { useMyOrderQuery } from '../../redux/api/orderApi';
import { Link } from 'react-router-dom';
import moment from 'moment';
import MetaData from '../../components/MetaData';

const MyOrder = () => {
  const { data, isLoading, error, refetch } = useMyOrderQuery();
  const dataFromId = data?.orders.map(order => order._id) || [];

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading orders: {error.message}</div>;
  }

  return (
    <div className="h-full w-full px-10 mt-10">
      <MetaData title="My Orders" />
      <h1 className='text-2xl m-5'>My Orders ({data?.totalOrder})</h1>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs uppercase bg-black border border-red-600">
            <tr>
              <th scope="col" className="px-6 py-3">Product</th>
              <th scope="col" className="px-6 py-3"> Price</th>
              <th scope="col" className=" py-3"> Quantity</th>
              <th scope="col" className="px-6 py-3"> Total</th>
              <th scope="col" className="px-6 py-3">Order Date</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Order Details</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.orders.map((order, index) => (
              order.orderItems.map((item, itemIndex) => (
                <tr key={itemIndex} className="border-b">
                  <td className="px-6 py-4 font-medium">
                    <Link to={`/shop/product/${item.productId}`}>
                      <img src={item.image.url} alt={item.name} className='md:h-[10rem] w-[9rem]' />
                      <p className='pt-4'>{item.name}</p>
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    ₹{item.price}
                  </td>
                  <td className="px-6 py-4">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4">
                    ₹{item.price * item.quantity}
                  </td>
                  <td className="px-6 py-4">
                    {moment(item.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                  </td>
                  <td className="px-6 py-4">{order.status}</td>
                  <td className="px-6 py-4 text-right">
                    <Link to={`/order/${dataFromId[index]}`} className="text-blue-500 hover:underline">
                      View Details
                    </Link>
                  </td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
