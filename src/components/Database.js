import React, { useEffect, useState } from "react";
import Post from "./Post";
import { db } from "../config/firebase";
import instalogo from "../images/Estagram.png";
import yo from "../images/Antonio-1.PNG";
import {
  AppBar,
  Avatar,
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
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { MenuLateral } from "./MenuLateral";

export const Database = () => {
  const classes = useStyles();
  const [posts, setPost] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const auth = getAuth();
  const salir = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

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
            <Avatar className={classes.avatar} src={yo}></Avatar>
            <Button className={classes.botonlogout} onClick={salir}>
              Log Out
            </Button>
            <IconButton
              edge="end"
              className={classes.menubutton}
              onClick={() => setOpen(!open)}
            >
              <MenuIcon fontSize="large"></MenuIcon>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Grid container className={classes.gridcard}>
          <Grid item xs={12} style={{ height: "5vh", display: "grid" }}>
            <Typography variant="h5">Ultimos Post</Typography>
          </Grid>
          <Grid>
            <MenuLateral></MenuLateral>
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
  botonlogout: {
    "&:hover": {
      cursor: "pointer ",
    },
    display: "block",
    color: "#999",
    position: "absolute",
    top: 10,
    right: 60,
  },
  avatar: {
    display: "block",
    color: "#999",
    position: "absolute",
    top: 10,
    right: 150,
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
