import { Rating } from "@mui/material";
import { useState } from "react";
import { styled } from '@mui/system';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useCreateReviewMutation } from "../redux/api/productApi";
import {useParams} from "react-router-dom"
import toast from "react-hot-toast";
const ReviewAddModal = ({ reviewToggle,productId }) => {

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconEmpty': {
      color: '#f30000e7', // Change to the color you desire
    },
  });
  
  const [createReview,{isLoading}]=useCreateReviewMutation()
  const reviewSubmitHandler = async(e)=>{
    e.preventDefault()
 try {
  const res = await createReview({comment,rating,id:productId}).unwrap()
  reviewToggle()
toast.success(res?.message)
 } catch (error) {
toast.error(error?.data?.message)
 }
  }
  return (
    <div className="relative flex items-center h-full">
      <button className="absolute top-5 right-8" onClick={reviewToggle}>
        X
      </button>

      <div className="w-full flex flex-col items-center ">
        <>
          <div className="flex  flex-1 flex-col justify-center w-full px-6  lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className=" text-center text-2xl font-bold tracking-tight text-[#F30000]">
                review
              </h2>
            </div>

            <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="mt-8" onSubmit={reviewSubmitHandler}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6"
                  ></label>
                  <div className="mt-1">
                  <StyledRating
      name="custom-rating"
value={rating}
onChange={e=>setRating(e.target.value)}
      emptyIcon={<StarBorderIcon fontSize="inherit" />}
    />
                  </div>
                </div>

                <div>
                  <div className="mt-5 ">
                  
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comment</label>
<textarea
value={comment}
onChange={(e)=>setComment(e.target.value)}
id="message" rows="4" className="block resize-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-[10rem] justify-center rounded-md bg-[#F30000]  py-1.5 text-sm mt-8  font-semibold leading-6 text-white shadow-sm hover:bg-[#f30000e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
{
  isLoading ? (<> submiting...</>) : (<>Submit</>)
}                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default ReviewAddModal;
