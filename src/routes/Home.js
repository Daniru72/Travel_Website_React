import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carrosel from "../components/Carrosel";
import Destination from "../components/Destination";
import Card from "../components/ImageCard";

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
        text="From seeing a geisha show or walking the famous Fushimi Inari shrine in Kyoto to exploring
       the bustling metropolis of Tokyo or staring out at Mount Fuji,
       here’s our list of the best places to visit in Japan."
      />
    </div>
    <div className="col-md-4 col-sm-6 col-lg-3 mb-4">
      <Card
        src="https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2023/09/29193141/lake-kawaguchi.jpeg"
        title="Thailand"
        text="From the vibrant cities of Bangkok and Chiang Mai to the island escapes of Phuket and Ko Samui, here are the best places to visit in Thailand."
      />
    </div>
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
        src="https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2023/09/29193141/lake-kawaguchi.jpeg"
        title="Japan"
        text="From seeing a geisha show or walking the famous Fushimi Inari shrine in Kyoto to exploring
       the bustling metropolis of Tokyo or staring out at Mount Fuji,
       here’s our list of the best places to visit in Japan."
      />
    </div>
  </div>
</div>

     
    </div>
  );
}

export default Home;
