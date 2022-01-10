import React from "react";
import ajme from "../images/Ajme.png";
import { makeStyles } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import fotoPerfil from "../images/Antonio-1.PNG";

function Post() {
  const classes = useStyles();
  return (
    <div className={classes.post}>
      <Avatar className={classes.post__avatar} alt="Antonio" src={fotoPerfil} />
      <h3>uSERNAME</h3>
      {/*header -> avatar + username*/}

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
