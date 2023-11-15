import React from 'react';
import UserCard from './UserCard';
import './UserGrid.css'; // Import your custom CSS file

const UserGrid = ({ users }) => {
  return (
    <div className="user-grid">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserGrid;
