import { useState } from "react";
import profilePng from "../../assets/Profile.png"
import { useUpdateProfilePictureMutation } from "../../redux/api/userProfileApi";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/action/userAction";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const UpdatePictureModal = ({profileModal}) => {
const {user}=useSelector(state=>state.user)

    const [imagePrev, setImagePrev] = useState(user?.avatar.url);
    const [image, setImage] = useState("");
const navigate = useNavigate()
    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setImagePrev(reader.result);
          setImage(file);
        };
      };
      const [updateProfilePicture,{isLoading}]=useUpdateProfilePictureMutation()
 const dispatch = useDispatch()

      const submitHandler = async(e)=>{
    e.preventDefault()
    const myForm = new FormData()
    myForm.append("file",image)
    const res = await updateProfilePicture(myForm)
    dispatch(loadUser())
toast.success(res?.data?.message)
  }
  return (
    <div className="relative flex items-center h-full w-full ">
<button className="absolute top-5 right-8 z-30" onClick={profileModal}>X</button>

<form onSubmit={submitHandler} className="relative flex items-center h-full w-full ">
<div className="w-full flex flex-col items-center ">
<div>
{
    imagePrev ? <>
<div className="rounded-full h-[12rem] w-[12rem] object-fill overflow-hidden">
   <img src={imagePrev} alt=""   />
    </div>    
    
    </>:(
   <div className="rounded-full h-[12rem] w-[12rem] object-fill overflow-hidden">
   <img src={profilePng} alt=""   />
    </div> 

    )
}
</div>
<div>
<div className=" flex flex-col items-center justify-center">
              <div className="mt-1">
                <input
                className="flex w-[12rem] justify-center rounded-md bg-[#000000]  py-1.5 text-sm mt-8  font-semibold leading-6 text-white shadow-sm hover:bg-[#110f0fe7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  accept="image/*"
                  type="file"
                  autoComplete="current-password"
                  placeholder="choose avatar"
                  required
                  onChange={changeImageHandler}
                />
              </div>
             
              <div>
        {
          isLoading ? (
            <>
              <button  type="submit"  className="flex w-[10rem]  
        justify-center rounded-md bg-[#F30000]  py-1.5 text-sm mt-8  font-semibold leading-6 text-white shadow-sm hover:bg-[#f30000e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            loading...
          </button>
            </>
          ):(
            <button   type="submit"  className="flex w-[10rem]  
        
            justify-center rounded-md bg-[#F30000]  py-1.5 text-sm mt-8  font-semibold leading-6 text-white shadow-sm hover:bg-[#f30000e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Update Profile Picture
          </button>
          )
        }
              </div>
            </div>

</div>
</div>
</form>
    </div>
  )
}
export default UpdatePictureModal