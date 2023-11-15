import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserGrid from './components/UserGrid';
import './App.css'; // Import your custom CSS file

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Navbar onGetUsers={handleGetUsers} />
      {loading ? <div className="loader">Loading...</div> : <UserGrid users={users} />}
    </div>
  );
}

export default App;
