import {useParams } from "react-router-dom";
import Card from "../../components/Card";
import { useGetProductByIdQuery } from "../../redux/api/productApi";

const ProductPage = () => {
  const {id}=useParams()
 const {data}=useGetProductByIdQuery({id})

 const product=data?.product
  const submitReviewToggle = () => {};
  return (
    <div className="">
      <div className="h-full w-full  mt-10 md:p-8 py-2 px-2 flex flex-col  md:flex-row  md:justify-between gap-9">
        <div className=" md:w-[40%] w-full mt-8 h-[35rem] md:h-[25rem] overflow-hidden flex items-center justify-center ">
          <img src={product?.image?.url} alt="" />
        </div>
        <div className=" md:w-[60%]  h-[35rem] overflow-hidden">
          <div className=" p-8 flex flex-col gap-4">
            <h1>Title : {product?.name}</h1>
            <p>Description : {product?.description}</p>
            <h1>Price : ₹{product?.price}</h1>
          </div>
          <div className=" px-8 mt-2  flex flex-col gap-2">
            <h1>Rating:5</h1>
            <h1>Brand: Nikon</h1>
            <h1>Reviews:4</h1>
            <h1>Quantity:4</h1>
            <h1>inStock:4</h1>
          </div>
          <button className="bg-red-600 w-[8rem] mt-10 ml-7 rounded-lg border">
            Add to Cart
          </button>
        </div>
      </div>
      <h1 className="text-center text-2xl">Related Products</h1>
      <div className="flex flex-col md:flex-row flex-wrap justify-around mt-10 items-center md:items-start">

      </div>
    </div>
  );
};

export default ProductPage;
