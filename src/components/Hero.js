import React from 'react'
import "../style/heroStyle.css";

function Hero(props) {
  return (
    <div className={props.cName}>

      <img className='imghero' alt="HerpImg"src={props.heroImg}/>
   
        <div className='heroText'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>

            <a href={props.url} className={props.btnClass}>{props.btnText}</a>
        </div>
   
    </div>


  )
}

export default Hero
