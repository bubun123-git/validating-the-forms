import React, { useState, useEffect, } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './Store/Auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storeduserloggdedininformation = localStorage.getItem('isLoggedIn')
    if (storeduserloggdedininformation === '1') {
      setIsLoggedIn(true);
    }

  }, []);


  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedin', '1')
    setIsLoggedIn(true)
  };


  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (

    <AuthContext.Provider value={{
      isLoggedin: isLoggedIn,
      onLogout: logoutHandler
    }}
    >
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>

  );
}

export default App;
