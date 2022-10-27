
import React from "react";
import "./App.css";
import "./banner.css";
import "./start_style.css";
import Main1 from "./component/Main1";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Intro from "./component/Intro";

function App() {
  return (
    <BrowserRouter>
    
      <div className="App">
        <div className="con1">
          <img id="logo" src="./logo.png" >
          </img>
          <nav id="main_menu" className="main_menu">
            <Link to="/Intro">소개 및 사용법</Link>
            <Link to="/ro">자전거 정책</Link>
            <Link to="/edu">자전거 안전교육</Link>
            <Link to="/sear">검색</Link>
          </nav>

          <div className="more-btn">
            <i className="icon"></i>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Main1 />
          </Route>
          <Route path="/Intro">
            <Intro />
          </Route>
        </Switch>

        <hr></hr>
        <div className="footer">빈 공간</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
