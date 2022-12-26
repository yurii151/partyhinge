import Button from '@mui/material/Button';
import { getFirebasePersonImageUrl } from './util';

function Card(props) {
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
        style={{ backgroundImage: `url(${getFirebasePersonImageUrl(props.person.id)})` }}
        className="card"
      >
        <h3>{props.person.name}</h3>
      </div>
    );
}

export default Card;