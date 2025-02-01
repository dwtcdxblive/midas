import { useState } from 'react';
import './App.scss';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Page1 />} />
          <Route path='/page1' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
