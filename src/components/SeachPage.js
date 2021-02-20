import React, {useState, useEffect} from 'react'
import { db } from './firebase'
import './SearchPage.css'
import SearchResult from './SearchResult'
function SeachPage() {
    const [trips, setTrips] = useState([]);
    useEffect(()=>{
        db.collection("tripplanner").onSnapshot(snapshot => setTrips(
            snapshot.docs.map(doc=> ({id: doc.id, data: doc.data()}))
        ))
    },[])
    return (
        <div className="searchPage">
            <div className="searchPage_info">
               <p>74 stays . 24 Jan - 11 Feb . 1 Guest</p>
               <h1>Stays in Kolkata</h1>
               <div className="search_quick">
                   <p>Canellation flexibility</p>
                   <p> Type of Place</p>
                   <p>Price</p>
                   <p>Instant Book</p>
                   <p>More Filters</p>
               </div>
            </div>
            <hr/>
            {
                trips.map(trip => (
                    <SearchResult key={trip.id} id={trip.id} img={trip.data.img}title={trip.data.title} description={trip.data.description} star={trip.data.star} price={trip.data.price} location={trip.data.location}/>
                ))
            }
        </div>
    )
}

export default SeachPage
