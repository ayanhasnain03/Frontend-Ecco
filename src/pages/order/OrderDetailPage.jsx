import {useParams} from "react-router-dom"
import { useOrderDetailsQuery } from "../../redux/api/orderApi"
const OrderDetailPage = () => {
    const {id} = useParams()
const {data}=useOrderDetailsQuery(id)

  return (
    <div className="flex px-5 md:flex-row flex-col">
        <div className=" md:w-[20%] mt-8  px-2 border border-red-600" >
        <img src={data?.orders?.orderItems[0].image.url} alt="" className="h-[12rem] w-[12rem] m-12 " />  
        <h2 className="mt-6 font-semibold space-x-4">Name:{data?.orders?.orderItems[0].name}</h2>  
        <h2 className="mt-1 font-semibold space-x-4">Price:{data?.orders?.orderItems[0].price}</h2>  
        <h2 className="mt-1 font-semibold space-x-4">Quantity:{data?.orders?.orderItems[0].quantity}</h2>  
        <h2 className="mt-1 font-semibold space-x-4">productId:{data?.orders?.orderItems[0].productId}</h2>  
        </div>
        <div className=" h-[32rem] w-full mt-8 md:w-[80%] border border-red-600 mr-10 ">
<div className="shipping info m-8">
<div>
    <h1 className="text-xl font-semibold mb-2">Shipping Info</h1>
</div>
<h3 className=" text-sm">Address: {data?.orders?.shippingInfo.address}</h3>
<h3 className=" text-sm">city: {data?.orders?.shippingInfo.city}</h3>
<h3 className=" text-sm">state: {data?.orders?.shippingInfo.state}</h3>
<h3 className=" text-sm">country: {data?.orders?.shippingInfo.country}</h3>
<h3 className=" text-sm">pinCode: {data?.orders?.shippingInfo.pinCode}</h3>
</div>

<div className="contact m-8">
<div>
    <h1 className="text-xl font-semibold mb-2">User Info</h1>
</div>
<h3 className=" text-sm">Name: {data?.orders?.user.name}</h3>
<h3 className=" text-sm">Email: {data?.orders?.user.email}</h3>
<h3 className=" text-sm">userId: {data?.orders?.user.userId}</h3>
</div>
<div className="pricing mx-8 ">
<div>
    <h1 className="text-xl font-semibold mb-2">purchase Info</h1>
</div>

<h3 className=" text-sm">Product Price: {data?.orders?.orderItems[0].price}</h3>
<h3 className=" text-sm">ShippingCharge: {data?.orders?.shippingCharges}</h3>
<h3 className=" text-sm">Tax: {data?.orders?.tax}</h3>
<h3 className=" text-sm">Discount: {data?.orders?.discount}</h3>
<h3 className=" text-sm">Total: {data?.orders?.total}</h3>
<h3 className=" text-sm">Status: {data?.orders?.status}</h3>
<h3 className=" text-sm">CreatedAt: {data?.orders?.createdAt}</h3>
</div>

        </div>
    </div>
  )
}
export default OrderDetailPage