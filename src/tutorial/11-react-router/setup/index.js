import React from 'react';
// react router
import { HashRouter, Routes, Route } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';

const ReactRouterSetup = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/people" element={<People />} />
        <Route path="/:id" element={<Person />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  );
};

export default ReactRouterSetup;
