import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Members from './Members/Members';
import MemberDetails from './MemberDetails/MemberDetails';
import DeleteMember from './DeleteMember/DeleteMember';
import MemberForm from './MemberForm/MemberForm';
import CovidInfo from './MemberCovidDetails/CovidDetails';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Members />} />
          <Route path="/member/:id" element={<MemberDetails />} />
          <Route path="/member/:id/EditMember" element={<MemberForm />} />
          <Route path="/member/:id/DeleteMember" element={<DeleteMember />} />
          <Route path="/member/:id/MemberCovidInfo" element={<CovidInfo />} />
          <Route path="/member/addMember" element={<MemberForm />} />
        </Routes>
      </Layout>
    </Router>

  )
}

export default App;
