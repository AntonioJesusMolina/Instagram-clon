import React, { useEffect, useState } from "react";
import Post from "./Post";
import { db } from "../config/firebase";
import { makeStyles} from "@material-ui/core";

export const Database = () => {
  const classes = useStyles();
  const [posts, setPost] = useState([]);

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

  return <>
    <div>
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          nombre={post.nombre}
          textoPublicacion={post.textoPublicacion}
          imagenAvatar={post.imagenAvatar}
          urlimagen={post.urlimagen}
        />
        
      ))}
    </div>
    
    </>
  
};
const useStyles = makeStyles((theme) => ({
   
    
  
   
  }));
  
