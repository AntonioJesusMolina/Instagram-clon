import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

export const Register = () => {
  const classes = useStyles();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const registrarUsuario = (e) => {
    e.preventDefault();
    /*auth
      .createUserWithEmailAndPassword(registerEmail, registerPassword)
      .then((res) => alert("Usuario registrado"));*/
  };

  return (
    <div className="mt-4">
      <form onSubmit={registrarUsuario} className="form-group mt-3">
        <input
          onChange={(e) => {
            setRegisterEmail(e.target.value);
          }}
          className={classes.login___inputElement}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => {
            setRegisterPassword(e.target.value);
          }}
          className={classes.login___inputElement}
          type="password"
          placeholder="Contraseña"
        />
        <input
          className="btn btn-block btn-info"
          type="submit"
          value="Registrar"
        />
      </form>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  login___container: {
    border: "1px solid #d3d3d3",
    padding: "50px",
    display: "center",
    marginTop: "10%",
    marginLeft: "0%",
    marginRight: "10%",
    marginBottom: "0%",
  },
  login___input: {
    fontSize: "1rem",
    display: "flex",
    flexDirection: "column",
    objectFit: "contain",
    alignItems: "center",
  },
  login___inputElement: {
    width: "100%",
    fontSize: "0.65rem",
    background: "#EAEAEA",
    marginTop: "10px",
    padding: "0.8rem",
    marginBottom: "0.5rem",
    border: "1px solid black",
    borderRadius: "0.4rem",
  },
  login___inputBoton: {
    width: "99%",
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
  login__distribucion: {
    /*display: "flex",
    flexDirection: "row",
    objectFit: "contain",
    alignItems: "center",*/
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    paddingTop: "2rem",
    justifyContent: "center",
  },
  login__fotologin: {
    marginLeft: "20%",
    marginTop: "10%",
  },
  login__separador: {
    fontSize: "1rem",
    color: "#999999",
    position: "relative",
    marginBottom: "2.5rem",
  },
  container: {
    padding: "5rem 0",
    display: "flex",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "1.3rem",
    flexWrap: "wrap",
    marginTop: "0",
  },
  login__ul: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    marginRight: "1.6rem",
    color: "#003569",
  },
  login__li: {
    marginRight: "1.6rem",
    color: "#003569",
  },
}));
