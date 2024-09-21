import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main.jsx';
import Contact from './Pages/Contact.jsx'

const PSSNavigation = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="Contact.jsx" element={<Contact />}/>
    </Routes>
  </Router>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PSSNavigation />
  </React.StrictMode>
);


