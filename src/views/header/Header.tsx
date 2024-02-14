import { Link, useLocation } from 'react-router-dom';
import './Header.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

export default function Header() {
    const location = useLocation();
    const isLandingPage = location.pathname === "/";

    return (
        <header className={
            isLandingPage ? "header-landing-page" : "header"
          }>
            <nav className={
            isLandingPage ? "header-landing-page" : "header"
          }>
               <Link to="/"><div className="logo-header"></div></Link>
                <ol>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/characters">Characters</Link></li>
                    <li><Link to="/functionnalities">Fonctionnalities</Link></li>
                    <li><Link to="/team">Who are we?</Link></li>
                    <li><Link to="https://www.facebook.com/profile.php?id=100092977179744" style={{position: 'relative'}}>
                        <FacebookRoundedIcon
                            fontSize='large'
                            sx={[
                                { position: 'absolute', verticalAlign: 'middle', marginTop: '-5px' },
                                { '&:hover': { color: 'var(--red3)', fontSize: '40px' } }
                            ]}
                        />
                    </Link></li>
                </ol>
            </nav>
        </header>
    );
}