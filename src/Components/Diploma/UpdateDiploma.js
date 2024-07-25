
import React, { Fragment, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import style from '../../Routes/css/register.module.css'
import axios from 'axios'
const UpdateDiploma = () => {
    const[Errors,setErrors] = useState([])
    const  params =useParams((e)=>e  )
    const Navigate =  useNavigate( )
    const [userData,setuserData] = useState({
        diplomaName: "",
        price:"",
        })
        let sumbitData =()=>{
            setErrors([])
            axios.patch(`http://localhost:5000/api/diplomas/${params.id}`,userData,{withCredentials:true})
            .then((resp)=>{if(resp?.data?.status === 'success'){
                console.log(resp);    
                setErrors([])
                    Navigate('/diplomas');
            }
               } ).catch((er)=> { console.log(er?.data?.data); setErrors( er?.response?.data?.date) } )
        }
  return (
    <Fragment>
 <div  className={style.container}>
        <form className={style.form} onSubmit={(e)=>e.preventDefault()}>
    <p className={style.title}>Update Diploma </p>
    {  
    Errors?.length >0 ?  Errors?.map((e,idx)=> <> <p key={idx} className={style.po}>  {e} </p></>)  : <p> welcome</p>
    }
    <label className={style.label} >
        <input className={style.input} type="text" placeholder="" required="" onChange={(e)=>setuserData({...userData,diplomaName:e.target.value})}/>
        <span className={style.span}> Diploma Name</span>
    </label> 
        
    <label className={style.label}>
        <input className={style.input} type="text" placeholder="" required="" onChange={(e)=>setuserData({...userData,price:e.target.value})}/>
        <span className={style.span}>Price</span>
    </label>
    <button className={style.submit} onClick={sumbitData}>Submit</button>
</form>
<button className={style.cta} >
<NavLink  className={style.a1} to={'/diplomas'}>
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

export default UpdateDiploma