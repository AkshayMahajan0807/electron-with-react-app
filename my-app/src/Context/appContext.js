import React, {useEffect, createContext, useContext, useState } from 'react';
import { users } from "../data";
const AppContext = createContext(null);

const AppContextProvider = (props) => {
  const [user, setUser] = useState({});

  const onLogin = (userName) => {
    let obj = users.find(o => o.username === userName);
    setUser(obj);
  };
  
  const onLogOut = () => {
    setUser('');
  };

  return (
    <AppContext.Provider
      value={{
        onLogin,
        onLogOut,
        user,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

/***
 *
 * Hooks providing Context data
 *
 ***/
const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error('useAppContext must be used within a AppContextProvider component');
  }

  return context;
};

export { AppContextProvider, useAppContext };
