import RedBox from "../../components/red-box/RedBox";
import ActualitiesContent from "./Content";

export default function Actualities() {
    const title = (<h3>Actualities</h3>);
    return (
        <div>
            <RedBox title={title} content={<ActualitiesContent />} />
        </div>
    );
}