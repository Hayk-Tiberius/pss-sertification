import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main.jsx';
import Contact from './Pages/Contact.jsx'
import Applications from './Pages/Applications.jsx'
import Company from './Pages/Company.jsx'
import Info from './Pages/Info.jsx'
import Sertification from './Pages/Sertification.jsx';
import CompanyHeader from './Pages/company pages/CompanyHeader.jsx'
import Accreditations from './Pages/company pages/Accreditations.jsx'
import Policy from './Pages/company pages/Policy.jsx'
import Structure from './Pages/company pages/Structure.jsx'
import Director from './Pages/company pages/Director.jsx'
import Partners from './Pages/company pages/Partners.jsx'
import History from './Pages/company pages/History.jsx'
import Staff from './Pages/company pages/Staff.jsx'


const PSSNavigation = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/Applications" element={<Applications />}/>
      <Route path="/Company" element={<Company />}/>
      <Route path="/Info" element={<Info />}/>
      <Route path="/Sertification" element={<Sertification />}/>
      <Route path="/CompanyHeader" element={<CompanyHeader />}/>
      <Route path="/Accreditations" element={<Accreditations />}/>
      <Route path="/Policy" element={<Policy />}/>
      <Route path="/Structure" element={<Structure />}/>
      <Route path="/Director" element={<Director />}/>
      <Route path="/Partners" element={<Partners />}/>
      <Route path="/History" element={<History />}/>
      <Route path="/Staff" element={<Staff />}/>
    </Routes>
  </Router>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PSSNavigation />
  </React.StrictMode>
);


