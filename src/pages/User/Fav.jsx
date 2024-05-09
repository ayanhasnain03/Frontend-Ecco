import { FaRegEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useRemoveToFavMutation } from "../../redux/api/userProfileApi";
import { loadUser } from "../../redux/action/userAction";
import {toast} from "react-hot-toast"
import MetaData from "../../components/MetaData";
const Fav = () => {
  const { user } = useSelector((state) => state.user);
const dispatch = useDispatch()
  const [removeFromFav]=useRemoveToFavMutation()
const removeFavHandler = async(id)=>{
const res = await removeFromFav({id}).unwrap()
dispatch(loadUser())
toast.success(res?.message)

}
  return (
    <div className="" >
      <MetaData title="favourite"/>

<div>
        <h1 className="text-3xl m-8">Favourite Products ({user?.favourite.length})</h1>

{
    user?.favourite.length !== 0 ? (<>
    <div className="flex flex-row items-center gap-2  flex-wrap justify-center md:justify-start">
{
    user?.favourite.map((item)=>(
        <div key={item.product} className="mt-10 md:ml-4 h-[30rem] bg-black w-[30rem] flex flex-col items-center justify-center border border-red-600">

<Link to={`/shop/product/${item.product}`}>
<img src={item.productImage} className=" h-[20rem] bg-cover px-2 mt-4 " alt="" />
</Link>
<div className="mt-8">


<button onClick={()=>removeFavHandler(item.product)}>Remove</button>
</div>
</div>
    ))
}

    </div>
    </>):(
        <></>
    )
}
</div>
    </div>
  )
}
export default Fav