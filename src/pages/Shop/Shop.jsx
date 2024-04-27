import React, { useState } from "react";
import Card from "../../components/Card";
import { useGetAllCategoriesQuery, useSearchProductsQuery } from "../../redux/api/productApi";
import Loader from "../../components/Loader";
import ScrollToTopOnReload from "../../components/ResetPage";
import { addToCart } from "../../redux/slices/cartSlice";
import toast from "react-hot-toast"
import { useDispatch } from "react-redux";
const Shop = () => {
  const dispatch = useDispatch()
  const addToCartHandler = (cartItem) => {
    if(cartItem.stock < 1) return toast.error("Out Of Stock");
    dispatch(addToCart(cartItem))
    toast.success("Added to cart")
  }
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [page, setPage] = useState(1);
  const { isLoading: productLoading, data: searchedData } =
    useSearchProductsQuery({ search,
      sort,
      category,
      page,
      price: maxPrice,
    brand
    });

const {data:productCategory}=useGetAllCategoriesQuery()



  const isPrevPage = page > 1;
  const isNextPage = page < searchedData?.totalPage;
  return (
<>

      <div className="flex md:flex-row flex-col mt-20 justify-around">
    <ScrollToTopOnReload/>

        <div className="flex md:h-[35rem]  h-[25rem] w-[25rem] flex-col md:w-[15rem] bg-black md:m-5 px-5">
          <h5 className="text-2xl font-extralight">Fillters</h5>

          <div className="price flex flex-col gap-2 mt-8">
            <label htmlFor="sorting">Sorting</label>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-black w-[10rem] p-1.5"
            >
              <option value="">None</option>
              <option value="asc">Price low to high</option>
              <option value="dsc">High to Low</option>
            </select>
          </div>

          <div className="sorting flex flex-col gap-2 mt-8">
            <label htmlFor="sorting">Sorting</label>
            <div>
              <div class="relative mb-6">
                <div>
                  <label htmlFor="labels-range-input" className="sr-only">
                    Max Price: {maxPrice || ""}
                  </label>
                  <input
                    id="labels-range-input"
                    type="range"
                    min={100}
                    max={10000}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                    Min (₹100)
                  </span>
                  <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
                    Max (₹10000)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="category flex flex-col gap-2 mt-8">
            <label htmlFor="sorting">Category</label>

            <select   value={category}
            onChange={(e) => setCategory(e.target.value)} className="text-black w-[10rem] p-1.5">
              <option value="">All</option>
              {
              productCategory?.categories.map((cat)=>(
              <option value={cat} key={cat}>{cat.toUpperCase()}</option>
              ))
              }
            </select>
          </div>

          <div className="category flex flex-col gap-2 mt-8">
            <label htmlFor="sorting">Brand</label>

            <select   value={brand}
            onChange={(e) => setBrand(e.target.value)} className="text-black w-[10rem] p-1.5">
              <option value="">All</option>
              {
              searchedData?.products.map((product)=>(
              <option value={product.brand}>{product.brand.toUpperCase()}</option>
              ))
              }
            </select>
          </div>
        </div>

        <div className=" mt-[3rem] md:mt-[1rem] mr-[4rem] w-[90%] ">
          <div className="search mb-10 mt-6 ml-6 ">
            <input
              type="text"
              placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl outline-none md:w-[80rem] p-1.5 text-black"
            />
          </div>
      {
        productLoading ? (<Loader length={5}/>):(
          <div className="flex  md:flex-row flex-wrap md:items-center  justify-center gap-5 ml-6 flex-col">
            {searchedData &&
              searchedData.products.map((e, i) => (
                <Card products={e} key={i}
                handler={addToCartHandler}
                />
              ))}
          </div>
        )
      }
        </div>
      </div>
      <div className="md:ml-[10rem] ml-[5.5rem] mt-2">
        {searchedData && searchedData.totalPage > 1 && (
          <article>
            <button
              disabled={!isPrevPage}
              onClick={() => setPage((prev) => prev - 1)}
              className="bg-[#F30000] w-20 rounded-md"
            >
              Prev
            </button>
            <span className="m-4">
              {page} of {searchedData.totalPage}
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
</>
  );
}


export default Shop;
