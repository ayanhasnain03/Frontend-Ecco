import Sidebar from "../../components/admin/Sidebar";
import { useState } from "react";
import { useNewProductMutation } from "../../redux/api/productApi";
import {toast} from "react-hot-toast"

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");  
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [image, setImage] = useState();
  const changeImageHandler = (e) => {
    const file= e.target.files?.[0];

    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImagePrev(reader.result);
          setImage(file);
        }
      };
    }

  };
const [createProduct]=useNewProductMutation()
  const submitHandler = async(e)=>{
e.preventDefault()
const formData = new FormData()
formData.append("name",title)
formData.append("description",description)
formData.append("brand",brand)
formData.append("category",category)
formData.append("price",price)
formData.append("stock",stock)
formData.append("file",image)
const res = await createProduct(formData)
toast.success(res?.data?.message)
  }
  return (
    <div className="h-full flex w-full  bg-black ">
      <Sidebar />
      <div className="h-[40rem] relative w-full bg-black flex flex-col md:flex-row md:justify-around items-center">
      <div className="absolute top-8 left-5">
    <h1 className="text-2xl">Create Product</h1>
</div>
        <div className="w-[20%] overflow-hidden mt-[10rem] md:mt-[1rem]">
        {imagePrev && <img src={imagePrev} alt="New Image" />}
        </div>


       <form className="md:w-[30rem]" onSubmit={submitHandler} >
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
                onChange={(e)=>setTitle(e.target.value)}
                name="title"
                type="text"
                required
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
                onChange={(e)=>setDescription(e.target.value)}
                type="text"
                required
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
                onChange={e=>setPrice(e.target.value)}
                type="number"
                required
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
                onChange={e=>setBrand(e.target.value)}
                type="text"
                required
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
                onChange={e=>setCategory(e.target.value)}
                type="text"
                required
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
                onChange={e=>setStock(e.target.value)}
                type="number"
                required
                className="block w-full  md:py-1.5 py-1rem text-black  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

       
          <div className="mt-4">
              <label>Image</label>
              <input
                  accept="image/*"
                  id="password"
                  name="password"
                  type="file"
                  autoComplete="current-password"
                  placeholder="choose avatar"
                  required
                  onChange={changeImageHandler}
                  className="block w-full  py-1.5 text-black  sm:text-sm sm:leading-6"
                />
            </div>
<div className="mt-4 bg-red-600 w-[5rem] text-center rounded">
<button type="submit">Create</button>
  </div>    
       </form>
      </div>
    </div>
  );
};
export default CreateProduct;
