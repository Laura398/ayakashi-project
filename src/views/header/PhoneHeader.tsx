import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import './PhoneHeader.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

export default function PhoneHeader() {
  const [expand, setExpand] = React.useState(false);
  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };

  const closeAccordion = () => {
      setExpand(false);
  };

  return (
    <div>
      <Accordion id="accordion" expanded={expand}>
        <AccordionSummary
          expandIcon={expand ?
            <CloseIcon fontSize='large' sx={{ color: 'white', marginTop: '10px' }} onClick={toggleAcordion} /> :
            <MenuIcon fontSize='large' sx={{ color: 'white', marginTop: '10px' }} onClick={toggleAcordion} />}
          id="icon"
        >
            <Link to="/" onClick={closeAccordion}><div className="logo-phone-header"></div></Link>
        </AccordionSummary>
        <AccordionDetails id="accordion-details">
            <Button><Link to="/home" className='button' onClick={toggleAcordion}>Home</Link></Button>
            <Button><Link to="/resume" className='button' onClick={toggleAcordion}>Resume</Link></Button>
            <Button><Link to="/characters" className='button' onClick={toggleAcordion}>Characters</Link></Button>
            <Button><Link to="/functionnalities" className='button' onClick={toggleAcordion}>Fonctionnalities</Link></Button>
            <Button><Link to="/team" className='button' onClick={toggleAcordion}>Who are we?</Link></Button>
            <Button id="header-fb">
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100092977179744"><FacebookRoundedIcon fontSize='large' /></a>
            </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}