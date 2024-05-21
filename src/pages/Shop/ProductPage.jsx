import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import {
  useGetProductByIdQuery,
  useRelatedProductQuery,
} from "../../redux/api/productApi";
import ScrollToTopOnReload from "../../components/ResetPage";

import Ratings from "../../components/Rating";
import ProductReview from "../../components/ProductReview";
import { useState } from "react";
import ReviewAddModal from "../../components/ReviewAddModal";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import toast from "react-hot-toast";
import MetaData from "../../components/MetaData";
import Loader from "../../components/Loader";

const ProductPage = () => {
  const [toggleReview, settoggleReview] = useState(false);
  const { id } = useParams();
  const { data,isLoading} = useGetProductByIdQuery({ id });
  const { data: relatedProducts } = useRelatedProductQuery({ id });
  const productsWithoutFirst = relatedProducts?.product.slice(1);
  const product = data?.product;
  const reviewToggle = () => {
    settoggleReview(!toggleReview);
  };
  const dispatch = useDispatch();
  const addToCartHandler = (cartItem) => {
    if (cartItem.stock < 1) return toast.error("Out Of Stock");
    dispatch(addToCart(cartItem));
    toast.success("Added to cart");
  };
  return (
    <div className="">
      <MetaData title="product page"/>
{
  isLoading ? (<Loader length={10}/>):(
    <>
          <ScrollToTopOnReload />
      <div className="h-full w-full  md:p-8 py-2 px-2 flex flex-col  md:flex-row  md:justify-between ">
        <div className=" md:w-[40%] w-full mt-2 h-[35rem]  overflow-hidden flex items-center justify-center ">
          <img src={product?.image?.url} alt="" className="w-full bg-cover" />
        </div>
        <div className=" md:w-[60%]  h-[35rem] overflow-hidden p-10">
          <div className="pl-8 flex flex-col gap-6">
            <h1>Title : {product?.name}</h1>
            <p>Description : {product?.description}</p>
            <h1>Price : ₹{product?.price}</h1>
          </div>
          <div className=" px-8 flex flex-col justify-start gap-6 mt-5">
            <Ratings value={product?.rating} />
            <h1>Brand: {product?.brand}</h1>
            <h1>Reviews:{product?.numReviews}</h1>
            <h1>inStock:{product?.stock}</h1>
          </div>
          <button
            onClick={() => addToCartHandler(product)}
            className="bg-red-600 w-[8rem] mt-10 ml-7 rounded-lg border"
          >
            Add to Cart
          </button>
        </div>
      </div>
      {productsWithoutFirst && (
        <>
          {productsWithoutFirst.length > 0 && (
            <h1 className="text-center text-2xl mt-5">Related Products({productsWithoutFirst.length})</h1>
          )}
          <div className="flex  flex-col md:flex-row flex-wrap md:justify-start justify-center gap-5 mt-10 items-center md:items-start md:px-10 md:ml-12">
            {productsWithoutFirst?.map((item) => (
              <Card products={item} key={item._id} handler={addToCartHandler} />
            ))}
          </div>
        </>
      )}
      <div className=" w-full  mt-10 relative">
        <div className="reletive">
          <h1 className="text-3xl text-center">Reviews({product?.numReviews})</h1>
       
        </div>
        <div className="float-end mr-8">
          <button
            onClick={reviewToggle}
            className="bg-red-600 w-[8rem]  mb-5 ml-7 rounded-lg border"
          >
            Add review
          </button>
        </div>
        {toggleReview ? (
          <div className="z-30 bg-black md:h-[50vh] md:w-[40vw] h-[50vh] w-[60vw] absolute left-[25%] md:left-[30%] top-[20%] right-[70%]">
            <ReviewAddModal
              reviewToggle={reviewToggle}
              productId={product?._id}
            />
          </div>
        ) : (
          <></>
        )}
        <div className="flex  w-full ">
          <ProductReview
            productRev={product?.reviews}
            productId={product?._id}
          />
        </div>
      </div>
    </>
  )
}
    </div>
  );
};

export default ProductPage;
