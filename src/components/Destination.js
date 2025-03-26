import React from 'react'
import "../style/destination.css";

function Destination() {
  return (
    <div className='destination'>

        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>

        <div className='first-dest'>
            <div className='des-text'>
                <h2>Arugam Bay</h2>
                <p>Unspoilt beaches and magnificent waves: 
                    it’s the ultimate ‘hangout’ for surfers and travellers from around the world.
                     Located on the South Eastern shoreline, ‘the Bay’ is possibly the ‘coolest’ 
                     little seaside town in Sri Lanka. 
                     Famed as one of the top ten surfing spots in the world,
                      it attracts big talent. With several local and international events taking place in Arugam Bay, 
                      the best time to visit would be May to August during the season.</p>
            </div>

            <div className='image'>
                <img src="https://images.unsplash.com/photo-1619531103472-7cc0d6479b59?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Arugam Bay" />
                <img src="https://images.unsplash.com/photo-1724031948257-8b3c68232ccc?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Arugam Bay" />
            </div>
            

        </div>

    </div>
  )
}

export default Destination
