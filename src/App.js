import React from "react";
import "./App.css";
import "./banner.css";
import "./start_style.css";
import Main1 from "./component/Main1";

function App() {
  
  return (
    <div className="App">
      <div className="con1">
        <img id="logo" src="./logo.png" />

        <nav id="main_menu" className="main_menu">
          <a href="#">소개 및 사용법</a>
          <a href="#">자전거 정책</a>
          <a href="#">자전거 안전교육</a>
          <a href="#">검색</a>
        </nav>

        <div className="more-btn">
          <i className="icon"></i>
        </div>
      </div> 

      <Main1 />
    
      <hr></hr>
      <div className="footer">
        빈 공간
      </div>
    </div>
  );
}

export default App;
