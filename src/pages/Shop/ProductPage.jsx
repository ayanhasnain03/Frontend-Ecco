import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import {
  useGetProductByIdQuery,
  useLatestProductQuery,
} from "../../redux/api/productApi";
import ScrollToTopOnReload from "../../components/ResetPage";

import Ratings from "../../components/Rating";
import ProductReview from "../../components/ProductReview";


const ProductPage = () => {
  const { id } = useParams();
  const { data } = useGetProductByIdQuery({ id });
  const { data: latestProducts } = useLatestProductQuery();

  const product = data?.product;
  console.log(product?.rating);
  const submitReviewToggle = () => {};
  return (
    <div className="">
      <ScrollToTopOnReload />
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
            <Ratings value={product?.rating} />
            <h1>Brand: {product?.brand}</h1>
            <h1>Reviews:{product?.numReviews}</h1>
            <h1>inStock:{product?.stock}</h1>
          </div>
          <button className="bg-red-600 w-[8rem] mt-10 ml-7 rounded-lg border">
            Add to Cart
          </button>
        </div>
      </div>
      <h1 className="text-center text-2xl">Latest Products</h1>
      <div className="flex flex-col md:flex-row flex-wrap justify-around mt-10 items-center md:items-start md:px-8 md:mr-6">
        {latestProducts?.products?.map((item, i) => (
          <Card products={item} />
        ))}
      </div>
<div className="bg-green-500 w-full h-[70vh]">
  <h1 className="text-3xl text-center">Reviews</h1>
  <div className="flex w-full flex-row mt-10 pr-12">
    <ProductReview productId={product?._id}/>
  </div>
</div>
    </div>
  );
};

export default ProductPage;
