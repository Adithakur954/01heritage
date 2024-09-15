// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import HeritageList from './components/HeritageList';

function App() {
  console.log('Rendering App component');
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/heritage" element={<HeritageList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; // Make sure to export the App component as the default export