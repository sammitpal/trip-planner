import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from './firebase'
import './Popup.css'
function Popup() {
    const history = useHistory();
    const logout = () => {
        auth.signOut();
        history.push("/");
        document.getElementById("pop").classList.toggle("head_pop_none");
    }
    const bookings = () =>{
        document.getElementById("pop").classList.toggle("head_pop_none");
        history.push("/bookings")
    }
    return (
        <div className="popup">
            <p onClick={bookings}>Bookings</p>
            <Button variant="outlined" onClick={logout}>Logout</Button>
        </div>
    )
}

export default Popup
