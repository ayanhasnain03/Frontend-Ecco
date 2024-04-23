import { useSelector } from "react-redux";
import {
  useDeleteReviewMutation,
  useGetReviewQuery,
} from "../redux/api/productApi";
import Ratings from "./Rating";
import toast from "react-hot-toast";

const ProductReview = ({ productRev, productId }) => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const [deleteReview] = useDeleteReviewMutation();
  const deleteHandler = async () => {
    try {
      const res = await deleteReview({ id: productId }).unwrap();
      toast.success(res.message);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div>
   {
    productRev.length === 0 ? (<h1 className="text-4xl">No Reviews</h1>):(
      <div>
      {productRev?.map((rev) => (
       <div
         key={rev._id}
         className="h-[11rem] w-[20rem] shadow-2xl shadow-white flex flex-col items-center ml-8 relative "
       >
         <>
           {/* Check if the logged-in user is the owner of the comment */}
           {isAuthenticated && user._id === rev.user && (
             <div className="absolute top-3 right-6">
               <button onClick={deleteHandler}>X</button>
             </div>
           )}
           <img
             src={rev.avatar.url}
             alt=""
             className="w-[4rem] h-[4rem] rounded-full mt-5"
           />
           <h2 className="text-xl">{rev.name}</h2>
           <Ratings value={rev.rating} />
           <p>{rev.comment}</p>
         </>
       </div>
     ))}
    </div>
    )
   }
    </div>
  );
};

export default ProductReview;
