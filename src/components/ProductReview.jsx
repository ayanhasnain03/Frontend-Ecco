import { useParams } from "react-router-dom";
import { useGetReviewQuery } from "../redux/api/productApi";
import Ratings from "./Rating";

const ProductReview = () => {
  const {id}=useParams()
  const {data}=useGetReviewQuery({id})
  console.log(data?.reviews)
  return (
  <>
  {
    data?.reviews?.map((rev)=>(
      <div className="h-[11rem] w-[20rem] shadow-2xl shadow-white bg-red-400 flex flex-col items-center ml-8">


      <>
      <img src={rev.avatar.url} alt="" className="w-[4rem] h-[4rem] rounded-full mt-5" />
     <h2 className="text-xl">{rev.name}</h2>
     <Ratings value={rev.rating}/>
       <p>{rev.comment}</p>
      </>
   </div>
    ))
  }
  </>
  );
};
export default ProductReview;
