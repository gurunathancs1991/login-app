import logo from './logo.svg';
import './App.css';
import Dashboard from '../src/components/Dashboard/Dashboard';
import Preferences from '../src/components/Preferences/Preferences';
import Login from '../src/components/login/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import react, {useState} from "react";
import useToken from './useToken';

function App() {

 const { token, setToken } = useToken();


  if(!token){
    return <Login setToken={setToken}/>
  }
  return (
   
  
    <div className="App">
        <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
        <Route path="/">
            <Preferences />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
