import React, { Fragment, useState } from 'react'
import  style from './login.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Section1Login = () => {
  const [userData,setUserData] = useState({email:'',password:''})
  const [responseError,setresponseError] = useState(null)
  const Navigate =  useNavigate( )
  let handlogin = ()=>{
    axios.post('http://localhost:5000/api/auth/login',userData ,{
      withCredentials:true
    }).then((resp)=>{
      console.log(resp)
      setresponseError(null)
     Navigate('/Home')
    })
    .catch((er)=>{
      setresponseError(er?.response?.data?.data)
    })
  }
  return (
   <Fragment>
   <div className={style.container}>
   <div className={style.login_card}>
  <div className={style.card_header}>
    <div className={style.log}>Login</div>
  </div>
  {
    responseError && <p> {responseError}</p> 
  }
    <div className={style.form_group}>
      <input  placeholder='Email'type="text" onChange={(e)=>setUserData({...userData,email:e.target.value})}/>
    </div>
    <div className={style.form_group}>
      <input placeholder='Password' type="password" onChange={(e)=>setUserData({...userData,password:e.target.value})}/>
    </div>
    <button className={style.button}  onClick={handlogin}> Login</button>
</div>
</div>
   </Fragment>
  )
}

export default Section1Login