import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Members from './Members/Members';
import MemberDetails from './MemberDetails/MemberDetails';
import DeleteMember from './DeleteMember/DeleteMember';
import MemberForm from './MemberForm/MemberForm';
import CovidInfo from './MemberCovidDetails/CovidDetails';

// Main component containing routes for different pages
function App() {
  return (
    <Router>
      {/* Main layout component */}
      <Layout>
        {/* Define routes */}
        <Routes>
          <Route path='/' element={<Members />} /> {/* Route for Members page */}
          <Route path="/member/:id" element={<MemberDetails />} /> {/* Route for MemberDetails page */}
          <Route path="/member/:id/EditMember" element={<MemberForm />} /> {/* Route for editing member */}
          <Route path="/member/:id/DeleteMember" element={<DeleteMember />} /> {/* Route for deleting member */}
          <Route path="/member/:id/MemberCovidInfo" element={<CovidInfo />} /> {/* Route for member's Covid details */}
          <Route path="/member/addMember" element={<MemberForm />} /> {/* Route for adding new member */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
