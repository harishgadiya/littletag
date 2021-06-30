import React, { useEffect, useState } from 'react';
import { auth } from '../config/firebase-config';

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  });

  return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
};

export default UserProvider;
