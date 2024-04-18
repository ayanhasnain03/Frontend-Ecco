import { useGetReviewQuery } from "../redux/api/productApi";

const ProductReview = ({productId}) => {
 const {data}=useGetReviewQuery({productId})
  return (
 <>
 {
  data && data?.reviews?.map((item=>(
    <div className="h-[15rem] w-[30rem] border flexc bg-red-400 flex flex-col items-center ml-8">
<div>

</div>
    </div>
  )))
 }
 </>
  );
};
export default ProductReview;
