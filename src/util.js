import { v5 as uuidv5 } from 'uuid';

const NAMESPACE = "9d23c98f-93a1-4a20-abf4-739731b7f593";
export function calculateSwipeId(id1, id2) {
  let firstOrderedId;
  let secondOrderedId;
  if (id1 <= id2) {
    firstOrderedId = id1;
    secondOrderedId = id2;
  } else {
    firstOrderedId = id2;
    secondOrderedId = id1;
  }

  return uuidv5(`${firstOrderedId}${secondOrderedId}`, NAMESPACE);
}