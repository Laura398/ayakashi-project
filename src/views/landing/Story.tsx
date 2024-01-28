import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { scrollTo } from "../../helpers/scrollTo";

export default function Story() {
    function scrollToUpdate() {
        scrollTo('update');
    }

    return (
        <div id="story-container">
            <h1>The Story</h1>
            
            
            <div id="landing-story">
                <div className="landing-story-element">
                    <p>There are two realms: the Mortal realm and the Spirit realm. <br />
                        With the faith of the gods becoming less and less important in people's lives, less people are aware of the Spirit's realm. <br />
                        The separation between the two realms is very thin so the Land Gods made a powerful barrier that would separate them.</p>
                    <p>You are one of the unlucky humans that went through this barrier and ended up seeing things you shouldn't have. <br />
                        Between being a college student at day, you are also working as a part timer in a sketchy detective agency that helps spirits and humans to settle conflicts born between them.</p>
                </div>
                <div className="landing-story-element">
                    <img src={"/assets/landing-story.png"} alt="game-image" width={"100%"} />
                </div>
            </div>

            <div className="scroll-down">
                <a onClick={scrollToUpdate}><FontAwesomeIcon icon={faChevronDown} /></a>
            </div>

        </div>
    );
}