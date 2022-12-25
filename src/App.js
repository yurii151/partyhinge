import React, { useEffect, useState } from 'react';
import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TinderCards from './TinderCards';
import Profile from './Profile';
import { onAuthStateChanged } from 'firebase/auth';
import { AUTH } from './firebaseConfig';
import LoginPage from './LoginPage';

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
        <Route path ="/profile" element={<Profile />} />
        <Route path ="/" element={
          <>
            <TinderCards />
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
