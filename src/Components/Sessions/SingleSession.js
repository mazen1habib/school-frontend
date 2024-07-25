import React, { Fragment, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../Group/style.css'
import { NavLink, useParams } from 'react-router-dom';
import Navorginal from '../Nav/Navorginal';

const SingleSession = () => {
    const [AllSessions,setAllSessions]=useState({})
    const[Errors,setErrors] = useState([])
    const[susssfully,setsusssfully] = useState('')
    const  params =useParams((e)=>e  )
    useEffect(()=>{
      axios.get(`http://localhost:5000/api/session/${params.id}` ,{withCredentials:true}).then((res)=>{setAllSessions(res?.data.data); setsusssfully(res?.data?.status)}).catch((err)=>setErrors([...Errors , err?.data?.data]))
  },[])
  let Attendance = AllSessions.sessionAttendance;
  return (
    <Fragment>
      <Navorginal/>
      <div style={{display:'block'}}>
        {  
    Errors?.length >0 ?  <> <p  >  {Errors} </p></> : <p> {susssfully}</p>
    }
      <Table responsive="xl" border={4} style={{width:'1000px'}} >
        <thead >
          <tr>
            <th>Diploma</th>
            <th>Group</th>
            <th>SessionName</th>
            <th>Material</th>
            <th>Assignment</th>
            <th>Question</th>
            <th>CreatedAt</th> 
            <th>CreatedBy</th> 
            {/* <th>updatedAt</th>  */}
            <th>updatedBy</th>
            <th>sessionAttendance</th>
            <th>Update</th> 
          </tr>
        </thead>
        <tbody>
                <tr key={AllSessions._id} >
            <td>{AllSessions.sessionDiploma}</td>
            <td>{AllSessions.sessionGroup}</td>
            <td>{AllSessions.sessionName}</td>
            <td>{AllSessions.sessionMaterial}</td>
            <td>{AllSessions.sessionAssignment}</td>
            <td>{AllSessions.sessionQuestion}</td>
            <td>{AllSessions.sessionCreatedAt}</td>
            <td>{AllSessions.sessionCreatedBy?.name}</td>
            {/* <td>{AllSessions.updatedAt}</td> */}
            <td>{AllSessions.updatedBy?.name}</td>
            <td> <select>
        <span>Attendance</span>
        <option Value={'select'}>  Select an option </option>
        {
          (AllSessions.sessionAttendance)?.map((e)=><><option key={e.Id}  > {e.Id}</option></>)
        }
        </select> </td>
            <td> <NavLink to={`/sessions/update/${AllSessions._id}`}> <button class="Btn123">Edit 
      <svg class="svg123" viewBox="0 0 512 512">
        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
    </button>
</NavLink>
</td>
    </tr>
    </tbody>
    </Table>
    <NavLink to={`/session/All/${AllSessions.sessionGroup}`}>
      <button className='button55'>
  <p className='p55'>Back</p>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="4" className='svg55'
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    ></path>
  </svg>
</button>
</NavLink>
    </div>
    </Fragment>
  )
}

export default SingleSession