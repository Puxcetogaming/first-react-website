// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Greeting from './pages/Greeting/Greeting';
import Calculator from './pages/Calculator/Calculator';
import AlertEvent from './pages/Alert/Alert';
import MultipleInput from './pages/MultipleInput/MultipleInput';
import Timer from './pages/Timer/Timer';
import Images from './pages/Images/Images';
import Image from './pages/Images/Image'; // Import your dynamic image component
import Form from './pages/Form/Form';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar">
          <Link to="/">Home</Link> | 
          <Link to="/about">About</Link> | 
          <Link to="/greeting">Greeting</Link> | 
          <Link to="/calculator">Calculator</Link> | 
          <Link to="/alertevent">Alert Event</Link> | 
          <Link to="/multipleinput">Multiple Input</Link> | 
          <Link to="/timer">Timer</Link> | 
          <Link to="/images">Images</Link> |
          <Link to="/form">Form</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/greeting" element={<Greeting />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/alertevent" element={<AlertEvent />} />
          <Route path="/multipleinput" element={<MultipleInput />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/form" element={<Form />} />
          {/* The route for the images list */}
          <Route path="/images" element={<Images />} />
          {/* The dynamic route for an individual image */}
          <Route path="/images/:image" element={<Image />} />
          <Route path="*" element={<h2>404: Page Not Found</h2>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
