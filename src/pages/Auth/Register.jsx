import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useUserRegisterMutation } from "../../redux/api/userProfileApi";
import toast from "react-hot-toast";
import { loadUser } from "../../redux/action/userAction";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [image, setImage] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };
  const dispatch = useDispatch();
  const [newUser, {error,isLoading}] = useUserRegisterMutation();
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const myForm = new FormData();
      myForm.append("username", username);
      myForm.append("email", email);
      myForm.append("password", password);
      myForm.append("dob", dob);
      myForm.append("gender", gender);
      myForm.append("file", image);
      const res = await newUser(myForm).unwrap();
      toast.success(res?.message);
      dispatch(loadUser());
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#F30000]">
            Register
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submitHandler}>
            {imagePrev && (
              <div>
                <div className="mt-1">
                  <div className="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mx-auto">
                    <img src={imagePrev} alt="" className="w-full" />
                  </div>
                </div>
              </div>
            )}
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
                  required
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
                  Password
                </label>
              </div>
              <div className="mt-1">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
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
                  required
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
              <div className="mt-1 text-black">
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
              <div className="flex items-center justify-between"></div>
              <div className="mt-1">
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
              <div className="text-sm">
                <Link
                  to="/forgetpassword"
                  className=" text-yellow-400 hover:text-black underline"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
              <button
              disabled={isLoading}
                type="submit"
                className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
{
  isLoading ? <p>Register...</p> : <p>Register</p>
}              </button>

            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already Have Account?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-yellow-400 hover:text-black underline"
            >
              login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
