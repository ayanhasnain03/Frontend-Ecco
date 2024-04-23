import { useState } from "react"
import { useResetPasswordMutation } from "../../redux/api/userProfileApi"
import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast"

const ResetPassword = () => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [resetPassword]=useResetPasswordMutation()
    const {token} = useParams()
    const navigate = useNavigate()
const submitHandler = async(e)=>{
    e.preventDefault()
    try {
        if(confirmPassword===password){
            const res = await resetPassword({token,password}).unwrap()
            toast.success(res?.message)
            navigate("/login")
        }else{
            toast.error("Password Doest Match")
        }
    } catch (error) {
        
    }
}
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-[4rem]">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#F30000]">
         Reset Password
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="email"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full  py-1.5 text-black  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="confirm Password"
              className="block text-sm font-medium leading-6"
            >
            Confirm  Password
            </label>
            <div className="mt-2">
              <input
                id="email"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="block w-full  py-1.5 text-black  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#F30000] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#f30000e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >

 <p>Email Sent</p> 
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}
export default ResetPassword