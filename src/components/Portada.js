import React, { useEffect, useState } from "react";
import { Login } from "./Login";
import { Button, makeStyles, RootRef } from "@material-ui/core";
import fotologin from "../images/fotologininsta.PNG";
import logo from "../images/Estagram.png";
import { Register } from "./Register";
import Post from "./Post";
import { Link, NavLink } from "react-router-dom";
import { almacenamiento} from "../config/firebase";
import { getStorage, ref, listAll } from "firebase/storage";
import { Database } from "./Database";
import * as AiIcons from "react-icons/ai";

export const Portada = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    const listRef = ref(almacenamiento, "imagenes");

    listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          //console.log(itemRef);
          setData((arr) => [...arr, itemRef]);
        });
      })
      .catch((error) => {});
  }, []);
  //console.log(data);

  const fotoLoginInsta = ref(almacenamiento, "imagenes/fotologininsta.PNG");
  console.log(fotoLoginInsta);

  return (
    <div>
      <div className={classes.login__distribucion}>
        <img className={classes.login__fotologin} src={fotologin} alt="" />
        <div className={classes.login___container}>
          <img className={classes.navlogo} src={logo} alt="" />
          <div>
            {/**/}
            <Login />

          </div>
          <form>
            <br />
            <a href="#" className={classes.portada__texto}>
              <i /> Logéate con Facebook<AiIcons.AiFillFacebook/>
            </a>
            <br />

            <a className={classes.portada__texto} href="#">
              ¿Olvidó su contraseña?
            </a>
            <br />
            <Link to="/register">
              <button className={classes.login___inputBoton}>Registrar</button>
            </Link>
          </form>
        </div>
      </div>
      <footer>
        <div className={classes.container}>
          <nav>
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
    marginRight: "10%",
    marginBottom: "10%",
    width: "30vh",
    height: "80%",
  },
  login__distribucion: {
    width: "100%",
    height: "80vh",
    display: "flex",
    //flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: "2rem",
  },
  login__fotologin: {
    width: "400px",
    height: "600px",
    marginLeft: "20%",
    marginTop: "10%",
  },
  portada__texto: {
    textAlign: "center",
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
