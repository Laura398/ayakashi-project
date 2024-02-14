import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Newsletter from '../../components/newsletter/Newsletter';
import Actualities from './Actualities';
import './Home.css';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { scrollTo } from '../../helpers/scrollTo';

export default function Home() {
    function scrollToDescription() {
        scrollTo('home-description');
    }

    return (
        <section id="home">
            <div id="home-img"></div>
            <div id="home-content">

                <h1>Ayakashi Project</h1>

                <div className='phone-only' style={{height: "20px"}}></div>
                
                <div className="scroll-down phone-only">
                    <a onClick={scrollToDescription}><FontAwesomeIcon icon={faChevronDown} /></a>
                </div>

                <hr />

                <div id="home-description" className='phone-only' style={{height: "15px"}}></div>

                <p className='home-description'>Ayakashi Project is a horror romance visual novel project from two friends and artists.</p>
                <p className='home-description bottom'><b>The game is still in development so be sure to follow us !</b></p>

                <div style={{height: "15px"}}></div>

                <Actualities />

                <Newsletter />

                <div style={{height: "15px"}}></div>
            </div>
        </section>
    );
}