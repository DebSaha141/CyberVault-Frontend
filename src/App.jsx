import React from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Sponsors from "./components/sponsors/Sponsors";
import LiveEventComponent from './components/events/eventposter.jsx'; 
import TestimonialSection from "./components/Testimonials/TestimonialSection";
import Hero from "./components/Hero/Hero"
import NotFound from "./components/NotFound/notFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About/about.jsx';
import RegistrationForm from './components/RegistrationForm/RegistrationForm.jsx';
import Login from "./pages/auth/SignIn.jsx";
import SignUp from './pages/auth/SignUp.jsx';
import HomePage from './pages/HomePage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <HomePage />
          </div>
        } />

        <Route path="/login" element={
          <div>
            <Navbar />
            <Login />
            <Footer />
          </div>} />
        
          <Route path="/signup" element={
          <div>
            <Navbar />
            <SignUp />
            <Footer />
          </div>} />
        
          <Route path="/form" element={
          <div>
            <Navbar />
            <RegistrationForm />
          </div>} />
        
        {/* Fallback Route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    // <>
    //   <RegistrationForm/>
    // </>
  );
}

export default App;


//api/form/:formid