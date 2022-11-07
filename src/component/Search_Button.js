export default function Search_Button() {
    return (
        <div className="search_bor">
            <button className="location">
              <img className="loca_icon" src="./loca_icon.png"></img>
              <div className="area">
                <div className="loca_info"> 카테고리! </div>
              </div>
            </button>
            <div className="divide_y"></div>
            <input className="search_space" type="text" placeholder="자전거 도로 및 편의시설 검색" />
            <button className="search_button">
              <img src="./search_icon.png"></img>
            </button>
        </div>
    );
  }