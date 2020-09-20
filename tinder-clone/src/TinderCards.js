import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Suji",
      url: "https://img.hankyung.com/photo/201910/BF.20832019.1.jpg",
    },
    {
      name: "Sana",
      url:
        "https://i.pinimg.com/736x/83/90/82/839082ad7bbd988d66540275ac11bba1.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            ></div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
