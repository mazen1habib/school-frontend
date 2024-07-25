import React, { Fragment } from 'react'
import Sectionadmin from '../Components/Nav/Sectionadmin'
import style from './css/home.module.css'
import Navorginal from '../Components/Nav/Navorginal'
import Section3students from '../Components/User/Section3students'

const Students = () => {
  return (
    <Fragment>
<Navorginal/>
    <div  className={style.container}>
    <Section3students/>
    <Sectionadmin/>
    </div> 
</Fragment>
  )
}

export default Students