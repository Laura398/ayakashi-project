import './Header.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

export default function Header() {
    const href = window.location.href;
    
    const path = href.split("/")[3];

    const isLandingPage = path === "";

    return (
        <header className={
            isLandingPage ? "header-landing-page" : "header"
          }>
            <nav className={
            isLandingPage ? "header-landing-page" : "header"
          }>
                <a href="/"><img src={"/assets/logo.png"} alt="logo" height="60"></img></a>
                <ol>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/resume">Resume</a></li>
                    <li><a href="/characters">Characters</a></li>
                    <li><a href="/functionnalities">Fonctionnalities</a></li>
                    <li><a href="/team">Who are we?</a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100092977179744" style={{position: 'relative'}}>
                        <FacebookRoundedIcon
                            fontSize='large'
                            sx={[
                                { position: 'absolute', verticalAlign: 'middle', marginTop: '-5px' },
                                { '&:hover': { color: 'var(--red3)', fontSize: '40px' } }
                            ]}
                        />
                    </a></li>
                </ol>
            </nav>
        </header>
    );
}