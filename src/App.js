import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import React ,{useState} from 'react';
import Usermanagement from './Components/Usermanagement';
import Adduser from './Components/Adduser';
import Allusers from './Components/Allusers';
import NotFound from './Components/NotFound';
import Edituser from './Components/EditUser';
import Dummy from './Components/Dummy';

import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Info from './Components/Information';


function App() {
  const [isShow,setIsValid] = useState(false);
  return (
    <BrowserRouter>
   <Navbar />
   <Switch>
   <Route exact path='/' component={Usermanagement}/>
   <Route exact path='/users' component={Allusers}/>
   <Route exact path='/adduser' component={Adduser}/>
   <Route exact path='/edit/:id' component={Edituser}/>
   <Route component={NotFound}/>
   </Switch>
   <Info name = {"sairam"} />
   <button onClick={()=>setIsValid(!isShow)}>Show Dummy Text</button>
     {isShow ? <Dummy/>:<p>No Data From Dummy Component</p>}
   </BrowserRouter> 
   
  );
}
export default App;
