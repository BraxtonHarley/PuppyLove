import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from './firebase';
import "./Cards.css";

function Cards() {
  const [puppies, setPuppies] = useState([]);

  useEffect(() => {
    const unsubscribe = database
      .collection('puppies')
      .onSnapshot((snapshot) => 
          setPuppies(snapshot.docs.map((doc) => doc.data()))
      );
      return () => {
          unsubscribe();
      }
  }, []);


  return (
    <div>
      <div className="cardContainer">
        {puppies.map((puppy) => (
          <TinderCard
            className="swipe"
            key={puppy.name}
            preventSwipe={["up", "down"]} >
        
            <div
              style={{ backgroundImage: `url(${puppy.url})` }}
              className="card"
            >
              <h3>{puppy.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Cards;
