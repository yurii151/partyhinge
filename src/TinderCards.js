import React, { useEffect, useState } from "react";
import { FIRESTORE } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import SwipeButtons from "./SwipeButtons";
import Card from "./Card";

function TinderCards() {
  const [people, setPeople] = useState([]);
  const [peopleIndex, setPeopleIndex] = useState(-1);

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
    setPeopleIndex(peopleList.length - 1);
  }

  function onLeftSwipe() {
    // register a dislike

    setPeopleIndex(peopleIndex - 1);
  }

  function onRightSwipe() {
    // register a like

    setPeopleIndex(peopleIndex - 1);
  }

  let peopleCards;
  if (peopleIndex < 0) {
    peopleCards = <Card empty={true} />;
  } else if (peopleIndex === 0) {
    peopleCards = <Card person={people[peopleIndex]} />;
  } else {
    peopleCards = (
      <>
        <Card person={people[peopleIndex - 1]} />
        <Card person={people[peopleIndex]} />
      </>
    );
  }

  return (
    <div>
      <div className="tinder-cards-container">
        {peopleCards}
      </div>
      <SwipeButtons onLeftSwipe={onLeftSwipe} onRightSwipe={onRightSwipe} />
    </div>
  )
}

export default TinderCards;