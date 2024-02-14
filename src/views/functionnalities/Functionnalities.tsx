import TextContainer from "../../components/text-container/TextContainer";
import Customization from "./Customization";
import './Functionnalities.css';

export default function Functionnalities() {
    const content = 
    <div>
        <Customization />
    </div>;

    return (
        <section id="functionnalities">
            <h1>Functionnalities</h1>
            <TextContainer content={content} className="width-60" />

        </section>
    );
}