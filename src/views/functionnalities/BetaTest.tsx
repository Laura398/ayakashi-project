import Newsletter from "../../components/newsletter/Newsletter";

export default function BetaTest() {
    return (
        <div id="beta">
            <h2 id="beta-title">Platform & bêta-testing</h2>
            <div className="flex">
                <div className="custom-text">
                    <p>The game will be available for download on Windows or via browser (itch.io).</p>
                    <p>A beta-testing version will be opened when progress allows. Subscribe to the project newsletter to stay updated on all developments!</p>
                </div>
                <div id="beta-news"><Newsletter /></div>
            </div>
        </div>
    );
}