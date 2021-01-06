import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Frm from "./Components/Frm";
import Listone from "./Components/Listone";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/Signup" exact component={SignUp} />
          <Route path="/Frm" exact component={Frm} />
          <Route path="/listone" exact component={Listone} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
