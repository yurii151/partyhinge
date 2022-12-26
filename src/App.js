import React, { useEffect, useState } from 'react';
import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Profile from './Profile';
import { onAuthStateChanged } from 'firebase/auth';
import { AUTH } from './firebaseConfig';
import LoginPage from './LoginPage';
import TinderCardsBlocker from './TinderCardsBlocker';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(AUTH, (user) => {
      if (user) {
        // signed in
        setUser(user);
      } else {
        // signed out
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const appContent = user ? (
    <Router>
      <Header/>
      <Routes>
        <Route path ="/profile" element={<Profile user={user} />} />
        <Route path ="/" element={
          <>
            <TinderCardsBlocker user={user} />
          </>
        }/>
      </Routes>
    </Router>
  ) : (
    <LoginPage />
  )

  return (
    <div className="App">
      {appContent}
    </div>
  );
}
export default App;
