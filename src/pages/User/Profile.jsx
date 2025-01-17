import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import UpdatePictureModal from "../../components/Profile/UpdatePictureModal";
import UpdatePasswordModal from "../../components/Profile/UpdatePasswordModal";
import UpdateProfileModal from "../../components/Profile/UpdateProfileModal";
import LogoutPopUp from "../../components/Profile/LogoutModal";
import MetaData from "../../components/MetaData";
const Profile = ({ user }) => {
  const [updatePictureModal, setupdatePictureModal] = useState(false)
  const [updatePasswordModal, setupdatePasswordModal] = useState(false)
  const [updateProfile, setupdateProfile] = useState(false)
  const [logoutModal, setlogoutModal] = useState(false)
  
  const profileModal = ()=>{
    setupdatePictureModal(!updatePictureModal)
  }
  const profilePasswordModal = ()=>{
    setupdatePasswordModal(!updatePasswordModal)
  }
  const updateProfileModal = ()=>{
    setupdateProfile(!updateProfile)
  
  }
  const logoutModalToogle = ()=>{
    setlogoutModal(!logoutModal)
  
  }
  const navigate = useNavigate();

  return (
    <main className="">
      <MetaData title="profile"/>
{
  updatePictureModal ? (<div className="z-30 bg-black md:h-[70vh] md:w-[40vw] h-[70vh] w-[65vw] absolute left-[21%] md:left-[30%] top-[20%] right-[50%]">
  <UpdatePictureModal profileModal={profileModal} />
  </div>):(
    <></>
  )
}    
{
  updatePasswordModal ? (<div className="z-30 bg-black md:h-[60vh] md:w-[40vw] h-[60vh] w-[60vw] absolute left-[21%] md:left-[30%] top-[20%] right-[70%]">
  <UpdatePasswordModal profilePassChange={profilePasswordModal} />
  </div>):(
    <></>
  )
}    
{
  updateProfile ? (<div className="z-30 bg-black md:h-[80vh] md:w-[40vw] h-[60vh] w-[60vw] absolute left-[25%] md:left-[30%] top-[20%] right-[70%]">
  <UpdateProfileModal profileUpdate={updateProfileModal} />
  </div>):(
    <></>
  )
}    
{
  logoutModal ? (<div className="z-30 bg-black md:h-[50vh] md:w-[40vw] h-[50vh] w-[60vw] absolute left-[25%] md:left-[30%] top-[20%] right-[70%]">
  <LogoutPopUp logoutModal={logoutModalToogle} />
  </div>):(
    <></>
  )
}    
  
  <div className={`flex md:flex-row justify-between flex-col md:px-8 items-center gap-8 ${updatePictureModal || updatePasswordModal || updateProfile ? "blur-3xl " : ""}`}>
        <div className=" md:h-[40rem] h-[30rem] md:w-[40%] w-full">
          <div>
            <div className="m-8 flex flex-col items-center">
              <img
                src={user.avatar.url}
                alt=""
                className="rounded-full h-[10rem] w-[10rem] md:h-[20rem] md:w-[20rem]"
              />
              <div>
                <button  onClick={profileModal} className="flex w-[20rem] justify-center rounded-md bg-[#F30000]  py-1.5 text-sm mt-8  font-semibold leading-6 text-white shadow-sm hover:bg-[#f30000e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Update Profile Picture
                </button>
              </div>
              <div>
                <button onClick={profilePasswordModal}  className="flex w-[20rem] justify-center rounded-md bg-[#F30000]  py-1.5 text-sm mt-8  font-semibold leading-6 text-white shadow-sm hover:bg-[#f30000e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  update password
                </button>
              </div>
              <div>
                <button onClick={updateProfileModal}  className="flex w-[20rem] justify-center rounded-md bg-[#F30000]  py-1.5 text-sm mt-8  font-semibold leading-6 text-white shadow-sm hover:bg-[#f30000e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  update Profile
                </button>
              </div>
              <div>
                <Link to="/orders">
                  <button className="flex w-[20rem] justify-center rounded-md bg-[#F30000]  py-1.5 text-sm mt-8  font-semibold leading-6 text-white shadow-sm hover:bg-[#f30000e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Your Orders
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:w-[60%] w-full h-[30rem] md:mr-[1.5rem] mr-5">
          <div className="m-4 flex flex-col gap-6 w-full items-center justify-end">
            <h2>Name: {user.username}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Gender: {user.gender}</h2>

            <h2>Dob: {moment(user.dob).format('MMMM Do YYYY')}</h2>
            <h2>createdAt: {moment(user.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</h2>

            <button
              onClick={logoutModalToogle}
              className="flex w-[20rem] justify-center rounded-md bg-[#F30000]  py-1.5 text-sm mt-8  font-semibold leading-6 text-white shadow-sm hover:bg-[#f30000e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
