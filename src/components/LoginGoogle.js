import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import * as AiIcons from "react-icons/ai";

const provider = new GoogleAuthProvider();

export const LoginGoogle = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const logingoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        alert("Usuario conectado con google");
        navigate("database");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div>
      
      <button
        className={classes.login___inputBoton}
        variant="contained"
        onClick={logingoogle}
      >
        Logéate con Google  <AiIcons.AiFillGoogleCircle/>
      </button>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  login___inputBoton: {
    
    objectFit: "contain",
    marginTop: "10px",
    marginBottom: "10px",
    height: "1.5rem",
    backgroundColor: "#3897f0",
    fontSize: "0.8rem",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "0.4rem",
    cursor: "pointer",
  },
}));
