import RedBox from "../../components/red-box/RedBox";
import ActualitiesContent from "./Content";

export default function Actualities() {
    return (
        <div>
            <RedBox title="Actualities" content={<ActualitiesContent />} />
        </div>
    );
}