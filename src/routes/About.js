import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function About() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1571624436279-b272aff752b5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="About Us"
        text="We are a team of professionals"
      />
    </div>
  );
}

export default About;
