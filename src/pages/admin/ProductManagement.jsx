import { Link } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import { useAdminProductsQuery, useDeleteProductMutation } from "../../redux/api/productApi";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import {toast} from "react-hot-toast"
import MetaData from "../../components/MetaData";
const ProductManagement = () => {
const [search, setSearch] = useState("")
const [page, setPage] = useState(1);
const { data,isLoading } = useAdminProductsQuery({search,page});

const [deleteProduct,{isLoading:deleteLoading}]=useDeleteProductMutation()
const deleteHandler = async(id)=>{
const res = await deleteProduct({id}).unwrap()
toast.success(res?.message)
}


const isPrevPage = page > 1;
const isNextPage = page < data?.totalPage;
  return (
    <div className=" flex w-full relative">
      <MetaData title="Product Management"/>
      <div className="absolute z-20">
        <Sidebar />
      </div>
    <div className=" h-full w-full">

<div className="head w-full flex md:flex-row flex-col justify-between items-center m-8 md:px-10">
<h1 className="text-3xl mb-8 mr-10">Product Management</h1>
<h1 className="text-3xl mb-8 mr-10">Products:{data?.products.length}</h1>
<div className="mr-10">
    <input type="text"
    value={search}
    onChange={e=>setSearch(e.target.value)}
    placeholder="Search" className="rounded-xl px-2 text-black border-none"/>
</div>
<Link to="/admin/createproduct">
<button className="mr-10">Add</button>
</Link>

</div>
<div className="mt-2 w-full">
    
 {
  deleteLoading ? <Loader length={20}/> : (
    <div className="h-full w-full">
 {
    data?.products?.map((item)=>(
        <div key={item._id} className=" flex md:flex-row flex-col items-center justify-around w-full mb-[3rem] gap-[0.7rem]">
        <div>
           {
            isLoading ? (<>
            <Loader length={10}/>
            </>):(
<Link to={`/shop/product/${item._id}`}>
<img src={item.image.url} alt="" className="h-[10rem] w-[8rem]" />

</Link>
)
           }
         </div>
         <div>
             Name: {item.name.substring(0,10)}...
         </div>
         <div>
             Price: ₹{item.price}
         </div>

         <div>
             description : {item.description.substring(0,15)}...
         </div>
     
         <div>
             stock : {item.stock}
         </div>
     
         <div>
             <Link to={`/admin/updateproduct/${item._id}`}>

<button className="bg-red-600  text-center rounded px-2">
Update Product

</button>
             </Link>
         </div>
         <div>
            <button onClick={()=>deleteHandler(item._id)}>
            <FaTrash />
            </button>
         </div>
        </div>
    ))
  }

<div className="md:ml-[10rem] ml-[5.5rem] mt-2">
{data && data.totalPage > 1 && (
          <article>
            <button
              disabled={!isPrevPage}
              onClick={() => setPage((prev) => prev - 1)}
              className="bg-[#F30000] w-20 rounded-md"

            >
              Prev
            </button>
            <span className="mx-8">
              {page} of {data.totalPage}
            </span>
            <button
              disabled={!isNextPage}
              onClick={() => setPage((prev) => prev + 1)}
              className="bg-[#F30000] w-20 rounded-md"

            >
              Next
            </button>
          </article>
        )}
      </div>
 </div>
  )
 }
    </div>
</div>
    </div>

  );
};
export default ProductManagement;
