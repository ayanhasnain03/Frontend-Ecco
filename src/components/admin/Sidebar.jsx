import { useState } from "react"
import { RiMenuUnfoldLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { TbShoppingBagEdit } from "react-icons/tb";
const Sidebar = () => {

  return (
<div className="h-[60rem] bg-black">
 
<div className=" md:block h-full bg-black w-[5rem] md:w-[10rem]">
    <div className="mt-8">
      <ul className="">
<div className="mt-4">
<li className="flex items-center justify-between flex-col">
<Link to="/admin/dashboard">
<RxDashboard size={"1.5rem"}/>
</Link>
<label className="sm:text-[0.9rem] md:text-[1rem]">Dashboard</label>
</li>
</div>


<div className="mt-4">
<li className="flex items-center justify-between flex-col">
<Link to="/admin/productmanage">
<TbShoppingBagEdit size={"1.5rem"}/>
</Link>
<label className="sm:text-[0.9rem] md:text-[1rem]">Management</label>
</li>
</div>
      </ul>
    </div>
    </div> 

</div>
)
}
export default Sidebar