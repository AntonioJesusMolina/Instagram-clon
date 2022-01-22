import React, { useEffect, useState } from "react";
import ajme from "../images/Ajme.png";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, makeStyles, Typography } from "@material-ui/core";
import fotoPerfil from "../images/Antonio-1.PNG";
import { getDatabase, ref, child, get } from "firebase/database";
import {db} from "../config/firebase";
import {collection } from "firebase/compat/firestore";


function Post({ nombre, textoPublicacion, imagenAvatar, urlimagen}) {
  const classes = useStyles();
 

  
  /*const muestraBaseDatos = () => {
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
  };*/

  return(
    <div className={classes.post}>
    <Card>
          <CardHeader
            avatar={<Avatar alt="Antonio" src={imagenAvatar}></Avatar>}
            title={nombre}
            subheader={new Date().toDateString()}
            action={<IconButton>
              
            </IconButton>}
          ></CardHeader>
          <CardMedia></CardMedia>

        </Card>
    </div>
  ) 
    
    
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
