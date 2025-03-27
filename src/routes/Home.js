import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carrosel from "../components/Carrosel";
import Destination from "../components/Destination";
import Card from "../components/ImageCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1527142879-95b61a0b8226?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Your Journey Your Story"
        text="Travel with us and make your journey memorable"
        btnText="Travel Plan"
        btnClass="show"
        url="/"
      />

      <Destination />
      <Carrosel />

      <h1
        style={{ marginBottom: "50px", marginTop: "50px", textAlign: "center" }}
      >
        Book Your Stay
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-lg-3 mb-4">
            <Card
              src="https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2023/09/29193141/lake-kawaguchi.jpeg"
              title="Japan"
              text="From seeing a geisha show or walking the famous Fushimi Inari shrine in Kyoto to exploring
       the bustling metropolis of Tokyo or staring out at Mount Fuji,
       here’s our list of the best places to visit in Japan."
            />
          </div>
          <div className="col-md-4 col-sm-6 col-lg-3 mb-4">
            <Card
              src="https://th.bing.com/th/id/OIP.iq3i4QDFNpg9oEWp-wrKkwHaEy?rs=1&pid=ImgDetMain"
              title="Malaysia"
              text="Malaysia is a country in Southeast Asia. it consists of 13 states and three federal territories, 
        separated by the South China Sea into two regions: Peninsular Malaysia and Borneo's East Malaysia. 
        Peninsular Malaysia shares a land and maritime border  "
            />
          </div>
          <div className="col-md-4 col-sm-6 col-lg-3 mb-4">
            <Card
              src="https://th.bing.com/th/id/OIP.xW-IIGIC3auZH6lOKXixsAHaF7?rs=1&pid=ImgDetMain"
              title="Thailand"
              text="From the vibrant cities of Bangkok and Chiang Mai to the island escapes of Phuket and Ko Samui, here are the best places to visit in Thailand."
            />
          </div>
          <div className="col-md-4 col-sm-6 col-lg-3 mb-4">
            <Card
              src="https://th.bing.com/th/id/OIP.QMjksFopZFkL26Z0PvDsDAHaFj?rs=1&pid=ImgDetMain"
              title="Maldives"
              text="The best islands in the Maldives include Rasdhoo for snorkeling with sharks, Ukulhas for a local, 
        family-friendly vibe, and Dhigurah for luxury resorts.
         Fonimagoodhoo is ideal for diving, while Maafushi offers affordability and excursions."
            />
          </div>
          <div className="col-md-4 col-sm-6 col-lg-3 mb-4">
            <Card
              src="https://th.bing.com/th/id/OIP.b3iFMAY9ZRZmAEv7MQ6oJAHaFG?rs=1&pid=ImgDetMain"
              title="Sri Lanka"
              text="Sri Lanka is a popular tourist destination. Tourism is a key industry that attracts international tourists yearly.
         Foreigners visit Sri Lanka to see nature, wildlife, historical monuments, and indigenous culture. 
        In 2018, tourist arrivals peaked at 2.5 million."
            />
          </div>
          <div className="col-md-4 col-sm-6 col-lg-3 mb-4">
            <Card
              src="https://th.bing.com/th/id/OIP.JZj8lHhDVDIjWz5VFGzu-QHaFe?rs=1&pid=ImgDetMain"
              title="Europe"
              text="Europe attracts more tourists than any other continent: over 600 million international visitors annually, more than half of the global market.
         Out of Earth's ten most visited countries, seven are in Europe, with good reason."
            />
          </div>
        </div>
      </div>

<Footer/>

    </div>
  );
}

export default Home;
