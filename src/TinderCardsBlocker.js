import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import Card from "./Card";
import { STORAGE } from "./firebaseConfig";
import TinderCards from "./TinderCards";

function TinderCardsBlocker(props) {
  const [imageExists, setImageExists] = useState(false);

  useEffect(() => {
    getDownloadURL(ref(STORAGE, `people/${props.user.uid}`))
      .then(_ => setImageExists(true))
      .catch(_ => setImageExists(false));
  }, [props.user.uid])
  
  return imageExists ? <TinderCards user={props.user} /> : (
    <div className="centered-container">
      <div className="tinder-cards-container">
        <Card empty={true} message={"Set up your profile to be able to swipe!"} />
      </div>
    </div>
  );
}

export default TinderCardsBlocker;