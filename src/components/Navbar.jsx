import { useState } from "react";
import {  FaHeart, FaShoppingBag, FaUserAlt } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";
import logo from "../assets/logo.png"
import { useSelector } from "react-redux";
const Navbar = ({user}) => {
 
  const [isOpen, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const {cartItems}=useSelector(state=>state.cartReducer)



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 3 }}
    >
      <nav className="flex justify-between items-center px-5 md:px-8 py-2  text-white z-[100]">
      <ul className="hidden md:flex gap-8">
          <li>
            <Link to="/" className="hover">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
        <img src={logo} className="w-[5rem] z-[100]" alt="" />
    
        <ul className="z-[1000]">
          <div className="flex items-center gap-3">
            <li className=" hidden md:block">
              {user?._id ? (
             <>
                <Link to="/profile">
                  <FaUserAlt />
                </Link>
             </>
              ) : (
                <Link to="/login">
                  <IoMdLogIn size={"1.3rem"} />
                </Link>
              )}
            </li>
            {
     user?._id && (
  <div className="relative">
    <div className="bg-[#F30000] h-4 w-4 rounded-full absolute -top-3 -right-2 text-center hidden md:block">
      {user.favourite.length}
    </div>
        <Link to="/favourite" className="hidden md:block">
        <FaHeart />
      </Link>
  </div>
     )   
       }
            <li className=" hidden md:block relative">
              <Link to="/cart">
                <div className="bg-[#F30000] h-4 w-4 rounded-full absolute -top-2 -right-2 text-center">
                 {cartItems.length}
                </div>
                <FaShoppingBag />
              </Link>
            </li>
            {user?.role === "admin" && (
              <li className=" hidden md:block">
                <Link to="/admin/dashboard">
                  <MdDashboard size={"1.2rem"} />
                </Link>
              </li>
            )}
          </div>
          <div className="md:hidden overflow-hidden ">
            <Hamburger
              duration={0.8}
              toggled={isOpen}
              toggle={setOpen}
              color="#E32636"
            />
          </div>
        </ul>

        <ul
          className={`${
            isOpen
              ? "text-black opacity-100 transform translate-x-0"
              : "opacity-0 transform -translate-y-full"
          } transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-row justify-around items-center text-2xl z-[100] `}
          onClick={() => setOpen(false)}
        >
          <section className="z-[1000] text-zinc-200">
            <div>
              <Link to="/">Home</Link>
            </div>
            <div className="my-5">
              <Link to="/shop" >Shop</Link>
            </div>
            <div>
            <Link to="/favourite">
            favourite
            </Link>
            </div>
        
          </section>
          <div className="z-100 text-zinc-200 flex flex-col  items-center gap-8">
            <Link to="/cart">
              <FaShoppingBag />
            </Link>
            {user?._id ? (
              <Link to="/profile">
                <FaUserAlt />
              </Link>
            ) : (
              <Link to="/login">
                <IoMdLogIn />
              </Link>
            )}
          
          
            <Link to="/admin/dashboard">
              <MdDashboard />
            </Link>
          </div>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Navbar;
