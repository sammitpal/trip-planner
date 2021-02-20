import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import SeachPage from "./components/SeachPage"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./components/firebase";
import {useEffect} from 'react'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import CheckOut from "./components/CheckOut";
import Bookings from "./components/Bookings";

const promise = loadStripe('pk_test_51I7BmYCkA4xmto7qRw65OUlN16jSSXnUMG3occDqD0vRfSCFcdq8rRHFDaaYyeC3ympsNciooYReG81hKYF9E9bQ000pMpcb8A');

function App() {
  const [{user},dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log("USER ->", authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/searchPage">
            <SeachPage/>
          </Route>
          <Route path="/bookings">
            <Bookings/>
          </Route>
          <Route path="/checkout/:tripid">
            <Elements stripe={promise}>
            <CheckOut/>
            </Elements>
          </Route>
          <Route path="/">
            <Body />
            <Card />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
