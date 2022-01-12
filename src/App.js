import { Navbar } from "./components/Navbar";
import Post from "./components/Post";

import { makeStyles } from "@material-ui/core";
import { Login } from "./components/Login";
import { Portada } from "./components/Portada";
import { Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Portada />
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default App;
