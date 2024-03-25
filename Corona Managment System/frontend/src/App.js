import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Members from './Members/Members';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Members />} />
        </Routes>
      </Layout>
    </Router>

  )
}

export default App;
