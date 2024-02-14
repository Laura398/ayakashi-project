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
    const [expanded, setExpanded] = React.useState<boolean>(false);
    
    const handleChange = () => () => {
        const isExpanded = expanded ? false : true;
        setExpanded(isExpanded);
    };

  return (
    <div>
      <Accordion id="accordion" onChange={handleChange()}>
        <AccordionSummary
          expandIcon={expanded ?
            <CloseIcon fontSize='large' sx={{ color: 'white', marginTop: '10px' }} /> :
            <MenuIcon fontSize='large' sx={{ color: 'white', marginTop: '10px' }} />}
          id="icon"
        >
            <Link to="/"><div className="logo"></div></Link>
        </AccordionSummary>
        <AccordionDetails id="accordion-details">
            <Button><Link to="/home" className='button'>Home</Link></Button>
            <Button><Link to="/resume" className='button'>Resume</Link></Button>
            <Button><Link to="/characters" className='button'>Characters</Link></Button>
            <Button><Link to="/functionnalities" className='button'>Fonctionnalities</Link></Button>
            <Button><Link to="/team" className='button'>Who are we?</Link></Button>
            <Button id="header-fb">
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100092977179744"><FacebookRoundedIcon fontSize='large' /></a>
            </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}