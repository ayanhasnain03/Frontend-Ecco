import { Link } from "react-router-dom";
import Ratings from "./Rating";
import FavIcon from "./FavIcon";
import { CiBookmarkPlus } from "react-icons/ci";
import { useAddToFavMutation } from "../redux/api/userProfileApi";
import { useDispatch } from "react-redux";
import { loadUser } from "../redux/action/userAction";
import toast from "react-hot-toast";
const Card = ({ products, handler }) => {
  const [addToFav]=useAddToFavMutation()
const dispatch = useDispatch()
  const addToFavHandler = async(id)=>{
try {
  const res = await addToFav({id}).unwrap()
dispatch(loadUser())
toast.success(res?.message)
} catch (error) {
toast.error(error?.data.message)
}
  }
  return (
    <>
      <div className="card  h-[28rem] w-[18rem] overflow-hidden p-2 relative hover:-translate-y-4 duration-150">
      <div className="absolute right-5 top-3 z-40">
<button onClick={()=>addToFavHandler(products._id)}>
<CiBookmarkPlus style={{fontSize:"2rem",color:"red"}}/>

</button>
</div>
        <Link to={`/shop/product/${products?._id}`}>
          <div className="overflow-hidden">
            <img
              src={products?.image?.url}
              className="h-[15rem] w-full object-cover"
              alt="wew"
            />
          </div>
          <div className="title mt-4">
            <div>
              <h1>{products?.name}</h1>
            </div>
            <div>
              {" "}
              <h1 className="mb-2">{products?.brand}</h1>
              <p className="mb-4">{products?.description?.substring(0,30)}...</p>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="mb-2">₹{products?.price}</h1>
              <Ratings value={products?.rating} />{" "}
            </div>
          </div>
        </Link>
        <div className="flex justify-between items-center">
          <button
            onClick={() => handler(products)}
            className="bg-red-600 w-[8rem] rounded-lg border"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
