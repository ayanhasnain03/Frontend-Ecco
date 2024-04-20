import { Link } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import { useAdminProductsQuery } from "../../redux/api/productApi";
import { FaTrash } from "react-icons/fa";

const ProductManagement = () => {
  const { data } = useAdminProductsQuery();

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
    <input type="text" placeholder="Search" className="rounded-xl px-2"/>
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
 </div>
    </div>
</div>
    </div>

  );
};
export default ProductManagement;
