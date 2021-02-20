import moment from 'moment';
import React from 'react'
import './Booking.css'
function Booking({booking, id}) {
    console.log("🥱",booking);
    return (
        <div className="booking">
            <img src={booking.data.trip.img} alt=""/>
            <div className="booking_info">
                <h3>{booking.data.trip.title}</h3>
                <p className="description">{booking.data.trip.description}</p>
                <p className="location">{booking.data.trip.location}</p>
                <p className="date">{moment.unix(booking.data.created).format("MMMM Do YYYY, h:mma")}</p>
            </div>
            <p className="paid">Paid: <strong>Rs{booking.data.trip.price}</strong></p>
        </div>
    )
}

export default Booking
