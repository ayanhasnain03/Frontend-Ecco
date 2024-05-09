import { useState } from "react";
import { useUpdateProfileMutation } from "../../redux/api/userProfileApi";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/action/userAction";

const UpdateProfileModal = ({profileUpdate}) => {
  const {user}=useSelector(state=>state.user)
    const [username, setUsername] = useState(user?.username);
    const [email, setEmail] = useState(user?.email);
    const [dob, setDob] = useState(user?.dob);
    const [gender, setGender] = useState("");
const [updateProfile]=useUpdateProfileMutation()
const dispatch = useDispatch()
    const submithandler = async(e)=>{
      e.preventDefault()
const res = await updateProfile({username,email,dob,gender})
dispatch(loadUser())
toast.success(res?.data?.message)
    }
  return (
    <div className="relative flex items-center h-full  ">
<button className="absolute top-3 right-3 " onClick={profileUpdate}>X</button>

<div className="w-full flex flex-col items-center ">
<>
      <div className="flex  flex-1 flex-col justify-center w-full px-6  lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#F30000]">
           Update Profile
          </h2>
        </div>

        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="mt-1" onSubmit={submithandler} >
         
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  name="name"
                  type="text"
                  required
                  className="block w-full  py-1.5 text-black  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  autoComplete="email"

                  placeholder="xyz@gmail.com"
                  className="block w-full  py-1.5 text-black  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

        
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Date of birth
                </label>
              </div>
              <div className="mt-1">
                <input
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  name="password"
                  type="date"
                  autoComplete="current-password"
          
                  className="block w-full  py-1.5 text-black  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Gender
                </label>
              </div>
              <div className=" mt-1 text-black">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

          

            <div>
            <button  type="submit" className="flex w-[10rem] mb-8 justify-center rounded-md bg-[#F30000]  py-1.5 text-sm mt-8  font-semibold leading-6 text-white shadow-sm hover:bg-[#f30000e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Update Profile 
                </button>
            </div>
          </form>

    
        </div>
      </div>
    </>
<div>
<div>
         

            </div>

</div>
</div>
    </div>
  )
}
export default UpdateProfileModal