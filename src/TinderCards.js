import React, { useEffect, useState } from "react";
import { FIRESTORE } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import SwipeButtons from "./SwipeButtons";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeople();
  }, []);

  async function getPeople() {
    const querySnapshot = await getDocs(collection(FIRESTORE, "people"));

    let peopleList = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const { name, url } = doc.data();
      peopleList.push({
        id: doc.id,
        name: name,
        url: url
      });
    });

    setPeople(peopleList);
  }

  function onLeftSwipe() {

  }

  function onRightSwipe() {
    
  }

  return (
    <div>
      <div className="tinder-cards-container">
        {people.map(person => (
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        ))}
      </div>
      <SwipeButtons onLeftSwipe={onLeftSwipe} onRightSwipe={onRightSwipe} />
    </div>
  )
}

export default TinderCards;