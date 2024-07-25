import React, { Fragment } from 'react'
import Sectionadmin from '../Components/Nav/Sectionadmin'
import style from './css/home.module.css'
import Navorginal from '../Components/Nav/Navorginal'
import Section1user from '../Components/User/Section1user'
const User = () => {
  return (
    <Fragment>
 <Navorginal/>
    <div  className={style.container}>
    <Section1user/>
    <Sectionadmin/>
    </div>   
    </Fragment>
  )
}

export default User