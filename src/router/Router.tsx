import { Routes, Route } from 'react-router-dom';
import Home from '../views/home/Home';
import ConfidentialityPolicy from '../views/confidentiality-policy/ConfidentialityPolicy';
import Landing from '../views/landing/Landing';
import Resume from '../views/resume/Resume';
import Characters from '../views/characters/Characters';
import Functionnalities from '../views/functionnalities/Functionnalities';
import Team from '../views/team/Team';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />

            <Route path="/confidentiality-policy" element={<ConfidentialityPolicy />} />

            <Route path="/resume" element={<Resume />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/functionnalities" element={<Functionnalities />} />
            <Route path="/team" element={<Team />} />

            <Route path="/map" element={<h1>Map</h1>} />

            <Route path="*" element={<h1 style={{marginTop: "100px"}}>ERROR : The page you're looking for doesn't exist.</h1>} />
        </Routes>
    );
}