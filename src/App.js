import React from 'react';
import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path ="/chat" element={<></>} />
          <Route path ="/" element={<TinderCards />} />
        </Routes>
      </Router>
    </div>

  );
}
export default App;
