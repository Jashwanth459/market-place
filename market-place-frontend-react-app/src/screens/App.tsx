import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import { routes } from '../routes/page_routes'

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={<route.content />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
