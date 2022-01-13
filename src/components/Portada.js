import React from "react";
import { Login } from "./Login";
import { makeStyles } from "@material-ui/core";
import fotologin from "../images/fotologininsta.PNG";
import logo from "../images/Estagram.png";
import { Register } from "./Register";

export const Portada = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.login__distribucion}>
        <img className={classes.login__fotologin} src={fotologin} alt="" />
        <div className={classes.login___container}>
          <img className={classes.navlogo} src={logo} alt="" />
          <div>
              
            <Login />
            <Register/>
          </div>
        </div>
      </div>
      <footer>
        <div className={classes.container}>
          <nav className={classes.footernav}>

            <ul className={classes.login__ul}>
              <li className={classes.login__li}>
                <a href="#">Quienes somos</a>
              </li>
              <li className={classes.login__li}>
                <a href="#">Soporte</a>
              </li>
              <li className={classes.login__li}>
                <a href="#">Empleo</a>
              </li>
              <li className={classes.login__li}>
                <a href="#">Privacidad</a>
              </li>
              <li className={classes.login__li}>
                <a href="#">Terminos</a>
              </li>
              <li className={classes.login__li}>
                <a href="#">Perfiles</a>
              </li>
              <li className={classes.login__li}>
                <a href="#">Idioma</a>
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
  login__distribucion: {
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
