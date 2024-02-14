export default function Options() {
    return (
        <div id="customization">
            <h2>Options</h2>
            <div className="flex">
                <div className="options-image-1" />
                <div className="custom-text">
                    <p>The game contains basic options such as:</p>
                    <ul>
                        <li><span>History journal</span></li>
                        <li><span>Quick save and quick load</span></li>
                        <li><span>Save and load game</span></li>
                        <li><span>Skip function</span></li>
                        <li><span>Auto-read function</span></li>
                        <li><span>Sound settings, reading speed, skip mode, etc.</span></li>
                    </ul>
                </div>
            </div>
            <div className="flex">
                <div className="options-image-2" />
                <div className="custom-text">
                    <p>A system of consultable gauges to track your progress:</p>
                    <ul>
                        <li><span>Romance gauge</span></li>
                        <li><span>Fear gauge</span></li>
                    </ul>
                    <p>"Extra" menu with:</p>
                    <ul>
                        <li><span>CG Gallery</span></li>
                        <li><span>Animations</span></li>
                        <li><span>Bonus and dictionary (Ayakashi sheets, various explanations, etc.)</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}