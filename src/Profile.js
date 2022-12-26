import LoadingButton from '@mui/lab/LoadingButton';
import TextField from "@mui/material/TextField";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import Card from "./Card";
import { FIRESTORE, STORAGE } from "./firebaseConfig";
import { getFirebasePersonImageUrl } from './util';

function Profile(props) {
  const [isSaveLoading, setIsSaveLoading] = useState(false);

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const [originalImageUrl, setOriginalImageUrl] = useState("");

  useEffect(() => {
    getUserInfo();
  }, []);

  async function getUserInfo() {
    const docRef = doc(FIRESTORE, "people", props.user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const {
        name, bio
      } = docSnap.data();

      // const url = await getDownloadURL(ref(STORAGE, `people/${props.user.uid}`));
      // console.log(url);
      const url = getFirebasePersonImageUrl(props.user.uid);

      setName(name);
      setBio(bio);
      setImageUrl(url);
      setOriginalImageUrl(url);
    } else {
      // doc.data() will be undefined in this case
      setName(props.user.displayName);
    }
  }

  function handleUpload(e) {
    console.log("upload", e.target.files);
    const tempImageFile = e.target.files[0];
    const tempUrl = URL.createObjectURL(e.target.files[0]);
    console.log(tempUrl);
    setImageUrl(tempUrl);
    setImageFile(tempImageFile);
  }

  async function saveProfile() {
    // if there's no imageUrl or name, show error
    if (!imageUrl || !name) {
      // error
      return;
    }

    setIsSaveLoading(true);

    // if the url changed, save the new image to google storage
    let uploadedUrl = originalImageUrl;
    if (originalImageUrl !== imageUrl) {
      // save the new image to google storage
      const storageRef = ref(STORAGE, `people/${props.user.uid}`);

      // 'file' comes from the Blob or File API
      const snapshot = await uploadBytes(storageRef, imageFile);
      console.log(snapshot);
      uploadedUrl = snapshot.ref.fullPath;
    }

    // save the name, bio to user's profile
    const userRef = doc(FIRESTORE, 'people', props.user.uid);
    await setDoc(userRef, { name: name, bio: bio }, { merge: true });

    setIsSaveLoading(false);
  }

  const imageCard = imageUrl ? (
    <Card person={{ name: name, id: props.user.uid, bio: bio }} />
  ) : <Card empty={true} message={"Please upload a photo to be able to swipe!"} showUpload={true} onUpload={handleUpload} />

  return (
    <div className="centered-container">
      <div className="tinder-cards-container">
        {imageCard}
      </div>
      <div style={{ marginTop: "40px" }}>
        <TextField
          fullWidth
          label="Name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Bio"
          placeholder="Your Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
      <LoadingButton loading={isSaveLoading} style={{ marginTop: "20px" }} fullWidth variant="contained" onClick={saveProfile}>Save</LoadingButton>
    </div>
  );
}

export default Profile;