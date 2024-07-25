import React, { Fragment,useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import style from '../../Routes/css/register.module.css'
import axios from 'axios'
// let nextId = 0;
const AddSession = () => {
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
  const [username,setusername]=useState([])
  const groupname =()=>{
    axios.get(`http://localhost:5000/api/user/students` ,{withCredentials:true}).then((res)=>setusername(res.data.data)).catch((err)=>setErrors([...Errors , err.data.data]))
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
          axios.post(`http://localhost:5000/api/session/${params.diploma}/${params.group}/addsession`, userData,{withCredentials:true})
          .then((resp)=>{if(resp.data.status === 'success'){
              console.log(resp);    
              setErrors([])
                  Navigate('/groups');
          }
             } ).catch((er)=> { console.log(er.response?.data?.message?.message); setErrors( er.response?.data?.message) } ) }
  return (
    <Fragment>
    <div  className={style.container}>{
    }
    
    <form className={style.form} onSubmit={(e)=>e.preventDefault()}>
<p className={style.title}>Add Session </p>
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
<div className={style.flex}>
        <label className={style.label}> 
        <select onClick={groupname}   className={style.input}  value={name} onChange={e => setName(e.target.value)}>
        <span>Attendance</span>
        <option Value={'select'}>  Select an option </option>
        {
            username.map((e)=>(( e.group === params.group && <><option value={e._id}  key={e._id}  > {e.userName}</option></>)))
        }
        </select> 
            <span className={style.span}>Attendance</span>
        {/* <input  className={style.input} type="text" laceholder="" required=""  value={name} onChange={e => setName(e.target.value)}/> */}
        </label>
        <button className={style.submit} onClick={() =>handleClick()}>Insert</button>
    </div>

<button className={style.submit} onClick={sumbitData}>Submit</button>
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

export default AddSession