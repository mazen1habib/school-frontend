import React, { Fragment } from 'react'
import Sectionadmin from '../Components/Nav/Sectionadmin'
import style from './css/home.module.css'
import Navorginal from '../Components/Nav/Navorginal'
import Section1instructos from '../Components/User/Section2instructors'
const Instructors = () => {
  return (
<Fragment>
<Navorginal/>
    <div  className={style.container}>
    <Section1instructos/>
    <Sectionadmin/>
    </div> 
</Fragment>
  )
}

export default Instructors