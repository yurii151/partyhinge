import Button from '@mui/material/Button';
import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { STORAGE } from './firebaseConfig';

function Card(props) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (props.person) {
      getDownloadURL(ref(STORAGE, `people/${props.person.id}`))
        .then(url => setImageUrl(url))
    }
  }, [props.person])

  const uploadButton = props.showUpload ? (
    <Button variant="contained" component="label">
      Upload
      <input hidden accept="image/*" multiple type="file" onChange={(e) => props.onUpload(e)} />
    </Button>
  ) : <></>;

  return props.empty ?
    (
      <div className="card card-empty">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3>{props.message}</h3>
        </div> 
        {uploadButton}
      </div>
    ) : (
      <div
        style={{ backgroundImage: `url(${props.url ? props.url : imageUrl})` }}
        className="card"
      >
        <h3>{props.person.name}</h3>
      </div>
    );
}

export default Card;