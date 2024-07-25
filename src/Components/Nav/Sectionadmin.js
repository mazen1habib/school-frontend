import React, { Fragment, useState } from 'react'
import style from './css/section1nav.module.css'
import { NavLink } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
const Sectionadmin = () => {
  const [x ,setx] = useState(false)
  return (
    <Fragment>
  <div className={style.container} style={{display:'block',gap:'10px'}}>
 <NavLink to={'/diplomas'}> <div className={style.navdata}>  <FaAngleLeft size={25} style={{marginTop:'20px'}} />  <h4 style={{marginTop:'14px'}}> Diplomas </h4>   </div></NavLink>
 <NavLink to={'/groups'}> <div className={style.navdata}>   <FaAngleLeft size={25} style={{marginTop:'20px'}} />  <h4  style={{marginTop:'14px'}}> Groups </h4>    </div></NavLink>
  <div className={style.navdata} onClick={()=>setx(!x)}>   <FaChevronDown size={25} style={{marginTop:'20px'}} />  <h4  style={{marginTop:'14px'}}> Users </h4></div>
  { x && ( <>
    <NavLink to={'/admins'}> <div className={style.navdata}>   <FaAngleLeft size={25} style={{marginTop:'20px'}} />  <h5  style={{marginTop:'14px'}}> Admins </h5>    </div></NavLink>
    <NavLink to={'/instructors'}> <div className={style.navdata}>   <FaAngleLeft size={25} style={{marginTop:'20px'}} />  <h5  style={{marginTop:'14px'}}> Instructors </h5>    </div></NavLink>
    <NavLink to={'/students'}> <div className={style.navdata}>   <FaAngleLeft size={25} style={{marginTop:'20px'}} />  <h5  style={{marginTop:'14px'}}> Students </h5>    </div></NavLink>

</>)  
  }
 <NavLink to={'/register'}> <div className={style.navdata}>   <FaAngleLeft size={25} style={{marginTop:'20px'}} />  <h4  style={{marginTop:'14px'}}> Register </h4>     </div></NavLink>
 <NavLink to={'/userSession'}><div className={style.navdata}><FaAngleLeft size={25} style={{marginTop:'20px'}} />  <h4  style={{marginTop:'14px'}}> User Session  </h4>  </div></NavLink>

  </div>
    </Fragment>
  )
}

export default Sectionadmin