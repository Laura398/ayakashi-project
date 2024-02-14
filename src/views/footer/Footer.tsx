import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <p>
                © 2023 - Ayakashi Project. All rights reserved. <br />
                <Link to="/confidentiality-policy">Confidentiality policy</Link>
                <Link to="/map">Website Map</Link>
                <Link to="/team">Contacts</Link>
            </p>
        </footer>
    );
}