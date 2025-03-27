import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ImageCard(props) {
  return (
    

      
      <div style={{display: "flex", justifyContent: "center"}}>
      <Card style={{ width: '18rem', height: "600px", margin: "10px" }}>
      <Card.Img variant="top" style={{height: "300px"}}  src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    
   
  )
}

export default ImageCard
