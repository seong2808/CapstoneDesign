import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div className="header">
        <div className="con1">
            <Link to="/Home">
                <img id="logo" src="./logo.png" />
            </Link>
            <nav id="main_menu" className="main_menu">
                <Link to="/Intro">소개 및 사용법</Link>
                <Link to="/Ro">자전거 정책</Link>
                <Link to="/Safety">자전거 안전교육</Link>
                <Link to="/Search">검색</Link>
            </nav>
        

            <div className="more-btn">
            <i className="icon"></i>
            </div>
        </div>
        <div className="con1_space"></div>
        </div>
    );
  }