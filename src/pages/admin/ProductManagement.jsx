import { Link } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import { useAdminProductsQuery } from "../../redux/api/productApi";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

const ProductManagement = () => {
const [search, setSearch] = useState("")
const [page, setPage] = useState(1);
const { data } = useAdminProductsQuery({search,page});
const isPrevPage = page > 1;
const isNextPage = page < data?.totalPage;
  return (
    <div className=" flex w-full relative">
      <div className="absolute z-20">
        <Sidebar />
      </div>
    <div className=" h-full w-full">

<div className="head w-full flex md:flex-row flex-col justify-between items-center m-8 md:px-10">
<h1 className="text-3xl mb-8 mr-10">Product Management</h1>
<h1 className="text-3xl mb-8 mr-10">Total Product:{data?.products.length}</h1>
<div className="mr-10">
    <input type="text"
    value={search}
    onChange={e=>setSearch(e.target.value)}
    placeholder="Search" className="rounded-xl px-2 text-black border-none"/>
</div>
</div>
<div className="mt-2 w-full">
    
 <div className="h-full w-full">
 {
    data?.products?.map((item)=>(
        <div key={item._id} className=" flex md:flex-row flex-col items-center justify-around w-full mb-[3rem] gap-[0.7rem]">
        <div>
             <img src={item.image.url} alt="" className="h-[10rem] w-[8rem]" />
         </div>
         <div>
             Name: {item.name}
         </div>
         <div>
             Price: ₹{item.price}
         </div>

         <div>
             description : {item.description}
         </div>
     
         <div>
             stock : {item.stock}
         </div>
     
         <div>
             <Link to="/updateproduct">

<button className="bg-red-600  text-center rounded px-2">
Update Product

</button>
             </Link>
         </div>
         <div>
            <button>
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
    </div>
</div>
    </div>

  );
};
export default ProductManagement;
