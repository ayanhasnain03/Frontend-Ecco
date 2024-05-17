import React, { useEffect } from 'react';
import { useMyOrderQuery } from '../../redux/api/orderApi';
import { Link } from 'react-router-dom';
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

  return (
    <div className="h-full w-full px-10 mt-10">
      <MetaData title="My Orders" />
      <h1 className='text-2xl m-5'>My Orders ({data?.totalOrder || 0})</h1>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs uppercase bg-black border border-red-600">
            <tr>
              <th scope="col" className="px-6 py-3">Product</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="py-3">Quantity</th>
              <th scope="col" className="py-3">Discount</th>
              <th scope="col" className="py-3">Shipping Charge</th>
              <th scope="col" className="px-6 py-3">Tax</th>
              <th scope="col" className="px-6 py-3">Total</th>
              <th scope="col" className="px-6 py-3">Order Date</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Order Details</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.orders.map((order, orderIndex) => (
              order.orderItems.map((item, itemIndex) => (
                <tr key={`${order._id}-${item._id}`} className="border-b">
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
                    ₹{order.discount}
                  </td>
                  <td className="px-6 py-4">
                    ₹{order.shippingCharges}
                  </td>
                  <td className="px-6 py-4">
                    ₹{order.tax}
                  </td>
                  <td className="px-6 py-4">
                    ₹{item.price * item.quantity + order.shippingCharges + order.tax - order.discount}
                  </td>
                  <td className="px-6 py-4">
                    {moment(order.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                  </td>
                  <td className="px-6 py-4">{order.status}</td>
                  <td className="px-6 py-4 text-right">
                    <Link to={`/order/${order._id}`} className="text-blue-500 hover:underline">
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
