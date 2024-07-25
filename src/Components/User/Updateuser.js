import axios from 'axios'
import React, { Fragment, useState } from 'react'
import style from '../../Routes/css/register.module.css'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
const Updateuser = () => {
    const[Errors,setErrors] = useState([])
    const[Successfully,setSuccessfully] = useState('')
    const Navigate =  useNavigate( )
    const  params =useParams((e)=>e  )
    const [userData,setuserData] = useState({
        group: ""
        })
        const[group ,setgroup] = useState([])
    const getGroup =()=>{
        axios.get(`http://localhost:5000/api/group` ,{withCredentials:true}).then((res)=>setgroup(res.data.data)).catch((err)=>setErrors([...Errors , err.data.data]))
    }
    let sumbitData =()=>{
        setErrors([])
        axios.patch(`http://localhost:5000/api/user/update/${params.id}`,userData,{withCredentials:true})
        .then((resp)=>{if(resp?.data?.status === 'success'){
            console.log(resp);  
            setSuccessfully(resp?.data?.data)  
            setErrors([])
                Navigate('/students');
        }
           } ).catch((er)=> { console.log(er?.data?.data); setErrors( er?.response?.data?.date) } )
    }
  return (
    <Fragment>
    <div  className={style.container}>
           <form className={style.form} onSubmit={(e)=>e.preventDefault()}>
       <p className={style.title}>Update Group</p>
       {  
       Errors?.length >0 ?  Errors?.map((e,idx)=> <> <p key={idx} className={style.po}>  {e} </p></>)  : <p> {Successfully}</p>
       }
       <label className={style.label}> 
       <select onClick={getGroup}   className={style.input} onChange={(e)=>setuserData({...userData,group:e.target.value})}>
        <span>Diploma</span>
        <option Value={'select'}>  Select an option </option>
        {
            group.map((e)=>(<>
        <option value={e.diplomaName}  key={e._id}  > {e.groupName}</option>
            </>))
        }
        </select>
        </label> 
       <button className={style.submit} onClick={sumbitData}>Submit</button>
   </form>
   <button className={style.cta} >
   <NavLink  className={style.a1} to={'/students'}>
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

export default Updateuser