import { Box, List, ListItem } from "@mui/material";
import TextContainer from "../../components/text-container/TextContainer";
import { Link } from "react-router-dom";

export default function Map() {
    const content = (
        <div id="map-content">
            <Box sx={{ flexGrow: 1, width: "50%", backgroundColor: "transparent", margin: "auto" }}>
                <h1>Website pages</h1>
                <List dense>
                    <ListItem>
                        <Link to="/">Landing</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/home">Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/resume">Resume</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/characters">Characters</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/functionnalities">Fonctionnalities</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/team">Who are we?</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/confidentiality-policy">Confidentiality Policy</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/map">Map</Link>
                    </ListItem>
                </List>
            </Box>
        </div>
    );



    return (
        <section id="map">
            <h1 style={{fontFamily: "Exo"}}>Map</h1>
            <TextContainer content={content} className='width-30' />
        </section>
    );
}