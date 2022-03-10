import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Todo from './pages/todo';
import Calendar from './pages/calendar';
import Notes from './pages/notes';
import Signup from './pages/sign-up';
import Signin from './pages/sign-in';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/todo" element={<Todo/>} />
        <Route exact path="/calendar" element={<Calendar />} />
        <Route exact path="/notes" element={<Notes />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/sign-up" element={<Signup />} />
        <Route exact path="/sign-in" element={<Signin />} />
        <Route exact path="*" element={<NotFound/>}  />
      </Routes>
    </Router>
  );
}

export default App;