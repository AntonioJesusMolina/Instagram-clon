import { Navbar } from "./components/Navbar";
import Post from "./components/Post";

import { makeStyles, Switch } from "@material-ui/core";
import { Login } from "./components/Login";
import { Portada } from "./components/Portada";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Register } from "./components/Register";

function App() {
  return (
    <div>
     {/*<Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Portada} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
     </Router>*/}
    <Portada/>
    </div>
    
  );
}
const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default App;
