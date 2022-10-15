import React from 'react';
import logo from './logo.svg';
import './App.css';
import './main1.css';
import './start_style.css';

function App() {

  let posts = '강남 고기 맛집';

  let oh = '오익준 넷플 시청예정';
  
  function asd() {
    return 100
  }
  
  return (
    <div className="App">
      <div class="con1">

        <img id="logo" src="./logo.png" />
      
        <div class="con2">
          <nav id="main_menu" class="main_menu">
            <ul>
              <li>
                <a href="">소개 및 사용법</a>
              </li>
              <li>
                <a href="">검색</a>
              </li>
              <li>
                <a href="">안전수칙</a>
              </li>
              <li>
                <a href="">자전거 정책</a>
              </li>
              <li>
                <a href="">코로나19</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="ride">
        <img src="./ride.jpg" width="100%" height="300px"/>
      </div>

      <div class="section">
        <input type="radio" name="slide" id="slide01" checked/>
        <input type="radio" name="slide" id="slide02"/>
        <input type="radio" name="slide" id="slide03"/>
        <div class="slidewrap">

          <ul class="slidelist">
            <li>
              <a>
                <img src="./black.jpg"/>
              </a>
            </li>
            <li>
              <a>
                <img src="./red.jpg"/>
              </a>
            </li>
            <li>
              <a>
                <img src="./puple.jpg"/>
              </a>
            </li>
          </ul>

          <div class="slide-control">
            
            <div class="control01">
              <label for="slide03" class="left"></label>
              <label for="slide02" class="right"></label>
            </div>

            <div class="control02">
              <label for="slide01" class="left"></label>
              <label for="slide03" class="right"></label>
            </div>

            <div class="control03">
              <label for="slide02" class="left"></label>
              <label for="slide01" class="right"></label>
            </div>
        
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
