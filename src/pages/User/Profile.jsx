import React from 'react'
import { useDispatch } from 'react-redux';
import { loadUser, logout } from '../../redux/action/userAction';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  const navigate = useNavigate()
const dispatch = useDispatch()
  const logoutHandler = async () => {
  dispatch(logout())
  };
  return (
<button onClick={logoutHandler}>Logout</button> 
 )
}

export default Profile