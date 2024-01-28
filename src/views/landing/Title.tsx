import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { scrollTo } from "../../helpers/scrollTo";
// import CustomizedInputBase from "./CustomizedInputBase";

export default function Title() {
    function scrollToStory() {
        scrollTo('story-container');
    }

    return (
        <div id="title">
            <h1>Ayakashi Project</h1>
            
            <h2>What would you do if the boundary between you and the spirits disappeared?</h2>

            <h2><b>Coming soon on PC...</b></h2>

            <div className="scroll-down">
                <a onClick={scrollToStory}><FontAwesomeIcon icon={faChevronDown} /></a>
            </div>
        </div>
    );
}