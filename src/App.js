import React from 'react';
import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TinderCards from './TinderCards';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
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
    </div>

  );
}
export default App;
