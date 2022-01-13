import React from "react";
import ajme from "../images/Ajme.png";
import { makeStyles } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import fotoPerfil from "../images/Antonio-1.PNG";
import { getDatabase, ref, child, get } from "firebase/database";
//PARA LEERE LOS POST MIRAMOS EL EJEMPLO DEL PDF DE PATRICIA DE LOCALIDADES

function Post() {
  const classes = useStyles();

  const muestraBaseDatos = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `publicaciones`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={classes.post}>
      <Avatar className={classes.post__avatar} alt="Antonio" src={fotoPerfil} />
      <h3>Username</h3>
      {muestraBaseDatos()}
      {console.log("prueba")}

      <img className={classes.post__image} src={ajme} />

      <h4 className={classes.post__text}>Mi logo para mis proyectos</h4>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  post: {
    width: "100%",
    objectFit: "contain",
  },
  post__image: {},
  post__text: {
    fontWeight: "normal",
  },
}));

export default Post;
