import React from 'react'
import  './elon_image.png'
import './TinderCards.css'
import {useState} from 'react';
import TinderCard from 'react-tinder-card'
function TinderCards() {
  const [people,setPeople] = useState([
    {
        name:'Elon Musk',
        url: 'https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/04/931/523/thumbnail_elon-musk-twitter-.jpg?ve=1&tl=1'
        
    },
    {
        name:'Jeff Bezos',
        url:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1000w,f_auto,q_auto:best/newscms/2019_06/2746701/190208-jeff-bezos-ew-1135a.jpg"
    },

  ]);

  const swiped=(direction,NameToDelete)=>{
    console.log("Romoving " + NameToDelete)
  }
  const outOFFrame=(name)=>{
    console.log(name+"left The screen!")
  }

    return (

    <div className='TinderCards'>
        <div className='tinderCards__cardsContainer'>
        
        {people.map((person)=>(
        <TinderCard
            className='Swipe'
            key={person.name}
            preventSwipe={['up','down']}
            onSwipe={(dir)=>swiped(dir,person.name)}
            onCardLeftScreen={()=>outOFFrame(person.name)}
        >
            <div
                style={{
                    backgroundImage: `url(${person.url})`}}
                className='card'
            >  
            
            <h3 className='card_h3'>{person.name}</h3>
            </div>
        </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards
