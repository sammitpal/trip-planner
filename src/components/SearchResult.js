import { Button } from "@material-ui/core";
import { FavoriteBorder, Star } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import "./SearchResult.css";
function SearchResult({id, img, title, description, star, price, location }) {
  const history = useHistory();
  const checkout = () =>{
    history.push(`/checkout/${id}`)
  }
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <div className="result_info">
        <FavoriteBorder className="favorite"/>
        <div className="info_header">
          <p>{location}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="info_footer">
          <p>
            <Star className="star" /> {star}
          </p>
          <h4>₹{price}/night</h4>
          <Button variant="contained" className="button" onClick={checkout}>Reserve</Button>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
