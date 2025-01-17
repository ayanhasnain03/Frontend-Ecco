import model from "../assets/modelMen.png";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import Card from "../components/Card";
import Marquee from "../components/Marquee";
import { useGetTopProductsQuery } from "../redux/api/productApi";
import { useLastestProductQuery } from "../redux/api/productApi";
import ScrollToTopOnReload from "../components/ResetPage";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import toast from "react-hot-toast";
import MetaData from "../components/MetaData";
import Loader from "../components/Loader"
const Home = () => {
  const { data,isLoading } = useGetTopProductsQuery();
  const {data:latestproduct}=useLastestProductQuery()
  const dispatch = useDispatch()
  const addToCartHandler = (cartItem) => {
    if(cartItem.stock < 1) return toast.error("Out Of Stock");
    dispatch(addToCart(cartItem))
    toast.success("Added to cart")
  }
  return (
    <div className="h-full w-full">
      <MetaData title="Eccomerce"/>
      <div className="banner">
        <div className="h-[90vh] w-[100vw] bg-black  flex md:flex-row justify-between items-center relative px-8 md:px-2 md:mt-8">
          <motion.div
            initial={{ x: -600 }}
            animate={{ x: 10 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-[60%] lg:ml-40  flex flex-col"
          >
            <h1 className="lg:ml-[3rem] text-3xl">Welcome to</h1>
            <img
              src={logo}
              alt=""
              className="lg:ml-[8rem] w-[10rem] mt-2 mb-6"
            />
            <p className="lg:ml-[8rem]">Unlock Exclusive Savings: Shop Our Premium Deals Today!</p>
          </motion.div>
          <div className="w-[60%]">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.2 }}
              src={model}
              alt=""
              className=" md:w-full md:mt-8"
            />
          </div>
        </div>
      </div>
      <h1 className="m-8 text-2xl font-semibold">Popular Products</h1>
  {
    isLoading ? (<>
    <Loader length={5}/>
    </>):(
        <div className="mt-5  w-full flex items-center justify-center md:justify-around  flex-wrap gap-5 px-5 ">
        {data?.topProduct?.map((product, i) => (
          <Card products={product} key={i} handler={addToCartHandler} />
        ))}
      </div>
    )
  }

      <h1 className="m-8 text-2xl font-semibold">latest Products</h1>
  {
    isLoading ? (<Loader length={5}/>):(
      <div className="mt-5  w-full flex items-center justify-center px-5 md:justify-around  flex-wrap gap-5   ">
      {latestproduct?.products?.map((product, i) => (
        <Card products={product} key={i} />
      ))}
    </div>
    )
  }

      <div className="">
        <Marquee />
      </div>
    </div>
  );
};

export default Home;
