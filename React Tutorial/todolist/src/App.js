import React, {Component} from "react";
import Navbar from "./components/navbar";
import User from "./components/User"
import './App.css';

class App extends Component{
  render(){
     return (
      <div className="container">
       <Navbar title="User App"/>
       <hr/>
       <User
       name="Ahmet"
       salary="5000"
       department="Bilisim"
       />
       <User
       name="Oguz"
       salary="6000"
       department="Bilisim"
       />
    </div>
  );
}};

export default App;
