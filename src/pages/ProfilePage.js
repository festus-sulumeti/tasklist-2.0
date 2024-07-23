import React, { useState } from 'react';
import Profile from '../components/Authentication/Profile';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user ? (
        <div>
          <Login setUser={setUser} />
          <Signup setUser={setUser} />
        </div>
      ) : (
        <Profile user={user} />
      )}
    </div>
  );
};

export default ProfilePage;
