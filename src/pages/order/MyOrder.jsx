import React, { useEffect } from 'react';
import { useMyOrderQuery } from '../../redux/api/orderApi';
import { Link } from 'react-router-dom'; // For navigation to order details page
import moment from 'moment';
import MetaData from '../../components/MetaData';

const MyOrder = () => {
  const { data, isLoading, error, refetch } = useMyOrderQuery();

  useEffect(() => {
    refetch(); 
  }, [refetch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading orders: {error.message}</div>;
  }

  // Flatten the array of arrays to get all order items in a single array
  const allOrderItems = data?.orders.flatMap(order => order.orderItems) || [];

  return (
    <div className="h-full w-full px-10 mt-10">
      <MetaData title="orders"/>
      <h1 className='text-2xl m-5'>My Orders ({data?.myTotalOrders})</h1>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs uppercase bg-black border border-red-600">
            <tr>
              <th scope="col" className="px-6 py-3">Product</th>
              <th scope="col" className="px-6 py-3">Total Price</th>
              <th scope="col" className="px-6 py-3">Order Date</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Order Details</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {allOrderItems.map((item, index) => (
              <tr key={index} className=" border-b">
                <td className="px-6 py-4 font-medium">
                  <Link to={`/shop/product/${item.productId}`}>
                    <img src={item.image.url} alt="" className='md:h-[10rem] w-[9rem]'/>
                    <p className='pt-4'>{item.name}</p>
                  </Link>
                </td>
                <td className="px-6 py-4">
                  ${item.price} {/* Assuming subtotal is not available directly */}
                </td>
                <td className="px-6 py-4">
                  {moment(item.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                </td>
                <td className="px-6 py-4">{item.status}</td>
                <td className="px-6 py-4 text-right">
                  <Link to={`/order/${item._id}`} className="text-blue-500 hover:underline">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
