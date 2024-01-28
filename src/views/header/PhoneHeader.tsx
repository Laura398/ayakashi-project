import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

import './PhoneHeader.css'
import React from 'react';
import HeaderButton from '../../components/buttons/HeaderButton';
import { Button } from '@mui/material';

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
            <a href="/" id="accordion-logo"><img src={"/assets/logo.png"} alt="logo" height="60"></img></a>
        </AccordionSummary>
        <AccordionDetails id="accordion-details">
            <HeaderButton text="Home" link="/home" />
            <HeaderButton text="Resume" link="/resume" />
            <HeaderButton text="Characters" link="/characters" />
            <HeaderButton text="Fonctionnalities" link="/functionnalities" />
            <HeaderButton text="Who are we?" link="/team" />
            <Button id="header-fb" onClick={() => {window.location.href = "https://www.facebook.com/profile.php?id=100092977179744"}}><FacebookRoundedIcon fontSize='large' /></Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}