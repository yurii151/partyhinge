import Button from '@mui/material/Button';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { AUTH } from './firebaseConfig';

function LoginPage() {
  function login() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(AUTH, provider)
      .then((_result) => {
        // // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // // The signed-in user info.
        // const user = result.user;
        // // ...
      }).catch((_error) => {
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // // ...
      });
  }

  return (
    <div className="login-container">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Login</h1>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Button variant="container" onClick={() => login()}>Login with Google</Button>
      </div>
    </div>
  );
}

export default LoginPage;