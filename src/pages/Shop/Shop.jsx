import React, { useState } from "react";
import Card from "../../components/Card";

const Shop = () => {
  const [page, setPage] = useState(1);
  const products = [
    {
      id: "fyf",
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://m.media-amazon.com/images/I/61YCt73E3sL._AC_UL320_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: "fy43",
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://m.media-amazon.com/images/I/61YCt73E3sL._AC_UL320_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: "fy43sdf",
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://m.media-amazon.com/images/I/61YCt73E3sL._AC_UL320_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ];
  const searchedData = { totalPage: 4 };

  const isPrevPage = page > 1;
  const isNextPage = page < 4;
  return (
    <>
      <div className="flex md:flex-row flex-col mt-20 justify-around">
        <div className="flex md:h-[35rem]  h-[25rem] w-[25rem] flex-col md:w-[15rem] bg-black md:m-5 px-5">
          <h5 className="text-2xl font-extralight">Fillters</h5>

          <div className="price flex flex-col gap-2 mt-8">
            <label htmlFor="sorting">Sorting</label>

            <select className="text-black w-[10rem] p-1.5">
              <option value="">None</option>
              <option value="">Price low to high</option>
              <option value="">High to Low</option>
            </select>
          </div>

          <div className="sorting flex flex-col gap-2 mt-8">
            <label htmlFor="sorting">Sorting</label>
            <div>
              <div class="relative mb-6">
                <div>
                  <label htmlFor="labels-range-input" className="sr-only">
                    Labels range
                  </label>
                  <input
                    id="labels-range-input"
                    type="range"
                    defaultValue={1000}
                    min={100}
                    max={1500}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                    Min ($100)
                  </span>
                  <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
                    Max ($1500)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="category flex flex-col gap-2 mt-8">
            <label htmlFor="sorting">Category</label>

            <select className="text-black w-[10rem] p-1.5">
              <option value="">All</option>
              <option value="">H&M</option>
              <option value="">GUCCI</option>
            </select>
          </div>
        </div>

        <div className="w-[80rem]  mt-[1rem] mr-[4rem]  overflow-hidden">
          <div className="search mb-10 mt-6">
            <input
              type="text"
              placeholder="search"
              className="w-[20rem] mx-8 md:w-[80rem] p-1.5 text-black"
            />
          </div>
          <div className="flex  md:flex-row flex-wrap md:items-center ml-[5rem] justify-center gap-5  flex-col">
            {products.map((product, i) => (
              <Card products={product} />
            ))}
          </div>
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
};

export default Shop;
