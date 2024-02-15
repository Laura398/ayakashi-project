import { ImageList, ImageListItem, ToggleButton, ToggleButtonGroup } from '@mui/material';
import './Characters.css';
import React from 'react';

const characters = [
    {
        name: "Chiyo Watanabe",
        sentence1: "Chiyo is a very pragmatic human. She didn't really believe in the supernatural and spirits before. But unlucky for her, she can now see spirits...",
        sentence2: "A student by day, she also works part-time at a shady detective agency that helps spirits and humans settle their disputes.",
        image: "chiyo.png",
        icon: "chiyo-icon.jpeg"
    },
    {
        name: "Maneko",
        sentence1: "Maneko is the manager of the Nekomeshi Snack snack bar.",
        sentence2: "If you're looking for the latest juicy gossip and rumors, she's the one you'll need to go see.",
        image: "maneko.png",
        icon: "maneko-icon.jpeg"
    },
    {
        name: "Kayo",
        sentence1: "Kayo is a friend from Chiyo's college. He's a psychology student and expresses a great interest in all things occult.",
        sentence2: "This has even earned him a nickname on campus: 'Occult Prince'.",
        image: "kayo.png",
        icon: "kayo-icon.jpeg"
    },
    {
        name: "Nanashi",
        sentence1: "A curious spirit, with the appearance of a young boy. His face is hidden behind a paper mask depicting a fox. He enjoys following Chiyo around.",
        sentence2: "He really likes fried tofu...",
        image: "nanashi.png",
        icon: "nanashi-icon.jpeg"
    },
    {
        name: "Nui",
        sentence1: "Nui is a mysterious waitress who works at the Nekomeshi Snack.",
        sentence2: "Even Maneko doesn't know her origins...",
        image: "nui.png",
        icon: "nui-icon.jpeg"
    }
];

export default function Characters() {

    return (
        <section id="characters">
            <div id="characters-list">
                <ToggleButtonGroup
                    id='characters-toggle-group'
                    exclusive
                    aria-label="text alignment"
                    >
                    {characters.map((character, index) => (
                        <ToggleButton key={index} value="center" aria-label="centered" className='character-icon'>
                        icon
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>


                <ImageList sx={{ width: "60%", height: 100, margin: "auto" }} cols={5} rowHeight={164}>
                    {characters.map((character) => (
                        <ImageListItem key={character.icon}>
                        <img
                            src={`https://raw.githubusercontent.com/Laura398/ayakashi-project/main/public/assets/home-img.png`}
                            alt={character.name}
                            loading="lazy"
                        />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </section>
    );
}