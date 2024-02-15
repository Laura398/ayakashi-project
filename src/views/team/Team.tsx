import { Link } from 'react-router-dom';
import './Team.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Members from './Members';
import Contact from './Contact';

export default function Team() {
    return (
        <section id="team">
            <h1>Who are we?</h1>
            <p>We are two friends who are fans of visual novels, romance, and Japanese folklore. We wanted to convey these different passions through a game that combines romance, horror, and Japanese legends.</p>
            <p>Ayakashi Project is a project where we put all our heart into immersing you in a captivating and chilling story...</p>
            <Link to="https://www.facebook.com/profile.php?id=100092977179744" style={{position: 'relative'}}>
                <FacebookRoundedIcon
                    sx={[
                        { fontSize: "50px", marginTop: "20px" },
                        { '&:hover': { color: 'var(--red3)' } }
                    ]}
                />
            </Link>

            <hr />

            <Members />

            <hr />

            <Contact />
        </section>
    );
}