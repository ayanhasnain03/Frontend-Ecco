import { Link } from "react-router-dom";


const Card = ({ products,handler }) => {
  return (
    <>
      <div className="card  h-[28rem] w-[25rem] overflow-hidden p-2 relative hover:-translate-y-4 duration-150">
    <Link to={`/shop/product/${products?._id}`}>
    <div className="overflow-hidden">
          <img
            src={products?.image?.url}
            className="h-[15rem] w-full object-cover"
            alt="wew"
          />
        </div>
        <div className="title mt-4">
          <div>
            <h1>{products?.name}</h1>
          </div>
          <div>
            {" "}
            <h1 className="mb-2">{products?.brand}</h1>
            <p className="mb-4">
             {products?.description}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="mb-2">{products?.price}</h1>
            <p>*****</p>
          </div>
        </div>
    </Link>
        <div className="flex justify-between items-center">
          <button onClick={()=>handler(products)} className="bg-red-600 w-[8rem] rounded-lg border">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
