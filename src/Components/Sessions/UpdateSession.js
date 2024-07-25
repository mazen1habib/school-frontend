
import React, { Fragment,useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import style from '../../Routes/css/register.module.css'
import axios from 'axios'
const UpdateSession = () => {
    const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);
  const handleClick = ()=>{
    const insertAt = 1;
    const nextArtists = [
      // Items before the insertion point:
      ...artists.slice(0, insertAt),
      // New item:
      { Id: name },
      // Items after the insertion point:
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists)
    console.log(artists)
    setuserData({...userData,sessionAttendance:artists});
    setName('');
  } 
  const [userData,setuserData] =  useState({
    sessionMaterial: "",
    sessionAssignment:"",
    sessionName:"",
    sessionQuestion:"", 
    sessionAttendance:[]
    })
   
        const  params =useParams((e)=>e  )
        const[Errors,setErrors] = useState([])
        const Navigate =  useNavigate( )
        const sumbitData=()=>{
          axios.patch(`http://localhost:5000/api/session/${params.id}`,userData,{withCredentials:true})
          .then((resp)=>{if(resp.data.status === 'success'){
              console.log(resp);    
              setErrors([])
                  Navigate('/groups');
          }
             } ).catch((er)=> { console.log(er.response?.data?.data); setErrors( er.response?.data?.data) } ) }
  return (
    <Fragment>
    <div  className={style.container}>{
    }
    
    <form className={style.form} onSubmit={(e)=>e.preventDefault()}>
<p className={style.title}>Update Session </p>
{  
Errors?.length >0 ?  Errors?.map((e,idx)=> <> <p key={idx} className={style.po}>  {e} </p></>)  : <p> welcome</p>
} 
<label className={style.label} >
    <input className={style.input} type="text" placeholder="" required="" onChange={(e)=>setuserData({...userData,sessionMaterial:e.target.value})}/>
    <span className={style.span}> Material</span>
</label> 
    
<label className={style.label}>
    <input className={style.input} type="text"  placeholder=""  required="" onChange={(e)=>setuserData({...userData, sessionAssignment:e.target.value})}/>
    <span className={style.span}>Assignment</span>
</label>
<label className={style.label}>
    <input className={style.input} type="text" placeholder="" required="" onChange={(e)=>setuserData({...userData,sessionName:e.target.value})}/>
    <span className={style.span}>Session Name</span>
</label>
<label className={style.label}>
    <input className={style.input} type="text" placeholder="" required="" onChange={(e)=>setuserData({...userData,sessionQuestion:e.target.value})}/>
    <span className={style.span}>Question</span>
</label>
<button className={style.submit} onClick={sumbitData}>Submit</button>
</form>
<button className={style.cta} >
<NavLink  className={style.a1} to={'/session/All/update'}>
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

export default UpdateSession