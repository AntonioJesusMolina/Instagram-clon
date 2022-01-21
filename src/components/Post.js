import React, { useEffect, useState } from "react";
import ajme from "../images/Ajme.png";
import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, makeStyles, Typography } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
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

  return <>
    
    <div className={classes.post}>
      <Card>
        <CardHeader>
          avatar={
              <Avatar alt="Antonio" src={imagenAvatar} >{imagenAvatar}</Avatar>
          }
            
        </CardHeader>
        <IconButton aria-label="settings">
            
        </IconButton>
        <CardMedia
        component="img"
        image={urlimagen}
        alt="logo"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          
        </IconButton>
        <IconButton aria-label="share">
         
        </IconButton>
        </CardActions>


      </Card>
      
      
      <h3>{nombre}</h3>
      {/*muestraBaseDatos()*/}


       <img className={classes.post__image} src={urlimagen} />
       <h6 className={classes.post__text}>{textoPublicacion}</h6> 
      

      
    </div>
    </>
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
