import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Complaints from "./components/Complaints";
import DashBoard from "./components/DashBoard";
import Offers from "./components/Offers";
import MultiThemeprovider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <MultiThemeprovider>
        <div className="App">
          <Route path="/" exact component={Login} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/admin/Complaints" exact component={Complaints} />
          <Route path="/admin/DashBoard" exact component={DashBoard} />
          <Route path="/admin/Offers" exact component={Offers} />
        </div>
      </MultiThemeprovider>
    );
  }
}

export default App;
