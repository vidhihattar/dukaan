// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Overview from './components/Overview';


function App() {
  return (
    <div className='container'>
            <Sidebar />
      <div className="content">
        <Topbar/>
        <div className="main-content">
          <Overview/>
        </div>

        
      </div>
    </div>
    

  );
}

export default App;
