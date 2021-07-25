import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Resetpassword from './components/Resetpassword';

function App() {
  return (
    <BrowserRouter>

      <Switch>
        <Route exact path="/home" >
        <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/register" >
        <Register />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/login" >
        <Login />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/forgotpassword" >
        <ForgotPassword />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/resetpassword" >
        <Resetpassword />  
        </Route>       
      </Switch>


    </BrowserRouter>
  );
}

export default App;
