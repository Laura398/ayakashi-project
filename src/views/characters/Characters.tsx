import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import './Characters.css';
import React from 'react';
import { Character } from '../../interfaces/types';
import OneCharacter from './OneCharacter';

const characters: Character[] = [
    {
        id: 1,
        name: "Chiyo Watanabe",
        sentence1: "Chiyo is a very pragmatic human. She didn't really believe in the supernatural and spirits before. But unlucky for her, she can now see spirits...",
        sentence2: "A student by day, she also works part-time at a shady detective agency that helps spirits and humans settle their disputes.",
        image: "chiyo.png",
        icon: "chiyo-icon.jpeg"
    },
    {
        id: 2,
        name: "Maneko",
        sentence1: "Maneko is the manager of the Nekomeshi Snack snack bar.",
        sentence2: "If you're looking for the latest juicy gossip and rumors, she's the one you'll need to go see.",
        image: "maneko.png",
        icon: "maneko-icon.jpeg"
    },
    {
        id: 3,
        name: "Kayo",
        sentence1: "Kayo is a friend from Chiyo's college. He's a psychology student and expresses a great interest in all things occult.",
        sentence2: "This has even earned him a nickname on campus: 'Occult Prince'.",
        image: "kayo.png",
        icon: "kayo-icon.jpeg"
    },
    {
        id: 4,
        name: "Nanashi",
        sentence1: "A curious spirit, with the appearance of a young boy. His face is hidden behind a paper mask depicting a fox. He enjoys following Chiyo around.",
        sentence2: "He really likes fried tofu...",
        image: "nanashi.png",
        icon: "nanashi-icon.jpeg"
    },
    {
        id: 5,
        name: "Nui",
        sentence1: "Nui is a mysterious waitress who works at the Nekomeshi Snack.",
        sentence2: "Even Maneko doesn't know her origins...",
        image: "nui.png",
        icon: "nui-icon.jpeg"
    }
];

export default function Characters() {
    const [alignment, setAlignment] = React.useState<number>(characters.sort((a, b) => a.id - b.id)[0].id);
    const [character, setCharacter] = React.useState<Character>(characters.sort((a, b) => a.id - b.id)[0]);

    const handleAlignment = (
        _event: React.MouseEvent<HTMLElement>,
        newAlignment: number,
    ) => {
    setAlignment(newAlignment);
    setCharacter(characters.find((character) => character.id === newAlignment) as Character);
    };

    const changeSelect = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;        
        const id = target.classList[1].split('-')[2];
        setAlignment(parseInt(id));
        setCharacter(characters.find((character) => character.id === parseInt(id)) as Character);
        [...document.getElementsByClassName('characters-icons')].forEach((element: Element) => {
            element.classList.remove('selected');
        });
        target.classList.add('selected');
    };

    return (
        <section id="characters">
            <div id="characters-list">

                <ToggleButtonGroup
                    id='characters-toggle-group'
                    exclusive
                    aria-label="text alignment"
                    value={alignment}
                    onChange={handleAlignment}
                    >
                    {characters.map((character, index) => (
                        <ToggleButton
                        key={index}
                        value={character.id}
                        id={`toggle-button-${character.id}`}
                        name={character.name}
                        aria-label="centered"
                        className='character-icon'
                        sx={{margin: "20px"}}>
                            <img
                                src={`https://raw.githubusercontent.com/Laura398/ayakashi-project/characters/public/assets/${character.icon}`}
                                alt={character.name}
                                loading="lazy"
                                className={`characters-icons toggle-img-${character.id}`}
                                style={{border: "1px solid white"}}
                            />
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </div>

            <div id="characters-list-phone">
                {characters.map((character, index) => (
                    <div className="character-phone" key={index} onClick={changeSelect}>
                        <img
                            key={index}
                            src={`https://raw.githubusercontent.com/Laura398/ayakashi-project/characters/public/assets/${character.icon}`}
                            alt={character.name}
                            loading="lazy"
                            className={`characters-icons toggle-img-${character.id}`}
                            style={{border: "1px solid white"}}
                        />
                    </div>
                ))}
            </div>

            <OneCharacter character={character} />
        </section>
    );
}