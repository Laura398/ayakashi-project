import RedBox from "../../components/red-box/RedBox";
import { Character } from "../../interfaces/types";

export default function OneCharacter(props: {character: Character}) {
    const { character } = props;

    const title = (<h2>{character.name}</h2>);

    const content = (
        <div style={{padding: "20px"}}>
            <p>{character.sentence1}</p>
            <p>{character.sentence2}</p>
        </div>
    );
    
    return (
        <section id="character">
            <div id="character-img" className="character-content">
                <img className="character-img" src={`https://raw.githubusercontent.com/Laura398/ayakashi-project/characters/public/assets/${character.image}`} alt={character.name} />
            </div>
            <div id="character-data" className="character-content">
                <RedBox title={title} content={content} />
            </div>
        </section>
    );
}