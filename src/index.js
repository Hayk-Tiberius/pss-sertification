import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main.jsx';
import Contact from './Pages/Contact.jsx'
import Applications from './Pages/Applications.jsx'
import Company from './Pages/Company.jsx'
import Info from './Pages/Info.jsx'
import Sertification from './Pages/Sertification.jsx';

const PSSNavigation = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="Contact.jsx" element={<Contact />}/>
      <Route path="Applications.jsx" element={<Applications />}/>
      <Route path="Company.jsx" element={<Company />}/>
      <Route path="Info.jsx" element={<Info />}/>
      <Route path="Sertification.jsx" element={<Sertification />}/>
    </Routes>
  </Router>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PSSNavigation />
  </React.StrictMode>
);


