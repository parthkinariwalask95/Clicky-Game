import React from "react";
import "./navbar.css";


const Navbar = props => (
  <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header"></div>
    <ul className="nav navbar-nav">
      <li className="li1">Clicky Game</li>
      <li className="li2"><marquee>Click an image to begin!</marquee></li>
      <li className="li3">Score:{props.score}&nbsp;&nbsp;</li>
      <li className="li4">Top score{props.highestscore}</li>
      

    </ul>
  </div>
</nav>
  );
  
  export default Navbar;
  