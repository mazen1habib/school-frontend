import React, { Fragment, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './../Group/style.css'
import { NavLink } from 'react-router-dom';
const Sesction1Diploma = () => {
    const [count ,setcount] = useState(6)
    const  handleClick =()=>{
            setcount(count + 6);
    }
    const  backClick=()=>{
            setcount(count - 6);
    }
    const [diplomas ,setdiplomas]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/diplomas/` ,{withCredentials:true}).then((res)=>setdiplomas(res.data.data)).catch((err)=>console.log(err))
    },[])
    
  return (
    <Fragment>
        <div>
      <Table responsive="xl" border={2} style={{width:'1000px'}} >
        <thead >
          <tr>
            <th>DiplomaName</th>
            <th>Price</th>
            <th>CreatedAt</th>
            <th>CreatedBy</th>
            <th>UpdatedAt</th>
            <th>UpdatedBy</th>
            <th>Update</th>
            <th>ShowMore</th>
          </tr>
        </thead>
        <tbody>
        {
        diplomas.map((e ,idx)=>(
            ( count === 6 ? (
                idx <= 6 && <>
              <tr key={e._id}>
            <td>{e.diplomaName}</td>
            <td>{e.price}</td>
            <td>{e.diplomaCreatedAt}</td>
            <td>{e.diplomaCreatedBy?.name}</td>
            <td>{e.updatedAt}</td>
            <td>{e.updatedBy?.name}</td>
            <td> <NavLink to={`/diploma/update/${e._id}`}> <button class="Btn123">Edit 
      <svg class="svg123" viewBox="0 0 512 512">
        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
    </button>
</NavLink>
 </td>
 <td> <NavLink className="button16" to={`/diploma/Single/${e._id}`}>
            <span className="button__icon-wrapper16">
                <svg width="10" className="button__icon-svg16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
                
                <svg className="button__icon-svg16  button__icon-svg--copy16" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
            </span>
            Show More
            </NavLink> </td>
                </tr>
                </>
            ) :  (
                idx >= (count -6)&&( idx <= count && <>
                    <tr key={e._id}>
            <td>{e.diplomaName}</td>
            <td>{e.price}</td>
            <td>{e.diplomaCreatedAt}</td>
            <td>{e.diplomaCreatedBy?.name}</td>
            <td>{e.updatedAt}</td>
            <td>{e.updatedBy?.name}</td>
            <td> <NavLink to={`/diploma/update/${e._id}`}> <button class="Btn123">Edit 
      <svg class="svg123" viewBox="0 0 512 512">
        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
    </button>
</NavLink>
 </td>
 <td> <NavLink className="button16" to={`/diploma/Single/${e._id}`}>
            <span className="button__icon-wrapper16">
                <svg width="10" className="button__icon-svg16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
                
                <svg className="button__icon-svg16  button__icon-svg--copy16" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
            </span>
            Show More
            </NavLink> </td>
                </tr>
                </> ) 
            ))
        ))
        }
        </tbody>
      </Table>
      <div style={{display:'flex' , justifyContent:'space-between'}}>
      <div >
      <button class="button" onClick={()=>{ handleClick()}}  >
  <span class="text">Next</span>
  <svg class="arrow" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
</button>
 <button class="button" onClick={()=>backClick()}  >
  <span class="text">back</span>
  <svg class="arrow" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
</button>
      </div>
      <NavLink to={'/diplomas/AddDiploma'}> <button type="button" class="button12">
  <span class="button__text12">Add Diploma</span>
  <span class="button__icon12"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
</button></NavLink>
      
      
      </div>
      </div>
    </Fragment>
  )
}

export default Sesction1Diploma