
import React from "react";
import "./App.css";
import "./banner.css";
import "./start_style.css";
import Main1 from "./component/Main1";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Intro from "./component/Intro";
import Header from "./component/Header";
import Search from "./component/Search";
import Safety from "./component/Safety";

function App() {
  return (
    <BrowserRouter>
    
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main1 />
          </Route>
          <Route path="/Home">
            <Main1 />
          </Route>
          <Route path="/Intro">
            <Intro />
          </Route>
          <Route path="/Safety">
            <Safety />
          </Route>
          <Route path="/Search">
            <Search />
          </Route>
        
        </Switch>

        <hr></hr>
        <div className="footer">빈 공간</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
