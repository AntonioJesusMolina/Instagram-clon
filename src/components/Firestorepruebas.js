import React from "react";

import {collection, addDoc, getFirestore } from "firebase/firestore";
import {db} from "../config/firebase";

export const Firestorepruebas = () => {
  //const db = getFirestore();
  const coleccion = addDoc(collection(db,"usuarios") ,{nombre:"nombre"});
  console.log(coleccion);
  
  return <div></div>;
};
