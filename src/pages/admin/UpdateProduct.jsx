import Sidebar from "../../components/admin/Sidebar";
import { useEffect, useState } from "react";
import {
  useGetProductByIdQuery,
  useUpdateProductImageMutation,
  useUpdateProductMutation,
} from "../../redux/api/productApi";

import { useNavigate, useParams } from "react-router-dom";
import {toast} from "react-hot-toast"
import Loader from "../../components/Loader";
const UpdateProduct = () => {
  const { id } = useParams();
  const { data } = useGetProductByIdQuery({ id });
  
  const {
    name: productName,
    description: productDescription,
    brand: productBrand,
    category: productCategory,
    stock: productStock,
    price: productPrice,
    image: productImage,
  } = data?.product || {
    name: "",
    description: "",
    brand: "",
    category: "",
    price: 0,
    stock: 0,
    image: "",
  };
  const [updateProduct] = useUpdateProductMutation();

  const [title, setTitle] = useState(productName);
  const [description, setDescription] = useState(productDescription);
  const [category, setCategory] = useState(productBrand);
  const [brand, setBrand] = useState(productCategory);
  const [price, setPrice] = useState(productPrice);
  const [stock, setStock] = useState(productStock);
  const [imgPrev, setImgPrev] = useState('');
  const [image, setImage] = useState(null);
const navigate = useNavigate()
  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImgPrev(reader.result);
      setImage(file);
    };
  };

  const [updateImage,{isLoading:imageLoading}]=useUpdateProductImageMutation();

  const submitHandler = async (e) => {

  e.preventDefault();
  const res = await updateProduct({
    id,
    name: title,
    description: description,
    brand: brand,
    category: category,
    price: price,
    stock: stock,
  }).unwrap();
    toast.success(res?.message)
 
    const  formData = new FormData()
    formData.append("file",image)

    const imageChange = await updateImage({id,formData}).unwrap() 
    navigate("/admin/productmanagement")
 toast.success(imageChange?.message)
  };

  useEffect(() => {
    if (data) {
      setTitle(data.product.name);
      setDescription(data.product.description);
      setBrand(data.product.brand);
      setPrice(data.product.price);
      setCategory(data.product.category);
      setStock(data.product.stock);
    }
  }, [data]);

  return (
    <div className="h-full flex w-full  bg-black ">
      <Sidebar />
      <div className="h-[40rem] relative w-full bg-black flex flex-col md:flex-row md:justify-around items-center">
        <div className="absolute top-8 left-5">
          <h1 className="text-2xl">Update Product</h1>
        </div>
        <div className="w-[20%] overflow-hidden mt-[10rem] md:mt-[1rem]">
{
  imageLoading ? 
 <>
 <Loader length={10}/>
 </>:(
   imgPrev ? (
    <img src={imgPrev} alt="" />
  ):(
    <img src={productImage.url} alt="" />
  )
 )
}
        </div>

        <form className="md:w-[30rem]" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6"
            >
              Title
            </label>
            <div className="mt-2">
              <input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                type="text"
                className="block w-full  md:py-1.5 py-1rem text-black  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-6"
            >
              Description
            </label>
            <div className="mt-2">
              <input
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="block w-full  md:py-1.5 py-1rem text-black  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="Price"
              className="block text-sm font-medium leading-6"
            >
              Price
            </label>
            <div className="mt-2">
              <input
                id="price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                className="block w-full  md:py-1.5 py-1rem text-black  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="Price"
              className="block text-sm font-medium leading-6"
            >
              Brand
            </label>
            <div className="mt-2">
              <input
                id="price"
                name="price"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                type="text"
                className="block w-full  md:py-1.5 py-1rem text-black  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="Price"
              className="block text-sm font-medium leading-6"
            >
              Category
            </label>
            <div className="mt-2">
              <input
                id="price"
                name="price"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                className="block w-full  md:py-1.5 py-1rem text-black  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="Stock"
              className="block text-sm font-medium leading-6"
            >
              Stock
            </label>
            <div className="mt-2">
              <input
                id="price"
                name="price"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                type="number"
                className="block w-full  md:py-1.5 py-1rem text-black  sm:text-sm sm:leading-6"
              />
            </div>

            <div className="mt-1">
              <input
                className="flex w-[12rem] justify-center rounded-md bg-[#000000]  py-1.5 text-sm mt-8  font-semibold leading-6 text-white shadow-sm hover:bg-[#110f0fe7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                accept="image/*"
                type="file"
                autoComplete="current-password"
                placeholder="choose avatar"
              
                onChange={changeImageHandler}
              />
            </div>
          </div>

          <div className="mt-4 bg-red-600 w-[5rem] text-center rounded">
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UpdateProduct;
