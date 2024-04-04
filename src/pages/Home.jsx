import banner from "../assets/banner.png"
import logo from "../assets/logo.png"
import {motion } from "framer-motion"
import Card from "../components/Card"
import Marquee from "../components/Marquee"
import { useGetTopProductsQuery } from "../redux/api/productApi"
const Home = () => {
  const {data}=useGetTopProductsQuery()
const products = [
  {
  "id": "fyf",
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "image": "https://m.media-amazon.com/images/I/61YCt73E3sL._AC_UL320_.jpg",
  "rating": {
  "rate": 3.9,
  "count": 120
  }
},
  {
  "id": "fy43",
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "image": "https://m.media-amazon.com/images/I/61UIHcgQUvL._AC_UL480_FMwebp_QL65_.jpg",
  "rating": {
  "rate": 3.9,
  "count": 120
  }
},
  {
  "id": "fy43sdf",
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "image": "https://m.media-amazon.com/images/I/61YCt73E3sL._AC_UL320_.jpg",
  "rating": {
  "rate": 3.9,
  "count": 120
  }
},



]

  return (
 <div className="h-full w-full">
      <div className="banner">
     <div className="h-[90vh] w-[100vw] bg-black  flex md:flex-row justify-between items-center relative ">
<motion.div  initial={{ x: -600 }} animate={{x:10}}
  transition={{ delay: 0.3,duration:0.5 }} className="w-[60%] lg:ml-40  flex flex-col">
 <h1 className="lg:ml-[3rem] text-3xl">Welcome to</h1>
<img src={logo} alt="" className="lg:ml-[8rem] w-[10rem] mt-2 mb-6" />
 <p className="lg:ml-[8rem]">India's Best Coustom Cloth Seller</p>
</motion.div>
<div className="w-[60%]">
    <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,duration:0.2}} src={banner} alt="" className=" w-full md:w-[60%]" />
</div>
    </div>
   </div>
   <h1 className="m-8 text-2xl font-semibold">Popular Products</h1>
<div className="mt-5  w-full flex items-center justify-center md:justify-around flex-wrap gap-10 ">
{
  data?.topProduct?.map((product,i)=>(
    <Card products={product}/>
  ))
}
</div>

<div className="">
  <Marquee/>
</div>
 </div>
  )
}

export default Home