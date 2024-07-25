import React, { Fragment, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import style from './css/register.module.css'
import axios from 'axios'
const Register = () => {
    const [userData,setuserData] = useState({
    userName: "",
    email:"",
    password:"",
    phone:"",
    role:"",
    diploma:"",
    group:""
    })
    const[diploma ,setdiploma] = useState([])
   
    const[Group ,setGroup] = useState([])
    const[Errors,setErrors] = useState([])
    const Navigate =  useNavigate( )
    const getDiplomas =()=>{
        axios.get(`http://localhost:5000/api/diplomas/` ,{withCredentials:true}).then((res)=>setdiploma(res.data.data)).catch((err)=>setErrors([...Errors , err.data.data]))
    }
    const getGroups =()=>{
        axios.get(`http://localhost:5000/api/group/diplomaName/${userData.diploma}` 
        ,{withCredentials:true})
        .then((res)=>setGroup(res.data.data))
        .catch((err)=>setErrors([...Errors , err.data.data]))
    }
    let sumbitData =()=>{
        setErrors([])
        axios.post(`http://localhost:5000/api/user/register`,userData,{withCredentials:true})
        .then((resp)=>{if(resp.data.status === 'success'){
            console.log(resp);    setErrors([])
            if(resp.data.data.role ==='1a'){
                Navigate('/admins');
            } else if ( resp.data.data.role ==='2i'){
                Navigate('/instructors');
            } else if (resp.data.data.role=== '3s'){
                Navigate('/students');
            } else{
                Navigate('/home');
            }
        }
           } ).catch((er)=> { console.log(er.response.data.data); setErrors( er.response.data?.data) } )
    }
  return (
    <Fragment>
        <div  className={style.container}>
        <form className={style.form} onSubmit={(e)=>e.preventDefault()}>
    <p className={style.title}>Register </p>
    {  
    Errors?.length >0 ?  Errors?.map((e,idx)=> <> <p key={idx} className={style.po}>  {e} </p></>)  : <p> welcome</p>
    }
        <div className={style.flex}>
        <label className={style.label}>
            <input className={style.input} type="text" placeholder="" required="" onChange={(e)=>setuserData({...userData,userName:e.target.value})}/>
            <span className={style.span}>Full Name</span>
        </label>
        <br/>
        <label className={style.label}>
        <select  className={style.input} style={{width:'130px'}}  onChange={(e)=>setuserData({...userData,role:e.target.value})}>
        <option value={'hi'} >  Select an option </option>
        <option value={'1a'} > Admin</option>
        <option value={'2i'} > Instructor</option>
        <option value={'3s'}> student</option>
        </select> 
        <span className={style.span}> <option> Role</option> </span>
        </label>
    </div>  
    <label className={style.label} >
        <input className={style.input} type="email" placeholder="" required="" onChange={(e)=>setuserData({...userData,email:e.target.value})}/>
        <span className={style.span}>Email</span>
    </label> 
        
    <label className={style.label}>
        <input className={style.input} type="password" placeholder="" required="" onChange={(e)=>setuserData({...userData,password:e.target.value})}/>
        <span className={style.span}>Password</span>
    </label>
    {/* <label className={style.label}>
        <input className={style.input} type="password" placeholder="" required=""/>
        <span className={style.span}>Confirm password</span>
    </label> */}
    <label className={style.label}>
        <input className={style.input} type="text" placeholder="" required="" onChange={(e)=>setuserData({...userData,phone:e.target.value})}/>
        <span className={style.span}>Phone</span>
    </label>
    {
        userData.role ==='3s' && <>
        <label className={style.label}> 
        <select onClick={getDiplomas}   className={style.input} onChange={(e)=>setuserData({...userData,diploma:e.target.value})}>
        <span>Diploma</span>
        <option Value={'select'}>  Select an option </option>
        {
            diploma.map((e)=>(<>
        <option value={e.diplomaName}  key={e._id}  > {e.diplomaName}</option>
            </>))
        }
        </select> 
            <span className={style.span}>Diploma</span>
        </label>
    <label className={style.label}>
    <select   onClick={getGroups}  className={style.input} onChange={(e)=>setuserData({...userData,group:e.target.value})}>
        <span>Group</span>
        <option Value={'select'}>  Select an option </option>
        {
            Group.map((a)=>(<>
        <option value={a.groupName}  key={a._id}  > {a.groupName}</option>
            </>))
        }
        </select> 
            <span className={style.span}>Group</span>
        </label>
        </>
    }
   
       
    <button className={style.submit} onClick={sumbitData}>Submit</button>
    <p className={style.signin}>Already have an acount ? <NavLink to={'/'}>Signin</NavLink>  </p>
</form>
<button className={style.cta} >
<NavLink  className={style.a1} to={'/home'}>
  <span className={style.span1}>Back</span>
  <svg className={style.svg} width="15px" height="10px" viewBox="0 0 13 10">
    <path className={style.path} d="M1,5 L11,5"></path>
    <polyline className={style.polyline} points="8 1 12 5 8 9"></polyline>
  </svg>
</NavLink>
</button>
</div>
    </Fragment>
  )
}

export default Register