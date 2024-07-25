import React, { Fragment, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import style from '../../Routes/css/register.module.css'
import axios from 'axios'
const AddGroup = () => {
    const [userData,setuserData] = useState({
    groupDiploma: "",
    groupName:"",
    groupStart:"",
    groupStudents:"",
    groupSessions:"",
    })
    const[diploma ,setdiploma] = useState([])
    const[Errors,setErrors] = useState([])
    const Navigate =  useNavigate( )
    const getDiplomas =()=>{
        axios.get(`http://localhost:5000/api/diplomas/` ,{withCredentials:true}).then((res)=>setdiploma(res.data.data)).catch((err)=>setErrors([...Errors , err.data.data]))
    }
    let sumbitData =()=>{
        setErrors([])
        axios.post(`http://localhost:5000/api/group`,userData,{withCredentials:true})
        .then((resp)=>{if(resp.data.status === 'success'){
            console.log(resp);    
            setErrors([])
                Navigate('/groups');
        }
           } ).catch((er)=> { console.log(er.response.data.message.message); setErrors( er.response.data?.message) } )
    }
  return (
    <Fragment>
        <div  className={style.container}>
        <form className={style.form} onSubmit={(e)=>e.preventDefault()}>
    <p className={style.title}>Add Group </p>
    {  
    Errors?.length >0 ?  Errors?.map((e,idx)=> <> <p key={idx} className={style.po}>  {e} </p></>)  : <p> welcome</p>
    }
        <div className={style.flex}>
        <label className={style.label}> 
        <select onClick={getDiplomas}   className={style.input} onChange={(e)=>setuserData({...userData,groupDiploma:e.target.value})}>
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
    </div>  
    <label className={style.label} >
        <input className={style.input} type="text" placeholder="" required="" onChange={(e)=>setuserData({...userData,groupName:e.target.value})}/>
        <span className={style.span}> Group Name</span>
    </label> 
        
    <label className={style.label}>
        <input className={style.input} type="datetime-local" placeholder="" required="" onChange={(e)=>setuserData({...userData,groupStart:e.target.value})}/>
        <span className={style.span}>Start Date</span>
    </label>
    {/* <label className={style.label}>
        <input className={style.input} type="password" placeholder="" required=""/>
        <span className={style.span}>Confirm password</span>
    </label> */}
    <label className={style.label}>
        <input className={style.input} type="text" placeholder="" required="" onChange={(e)=>setuserData({...userData,groupStudents:e.target.value})}/>
        <span className={style.span}>Group of Students</span>
    </label>
    <label className={style.label}>
        <input className={style.input} type="text" placeholder="" required="" onChange={(e)=>setuserData({...userData,groupSessions:e.target.value})}/>
        <span className={style.span}>Group of Session</span>
    </label>
    <button className={style.submit} onClick={sumbitData}>Submit</button>
    {/* <p className={style.signin}>Already have an acount ? <NavLink to={'/'}>Signin</NavLink>  </p> */}
</form>
<button className={style.cta} >
<NavLink  className={style.a1} to={'/groups'}>
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

export default  AddGroup 