import Home from "./components/Home";
import Order from "./components/Order";
import HomeContainer from "./container/HomeContainer";
import Details from "./components/Details";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./styles/App.scss";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/order">
        <Order />
      </Route>
      <Route path="/lists">
        <HomeContainer />
      </Route>
      <Route path="/details/:id">
        <Details />
      </Route>
      {/* <Redirect strict to="/" /> */}
    </Router>
  );
}

export default App;
