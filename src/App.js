import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

import Login from './components/Login/Login';
//import HomePage from './components/HomePage/HomePage';
import SelectedRide from './components/SelectedRide/SelectedRide';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Rides from './components/Rides/Rides';
export const UserContext=createContext();





const rides = [
  {
      title: 'Bike',
      vehicleId:101,       
      imgUrl: 'https://linkpicture.com/q/Frame_7.png',
      bed: 1,
      capacity: 1,
      seatType: 'Single',
      price: 119
  },
  {
      title: 'Bus',
      vehicleId:102,  
      imgUrl: 'https://linkpicture.com/q/Frame-1_5.png',
      bed: 1,
      capacity: 1,
      seatType: 'Single',
      price: 119
  },
  {
      title: 'Car',
      vehicleId:103,  
      imgUrl: 'https://linkpicture.com/q/Frame-2_2.png',
      bed: 1,
      capacity: 1,
      seatType: 'Single',
      price: 119
  },
  {
      title: 'Train',
      vehicleId:104,  
      imgUrl: 'https://linkpicture.com/q/Group_4.png',
      bed: 1,
      capacity: 1,
      seatType: 'Single',
      price: 119
  }
]
function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
     
    <div className="App">
      <p>{loggedInUser.name}</p>
   
 <Router>
 <Header></Header>
 <Switch>
   {/* <Route exact path="/">
   <HomePage rides={rides}></HomePage>
   </Route exact path="/"> */}
  
   <Route exact path="/">
   <Rides rides={rides}></Rides>
   </Route>
   <Route path="/login">
     <Login></Login>
   </Route>
   <PrivateRoute path='/selectedride/:vehicleId'>
     <SelectedRide rides={rides}></SelectedRide>
   </PrivateRoute>
 </Switch>
 </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;