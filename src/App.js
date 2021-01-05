import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Invoice from "./Components/Invoice";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
    {/* <Invoice/> */}
      <HashRouter>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/Signup" exact component={SignUp} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
