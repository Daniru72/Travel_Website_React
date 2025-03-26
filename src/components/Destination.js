import React from 'react'
import "../style/destination.css";
import DestinationData from './DestinationData';

function Destination() {
  return (
    <div className='destination'>

        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>

       <DestinationData
       className='first-dest'
       heading="Malaysia"
       text="Malaysia is a diverse and vibrant travel destination known for its mix of modern cities, cultural heritage, 
       and breathtaking natural landscapes. Visitors can explore bustling metropolises like Kuala Lumpur, 
       with its iconic Petronas Towers and vibrant street food scene, or experience the colonial charm of George Town in Penang.
Nature lovers can trek through the ancient rainforests of Borneo, visit the tea plantations of the Cameron Highlands,
 or relax on the pristine beaches of Langkawi and the Perhentian Islands. Malaysia is also home to rich wildlife, including orangutans, proboscis monkeys, and diverse marine life.
The country’s multicultural influences—Malay, Chinese, and Indian—are reflected in its food, festivals, and architecture. 
Whether you're seeking adventure, relaxation, or a cultural experience, Malaysia offers something for every traveler.
 With a well-developed infrastructure and welcoming locals, it’s an accessible and rewarding destination year-round." 

        img1="https://images.pexels.com/photos/462671/pexels-photo-462671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        img2="https://images.unsplash.com/photo-1724031948257-8b3c68232ccc?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

       />

        <DestinationData
        className='first-dest-reverse'
       heading="Thailand"
        text="Thailand is a popular travel destination known for its stunning beaches, rich culture, and vibrant cities.
  Visitors can explore the bustling streets of Bangkok, with its ornate temples, vibrant markets, and lively nightlife.
  The island of Phuket, known for its pristine beaches and warm weather, is a popular destination for beach lovers.
  Chiang Mai, in northern Thailand, offers a more relaxed pace and is known for its historic temples and lush countryside.
  Nature lovers can visit the lush jungles of Khao Sok National Park, home to diverse wildlife and stunning landscapes.
  Thailand's culinary scene is diverse, with a range of traditional and modern dishes to choose from.
  Whether you're seeking relaxation, adventure, or a cultural experience, Thailand offers something for every traveler.
  With a well-developed infrastructure and welcoming locals, it's an accessible and rewarding destination year-round."
        img1="https://images.pexels.com/photos/3393546/pexels-photo-3393546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        img2="https://images.pexels.com/photos/2070485/pexels-photo-2070485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       />


    </div>
  )
}

export default Destination
