import { Avatar, Button } from "@material-ui/core";
import {
  FavoriteOutlined,
    Language,
  NotificationsOutlined,
  Search,
} from "@material-ui/icons";
import React from "react";
import "./Header.css";
import {auth} from './firebase'
import firebase from 'firebase'
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import Popup from "./Popup";
function Header() {
  const [{user}] = useStateValue();
const history = useHistory();
  const signIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    auth
  .signInWithPopup(provider).catch((error) => {
    alert(error.message)
  });
  }
  const searchPage = (e) => {
    e.preventDefault();
    history.push("/searchPage");
  }
  const pop = () =>{
    document.getElementById("pop").classList.toggle("head_pop_none");
  }
  return (
    <div className="header">
      <div className="headerLeft">
        <img src="https://cdn.onlinewebfonts.com/svg/img_394016.png" alt="" />
      </div>
      <div className="headerCenter">
        <form className="searchBar">
        <Search />
        <input type="text" placeholder="Search Nearby"/>
        <Button style={{display: 'none'}}  type = "submit" onClick={searchPage}>Search</Button>
        </form>
      </div>
      <div className="headerRight">
      <div className="headerRight_options">
          <Language />
          <h3>Join Us</h3>
        </div>
        <div className="headerRight_options">
          <NotificationsOutlined />
          <h3>Alert</h3>
        </div>
        <div className="headerRight_options">
          <FavoriteOutlined />
          <h3>Trips</h3>
        </div>
        {
          user ? (<Avatar src={user?.photoURL} onClick={pop}/>):(<Avatar onClick={signIn}/>)
        }
        <div className="head_pop head_pop_none" id="pop">
        <Popup/>
        </div>
      </div>
    </div>
  );
}

export default Header;
