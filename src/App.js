import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Video from "./components/Video/Video";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/photos" component={Home} />
        <Route path="/videos" component={Video} />
      </Switch>
    </div>
  );
}

export default App;
