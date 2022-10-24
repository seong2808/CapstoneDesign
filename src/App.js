import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./banner.css";
import "./start_style.css";

function App() {
  let posts = "";

  let oh = "";

  function asd() {
    return 100;
  }

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
      <div className="ride">
        <img src="./rideback.png" width="100%" height="100%" />
      </div>

      <div className="section">
        <input type="radio" name="slide" id="slide01" checked />
        <input type="radio" name="slide" id="slide02" />
        <input type="radio" name="slide" id="slide03" />
        <div class="slidewrap">
          <ul className="slidelist">
            <li>
              <a>
                <img src="./black.jpg" />
              </a>
            </li>
            <li>
              <a>
                <img src="./red.jpg" />
              </a>
            </li>
            <li>
              <a>
                <img src="./puple.jpg" />
              </a>
            </li>
          </ul>

          <div className="slide-control">
            <div className="control01">
              <label for="slide03" class="left"></label>
              <label for="slide02" class="right"></label>
            </div>

            <div className="control02">
              <label for="slide01" class="left"></label>
              <label for="slide03" class="right"></label>
            </div>

            <div className="control03">
              <label for="slide02" class="left"></label>
              <label for="slide01" class="right"></label>
            </div>
          </div>
        </div>
      </div>

      <div className="con2">
        빈 공간
      </div>

      <div className="con3">
        빈 공간
      </div>

      <div className="con4">
        빈 공간
      </div>

      <div className="con5">
        빈 공간
      </div>
    
    <hr></hr>
    <div className="footer">
      빈 공간
    </div>

    </div>
  );
}

export default App;
