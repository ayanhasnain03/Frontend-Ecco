import { useState } from "react"
import { Link } from "react-router-dom"
import { useContactFromUserMutation } from "../redux/api/adminUserApi"
import {toast} from "react-hot-toast"
import MetaData from "../components/MetaData"
const ContactUs = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [userContact,{isLoading}]=useContactFromUserMutation()
    const submitHandler = async(e)=>{
      e.preventDefault()
   const res =await userContact({name,email,message}).unwrap()
toast.success(res?.message)
    }
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-[4rem]">
      <MetaData title="contact"/>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#F30000]">
          Contact
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6"
            >
              Name
            </label>
            <div className="mt-2">
              <input
               
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                type="text"
                placeholder="Your Name"
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
            <div className="mt-2">
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your Email"
                required
                className="block w-full  py-1.5 text-black  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-sm font-medium leading-6 "
              >
                Message
              </label>
          
            </div>
            <div className="mt-2">
            <textarea
value={message}
onChange={(e)=>setMessage(e.target.value)}
id="message" rows="4" className="block resize-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#F30000] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#f30000e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
{isLoading ? (<>Sending...</>):(<>Send</>)}
            </button>
          </div>
        </form>

      </div>
    </div>
  </>
  )
}
export default ContactUs