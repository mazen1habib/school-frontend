import React, { Fragment } from 'react'
import Navorginal from '../Components/Nav/Navorginal'
import Sectionadmin from '../Components/Nav/Sectionadmin'
import style from './css/home.module.css'
import Section1group from '../Components/Group/Section1group'

const Group = () => {
  return (
    <Fragment>
 <Navorginal/>
    <div  className={style.container}>
    <Section1group/>
    <Sectionadmin/>
    </div>   
    </Fragment>
  )
}

export default Group