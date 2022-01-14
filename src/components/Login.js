import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FormularioFormik } from "./FormularioFormik";
import { LoginGoogle } from "./LoginGoogle";



export const Login = () => {
  const classes = useStyles();

  

  return (
    <div className={classes.login___input}>
      <FormularioFormik />
      <LoginGoogle />
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  login___input: {
    fontSize: "1rem",
    display: "flex",
    flexDirection: "column",
    objectFit: "contain",
    alignItems: "center",
    marginLeft:"5%"
  },
}));
