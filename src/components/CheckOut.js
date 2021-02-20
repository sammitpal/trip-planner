import { Star } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { db } from "./firebase";
import "./CheckOut.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { Button } from "@material-ui/core";
import axios from "./axios";
import { useStateValue } from "./StateProvider";
import firebase from 'firebase'
function CheckOut() {
  const [{ user }] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const { tripid } = useParams();
  const [trip, setTrip] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const history = useHistory();
  useEffect(() => {
    if (tripid) {
      db.collection("tripplanner")
        .doc(tripid)
        .onSnapshot((snapshot) => {
          setTrip(snapshot.data());
        });
    }
  }, [tripid]);
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${trip?.price}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [trip]);
  console.log("Client Secret: ", clientSecret);
  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        db.collection("users").doc(user?.uid).collection("bookings").doc(paymentIntent?.id).set(
          {
            trip: trip,
            payid: paymentIntent.id,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          }
        )

        setSuccess(true);
        setError(null);
        setProcessing(false);

        history.replace("/bookings");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="checkoutPage">
      <div className="checkout">
        <img src={trip.img} alt="" />
        <div className="result_info">
          <div className="info_header">
            <p>{trip.location}</p>
            <h2>{trip.title}</h2>
            <p>{trip.description}</p>
          </div>
          <div className="info_footer">
            <p>
              <Star className="star" /> {trip.star}
            </p>
            <h4>₹{trip.price}/night</h4>
          </div>
        </div>
      </div>
      <div className="payment">
        <form onSubmit={handleSubmit}>
          <CardElement onChange={handleChange} />
          <div className="payment_price">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    {/* Part of the homework */}
                    Subtotal <strong>{value}</strong>
                  </p>
                </>
              )}
              decimalScale={2}
              value={trip.price} // Part of the homework
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
            />
            <button disabled={disabled || processing || success}>
              {processing ? <p>Processing</p> : "Buy Now"}
            </button>
          </div>
          {error && <div>{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default CheckOut;
