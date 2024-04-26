
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const FavIcon = ({favHandler,productId}) => {
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
<button onClick={favHandler(productId)}>
<FaHeart className="text-pink-500" />

</button>
) : (
        <FaRegHeart className="text-white" />
      )}
    </div>
  );
};

export default FavIcon;