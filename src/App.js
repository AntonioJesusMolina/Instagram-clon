import { Navbar } from "./components/Navbar";
import Post from "./components/Post";
import { makeStyles} from "@material-ui/core"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Post/>
      {/*Post*/}
      {/*Post*/}
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default App;
