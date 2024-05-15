import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Education from "./Education";
import Experience from "./Experience";
import Contact from "./Contact";
import PersonalDetails from "./PersonalDetails";
import Profile from "./Profile";
import Navigation from "./Navigation";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>
          Subhash Nalam<sub>(Automation Tester)</sub>
        </h1>
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" exact element=<Profile /> />
            <Route path="/personal-details" element=<PersonalDetails /> />
            <Route path="/education" element=<Education /> />
            <Route path="/experience" element=<Experience /> />
            <Route path="/contact" element=<Contact /> />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
