import { FaRegEye } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Fav = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="" >

<div>
        <h1 className="text-3xl m-8">Favourite Products</h1>

{
    user?.favourite.length !== 0 ? (<>
    <div className="flex flex-row items-center gap-2  flex-wrap justify-center md:justify-start">
{
    user?.favourite.map((item)=>(
        <div className="mt-10 md:ml-4 h-[12rem] bg-black w-[15rem] flex flex-col items-center justify-center border border-red-600">

<img src={item.productImage} className="h-[11.5rem] w-[15rem] bg-cover px-2 mt-4 " alt="" />
<div className="">

<Link to={`/shop/product/${item.product}`}>
<FaRegEye />
</Link>
</div>
</div>
    ))
}

    </div>
    </>):(
        <h1>Nai hai</h1>
    )
}
</div>
    </div>
  )
}
export default Fav