import { Link } from "react-router-dom";
import { useGetAllOrdersQuery } from "../../redux/api/orderApi"
import moment from "moment";

const OrderManagemnt = () => {
  const {data}=useGetAllOrdersQuery()

  return (
    <div className="h-full w-full px-10 mt-10">
      <h1 className='text-2xl m-5'>MyOrders({data?.myTotalOrders})</h1>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left rtl:text-right 0">
          <thead className="text-xs  uppercase bg-black border border-red-600">
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
            {data.orders.map((order) => (
              <tr key={order._id} className=" border-b  ">
               <Link to={`/shop/product/${order.orderItems[0].productId}`}>
                <td className="px-6 py-4 font-medium">
                  <img src={order.orderItems[0].image.url} alt=""  className='md:h-[10rem] w-[9rem]'/>
<p className='pt-4'>
{order.orderItems[0].name}
</p>
                </td>
                </Link>
                <td className="px-6 py-4">
                  ${order.subtotal.toFixed(2)} 
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default OrderManagemnt