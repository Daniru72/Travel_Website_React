import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ImageCard(props) {
  return (
    

      
      <div style={{display: "flex", justifyContent: "center"}}>
      <Card style={{ width: '18rem', height: "600px", margin: "10px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", transition: "0.3s", borderRadius: "15px", overflow: "hidden", cursor: "pointer" }}
       onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.09)"; // Slight zoom on hover
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)"; // Enhanced shadow on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)"; // Reset zoom
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"; // Reset shadow
      }} >
      <Card.Img variant="top" style={{height: "300px"}}  src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
       
      </Card.Body>
    </Card>
      </div>
    
   
  )
}

export default ImageCard
