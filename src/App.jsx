import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import Problem from './pages/Problem';
import Analysis from './pages/Analysis';
import Findings from './pages/Findings';
import Team from './pages/Team';
import Resources from './pages/Resources';

function App() {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="problem" element={<Problem />} />
          <Route path="analysis" element={<Analysis />} />
          <Route path="findings" element={<Findings />} />
          <Route path="team" element={<Team />} />
          <Route path="resources" element={<Resources />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;