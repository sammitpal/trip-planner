import { Instagram, Language, Twitter } from '@material-ui/icons'
import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className="footer">
            <p>&copy; {new Date().getFullYear()} Trip Planner! No Rights reserved - this is a project material</p>
            <p>Privacy . Terms . Sitemap . Company Details</p>
            <div className="footer_social">
                <Instagram/>
                <Twitter/>
                <Language/>
            </div>
        </div>
    )
}

export default Footer
