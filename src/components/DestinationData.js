import React, { Component } from "react";
import "../style/destinationStyle.css";

class DestinationData extends Component {
  render() {
    return (
      <div>
        <div className={this.props.className}>
          <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
          </div>

          <div className="image">
            <img
              src={this.props.img1}
              alt="Arugam Bay"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
                borderRadius: "10px", // Optional: Rounded corners
                boxShadow: "0 4px 8px rgb(0, 0, 0)", // Subtle shadow
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)"; // Slight zoom on hover
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 0, 0, 0.3)"; // Enhanced shadow on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"; // Reset zoom
                e.currentTarget.style.boxShadow =
                  "0 4px 8px rgba(0, 0, 0, 0.2)"; // Reset shadow
              }}
            />


            
            <img
              src={this.props.img2}
              alt="Arugam Bay"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
                borderRadius: "10px", // Optional: Rounded corners
                boxShadow: "0 4px 8px rgb(0, 0, 0)", // Subtle shadow
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)"; // Slight zoom on hover
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 0, 0, 0.3)"; // Enhanced shadow on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"; // Reset zoom
                e.currentTarget.style.boxShadow =
                  "0 4px 8px rgba(0, 0, 0, 0.2)"; // Reset shadow
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DestinationData;
