import React from "react";
import { useState } from "react";
import logo from "../images/Estagram.png";
import fotologin from "../images/fotologininsta.PNG";
import { makeStyles } from "@material-ui/core";
import { BrowserRouter, Link } from "react-router-dom";

export const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const registrarUsuario = async (e) => {
    e.preventDefault();
  };

  const login = async () => {};

  const logout = async () => {};

  return (
    <div>
      <div className={classes.login__distribucion}>
        <img className={classes.login__fotologin} src={fotologin} alt="" />
        <div className={classes.login___container}>
          <img className={classes.navlogo} src={logo} alt="" />
          <div>
            <form className={classes.login___input}>
              <input
                className={classes.login___inputElement}
                type="text"
                placeholder="Teléfono, usuario o correo electrónico"
              />
              <input
                className={classes.login___inputElement}
                type="password"
                placeholder="Contraseña"
              />
              <button className={classes.login___inputBoton} type="submit">
                Iniciar sesión
              </button>
              <span className={classes.login__separador}>O intenta</span>
              <a href="#" className="facebook-login">
                <i className="fab fa-facebook" /> Logéate con Facebook
              </a>
              <a className="password-reset" href="#">
                ¿Olvidó su contraseña?
              </a>
            </form>
          </div>
        </div>
      </div>
      <footer>
        <div className={classes.container}>
          <nav className={classes.footernav}>
            <ul className={classes.login__ul}>
              <li className={classes.login__li}>
                <a href="#">About Us</a>
              </li>
              <li className={classes.login__li}>
                <a href="#">Support</a>
              </li>
              <li className={classes.login__li}>
                <a href="#">Jobs</a>
              </li>
              <li className={classes.login__li}>
                <a href="#">Privacy</a>
              </li>
              <li className={classes.login__li}>
                <a href="#">Terms</a>
              </li>
              <li className={classes.login__li}>
                <a href="#">Profiles</a>
              </li>
              <li className={classes.login__li}>
                <a href="#">Languages</a>
              </li>
              <li className={classes.login__li}>
                <div className="copyright-notice">&copy; 2022 Ajme</div>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
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
    marginTop: "10px",
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
