import React from "react";
import "./Card.css";
function Card() {
  return (
    <div className="card">
      <h1>Explore Now</h1>
      <div className="card_block">
        <div className="card_element">
          <img
            src="https://www.desktopbackground.org/download/1920x1080/2011/12/08/309040_india-gate-delhi-wallpapers-for-desktop-in-hd_1920x1440_h.jpg"
            alt=""
          />
          <h3>New Delhi</h3>
        </div>
        <div className="card_element">
          <img
            src="https://www.desktopbackground.org/download/o/2013/07/29/614862_gateway-of-india-mumbai-taj-1920x1080-wallpapers_1920x1080_h.jpg"
            alt=""
          />
          <h3>Mumbai</h3>
        </div>
        <div className="card_element">
          <img
            src="https://i.pinimg.com/originals/cb/de/b8/cbdeb8a86abd7a02a3aa74c189c92029.jpg"
            alt=""
          />
          <h3>Chennai</h3>
        </div>
        <div className="card_element">
          <img
            src="https://www.india-briefing.com/news/wp-content/uploads/2013/11/Kolkata-City-Profile.jpg"
            alt=""
          />
          <h3>Kolkata</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
