import React, { useEffect, useState } from "react";
import { FIRESTORE } from "./firebaseConfig";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import SwipeButtons from "./SwipeButtons";
import Card from "./Card";
import { calculateSwipeId } from "./util";

function TinderCards(props) {
  const [people, setPeople] = useState([]);
  const [peopleIndex, setPeopleIndex] = useState(-1);

  useEffect(() => {
    getPeople(props.user.uid);
  }, [props.user.uid]);

  async function getPeople(uid) {
    const querySnapshot = await getDocs(collection(FIRESTORE, "people"));

    let peopleList = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const { name, bio } = doc.data();
      if (doc.id === uid) return;

      peopleList.push({
        id: doc.id,
        name: name,
        bio: bio
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
    const swipeId = calculateSwipeId(props.user.uid, people[peopleIndex].id);
    const swipeRef = doc(FIRESTORE, 'swipes', swipeId);
    setDoc(swipeRef, { [props.user.uid]: true }, { merge: true });

    setPeopleIndex(peopleIndex - 1);
  }

  let peopleCards;
  if (peopleIndex < 0) {
    peopleCards = <Card empty={true} message={"Out of Potential Matches! Come back later for more"} />;
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
    <div className="centered-container">
      <div className="tinder-cards-container">
        {peopleCards}
      </div>
      <SwipeButtons onLeftSwipe={onLeftSwipe} onRightSwipe={onRightSwipe} />
    </div>
  )
}

export default TinderCards;