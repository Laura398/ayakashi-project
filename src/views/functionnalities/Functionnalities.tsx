import TextContainer from "../../components/text-container/TextContainer";
import BetaTest from "./BetaTest";
import Customization from "./Customization";
import './Functionnalities.css';
import Options from "./Options";

export default function Functionnalities() {
    const content = 
    <div>
        <Customization />
        <Options />

        <hr />

        <BetaTest />
    </div>;

    return (
        <section id="functionnalities">
            <h1>Functionnalities</h1>
            <TextContainer content={content} className="width-60" />
        </section>
    );
}