import React, { Fragment } from 'react'
import Navorginal from '../Components/Nav/Navorginal'
import Sesction1Diploma from '../Components/Diploma/Sesction1Diploma'
import Sectionadmin from '../Components/Nav/Sectionadmin'
import style from './css/home.module.css'
const Diploma = () => {
  return (
    <Fragment>
     <Navorginal/>
    <div  className={style.container}>
    <Sesction1Diploma/>
    <Sectionadmin/>
    </div>   
    </Fragment>
  )
}

export default Diploma