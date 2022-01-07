import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import User from './components/User/User';
import 'bootstrap/dist/css/bootstrap.css';
import Country from './components/Country/Country';
import CountryDetails from './components/Country/CountryDetails/CountryDetails';


function App() {
  const [users, setUsers] = useState([]);
  // console.log(users);
  const handleCountUser = (user) => {setUsers(user)}
  return (
    <div>
      
      <Router>
      <Header users={users}></Header>
        <Routes>
          <Route path="/" element={<User handleCountUser={handleCountUser}></User>}/>
          <Route path="/home" element={<User handleCountUser={handleCountUser}></User>}/>
          <Route path="/country" element={<Country />}/>
          <Route path="/country/:countryName" element={<CountryDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
