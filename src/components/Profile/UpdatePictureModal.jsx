import { useState } from "react";
import { RxAvatar } from "react-icons/rx"
import { Link } from "react-router-dom";
import profilePng from "../../assets/Profile.png"
const UpdatePictureModal = ({profileModal}) => {

    const [imagePrev, setImagePrev] = useState("");
    const [image, setImage] = useState("");

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setImagePrev(reader.result);
          setImage(file);
        };
      };
  return (
    <div className="relative flex items-center h-full w-full ">
<button className="absolute top-5 right-8" onClick={profileModal}>X</button>

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
<div>
              <div className="mt-1">
                <input
                className="flex w-[20rem] justify-center rounded-md bg-[#000000]  py-1.5 text-sm mt-8  font-semibold leading-6 text-white shadow-sm hover:bg-[#110f0fe7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  accept="image/*"
                  id="password"
                  name="password"
                  type="file"
                  autoComplete="current-password"
                  placeholder="choose avatar"
                  required
                  onChange={changeImageHandler}
                 
                />
              </div>
             
              <div>
                <button  onClick={profileModal} className="flex w-[20rem] justify-center rounded-md bg-[#F30000]  py-1.5 text-sm mt-8  font-semibold leading-6 text-white shadow-sm hover:bg-[#f30000e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Update Profile Picture
                </button>
              </div>
            </div>

</div>
</div>
    </div>
  )
}
export default UpdatePictureModal