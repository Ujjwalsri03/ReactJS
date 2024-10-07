import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddPerson from './components/AddPerson/AddPerson'
import RetrieveInfo from './components/RetrieveInfo/RetrieveInfo'
import './App.css'



function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Person Information Manager</h1>
        </header>

        <div className="tabs">
          <Link to="/add-person" className="tab-link">Add New Person</Link>
          <Link to="/retrieve-info" className="tab-link">Retrieve Information</Link>
        </div>

        <div className="tab-content">
          <Routes>
            <Route path="/add-person" element={<AddPerson />} />
            <Route path="/retrieve-info" element={<RetrieveInfo />} />
            <Route path="/" element={<AddPerson />} /> {/* Default Route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
