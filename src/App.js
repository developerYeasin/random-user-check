import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import User from './components/User/User';

function App() {
  const [users, setUsers] = useState([]);
  // console.log(users);
  const handleCountUser = (user) => {setUsers(user)}
  return (
    <div>
      <Header users={users}></Header>
      <User handleCountUser={handleCountUser}></User>
    </div>
  );
}

export default App;
