import { Fragment } from 'react';

import './App.css';
import { Route , Routes } from 'react-router-dom';
import Login from './Routes/Login';
import Home from './Routes/Home';
import Diploma from './Routes/Diploma';
import Group from './Routes/Group';
import User from './Routes/User';
import Instructors from './Routes/Instructors';
import Students from './Routes/Students';
import Register from './Routes/Register';
import AddGroup from './Components/Group/AddGroup';
import AddDiploma from './Components/Diploma/AddDiploma';
import UpdateDiploma from './Components/Diploma/UpdateDiploma';
import UpdateGroup from './Components/Group/UpdateGroup';
import SingleGroup from './Components/Group/SingleGroup';
import SingleDiploma from './Components/Diploma/SingleDiploma';
import Profile from './Routes/Profile';
import SingleUser from './Components/User/SingleUser';
import UpdatePassword from './Components/User/UpdatePassword';
import Updateuser from './Components/User/Updateuser';
import AddSession from './Components/Sessions/AddSession';
import AllSessions from './Components/Sessions/AllSessions';
import SingleSession from './Components/Sessions/SingleSession';
import UpdateSession from './Components/Sessions/UpdateSession';
function App() {
  return (
   <Fragment>
  <Routes>
    <Route path={'/'} element={<Login/>}/>
    <Route path={'/Home'} element={<Home/>}/>
    <Route path={'/diplomas'} element={<Diploma/>}/>
    <Route path={'/groups'} element={<Group/>}/>
    <Route path={'/admins'} element={<User/>}/>
    <Route path={'/instructors'} element={<Instructors/>}/>
    <Route path={'/students'} element={<Students/>}/>
    <Route path={'/register'} element={<Register/>}/>
    <Route path={'/group/addgroup'} element={<AddGroup/>}/>
    <Route path={'/group/update/:id'} element={<UpdateGroup/>}/>
    <Route path={'/group/Single/:id'} element={<SingleGroup/>}/>
    <Route path={'/diplomas/AddDiploma'} element={<AddDiploma/>}/>
    <Route path={'/diploma/update/:id'} element={<UpdateDiploma/>}/>
    <Route path={'/diploma/Single/:id'} element={<SingleDiploma/>}/>
    <Route path={`/profile`} element={<Profile/>}/>
    <Route path={'/user/single/:id'} element={<SingleUser/>}/>
    <Route path={'/user/newpassword/:id'} element={<UpdatePassword/>}/>
    <Route path={'/user/updategroup/:id'} element={<Updateuser/>}/>
    <Route path={'/session/add/:diploma/:group'} element={<AddSession/>}/>
    <Route path={'/session/All/:group'} element={<AllSessions/>}/>
    <Route path={'/sessions/session/single/:id'} element={<SingleSession/>}/>
    <Route path={'/sessions/update/:id'} element={<UpdateSession/>}/>

  </Routes>
   </Fragment>
  );
}

export default App;
