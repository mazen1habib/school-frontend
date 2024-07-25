import React, { Fragment, useEffect, useState } from 'react'
import logo from '../images/—Pngtree—online school logo_6845946.png'
import style from './css/navorginal.module.css'
import { FaRegUserCircle } from "react-icons/fa";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const Navorginal = () => {
  const [name ,setname] = useState({})
  useEffect(()=>{
    axios.get(`http://localhost:5000/api/user/users/profile` ,{
      withCredentials :true
    }).then((res)=>setname(res.data.data)).catch((err)=>console.log(err))
},[])
  return (
   <Fragment>
   <div className={style.container}>
   <NavLink to={'/home'}>
   <div className={style.imges}>
   <img src={logo} alt=''/>
   </div>
   </NavLink>
  <div className={style.login}>
  {
      <>
      <h4 key={name._id}> {name.userName
      }</h4>
      </>
  
  }
   
  <NavLink to={`/profile`}>   <FaRegUserCircle style={{marginTop:'10px'}} size={40} /> </NavLink> 
  </div>
   </div>
   </Fragment>
  )
}

export default Navorginal