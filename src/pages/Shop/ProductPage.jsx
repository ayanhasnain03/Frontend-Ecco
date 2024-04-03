import Card from "../../components/Card";

const ProductPage = () => {
  const product = {
    id: "lfdsd",
    title: "Fjallraven - Foldsack",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image:
      "https://m.media-amazon.com/images/I/61UIHcgQUvL._AC_UL480_FMwebp_QL65_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };
  const submitReviewToggle = () => {};
  return (
    <div className="">
      <div className="h-full w-full  mt-10 md:p-8 py-2 px-2 flex flex-col  md:flex-row  md:justify-between gap-9">
        <div className=" md:w-[40%] w-full mt-8 h-[35rem] md:h-[25rem] overflow-hidden flex items-center justify-center ">
          <img src={product.image} alt="" />
        </div>
        <div className=" md:w-[60%]  h-[35rem] overflow-hidden">
          <div className=" p-8 flex flex-col gap-4">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h1>{product.price}</h1>
          </div>
          <div className=" px-8 mt-2  flex flex-col gap-2">
            <h1>Rating:5</h1>

            <h1>Brand: Nikon</h1>
            <h1>Reviews:4</h1>
            <h1>Quantity:4</h1>
            <h1>inStock:4</h1>
          </div>
          <button className="bg-red-600 w-[8rem] mt-10 ml-7 rounded-lg border">
            Add to Cart
          </button>
        </div>
      </div>
      <h1 className="text-center text-2xl">Related Products</h1>
      <div className="flex flex-col md:flex-row flex-wrap justify-around mt-10 items-center md:items-start">
        <Card products={product} />
        <Card products={product} />
        <Card products={product} />
        <Card products={product} />
      </div>
    </div>
  );
};

export default ProductPage;
