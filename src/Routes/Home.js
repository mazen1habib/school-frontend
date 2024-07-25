import React, { Fragment } from 'react'
import Navorginal from '../Components/Nav/Navorginal'
import Sectionadmin from '../Components/Nav/Sectionadmin'
import style from './css/home.module.css'
import Section1home from '../Components/Home/Section1home'
const Home = () => {
  return (
    <Fragment>
    <Navorginal/>
    <div  className={style.container}>
    <Section1home/>
    <Sectionadmin/>
    </div>
   

    </Fragment>
  )
}

export default Home