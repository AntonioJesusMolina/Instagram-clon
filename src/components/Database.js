import React, { useEffect, useState } from "react";
import Post from "./Post";
import { db } from "../config/firebase";
import instalogo from "../images/Estagram.png";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Link,
  List,
  makeStyles,
  Menu,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export const Database = () => {
  const classes = useStyles();
  const [posts, setPost] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    db.collection("publicaciones").onSnapshot((snapshot) => {
      setPost(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <>
      <div>
        <AppBar position="sticky" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <img src={instalogo} className={classes.logo} alt="Logo" />
            <Button className={classes.botonlogout}>Log Out</Button>
            <IconButton
              edge="end"
              className={classes.menubutton}
              onClick={() => setOpen(!open)}
            >
              
              <MenuIcon fontSize="large"></MenuIcon>
            </IconButton>
            <Typography variant="h6">Este es el menu de isntagram</Typography>
          </Toolbar>
        </AppBar>

        <Grid container className={classes.gridcard}>
          <Grid item xs={12} style={{ height: "25vh", display: "grid" }}>
            <Typography variant="h3">Novedades</Typography>
          </Grid>

          <Grid item container xs={12} justifyContent="flex-start">
            <Grid item xs={3}>
              {posts.map(({ id, post }) => (
                <Post
                  key={id}
                  nombre={post.nombre}
                  textoPublicacion={post.textoPublicacion}
                  imagenAvatar={post.imagenAvatar}
                  urlimagen={post.urlimagen}
                />
              ))}{" "}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  gridcard: {
    marginLeft: 50,
  },
  menubutton: {
    display: "block",
      color: "#999",
      position: "absolute",
      top: 0,
      right: 10,
  },
  botonlogout:{
    right:10,
    "&:hover": {
      cursor: "pointer ",
    },
    display: "block",
      color: "#999",
      position: "absolute",
      top: 10,
      right: 60,
  },
  toolbar: {
    display: "flex",
    objectFit: "contain",
    alignItems: "center",
  },
  appbar: {
    //Color de fondo, He usado el mismo color que el fondo del logo
    backgroundColor: "white",
    marginBottom: 50,
    //Para asegurarnos que va a tener el 100% de la anchura
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
}));
