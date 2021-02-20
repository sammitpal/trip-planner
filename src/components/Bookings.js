import React,{useState, useEffect} from 'react'
import Booking from './Booking';
import { db } from './firebase';
import { useStateValue } from './StateProvider';
import './Bookings.css'
function Bookings() {
    const [bookings, setBookings] = useState([]);
    const [{user}] = useStateValue();
    useEffect(()=>{
        db.collection("users").doc(user?.uid).collection("bookings").orderBy('timestamp','desc').onSnapshot(snapshot => setBookings(
            snapshot.docs.map(doc=> ({id: doc.id, data: doc.data()}))
        ))
    },[user])
    return (
        <div className="bookings">
            <h2>Your Bookings</h2>
            {
                bookings.map(booking => (
                    <Booking key = {booking.id} id={booking.id} booking={booking}/>
                ))
            }
        </div>
    )
}

export default Bookings
