import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

function Home() {
  return (
    <div>
       
       <Navbar/>
       <Hero 
       cName="hero"
       heroImg="https://images.unsplash.com/photo-1527142879-95b61a0b8226?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       title="Your Journey Your Story"
       text="Choose your favorite destination"
       btnText="Travel Plan"
       btnClass="show"
         url="/"
       />

       
    </div>
  )
}

export default Home
