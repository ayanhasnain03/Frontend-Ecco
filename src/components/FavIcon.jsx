
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const FavIcon = () => {
    const [toggle, setToggle] = useState(false);
    const togleHeart = ()=>{
setToggle(!toggle)
    }
    
  return (
    <div
      className="cursor-pointer"
      onClick={togleHeart}
    >
      {toggle ? (
        <FaHeart className="text-pink-500" />
      ) : (
        <FaRegHeart className="text-white" />
      )}
    </div>
  );
};

export default FavIcon;
