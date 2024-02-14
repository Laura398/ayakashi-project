export default function Customization() {
    return (
        <div id="customization">
            <h2>Customization</h2>
            <div className="flex">
                <div id="custom-image"></div>
                <div className="custom-text">
                    <p>The main character has a default first name and last name.</p>
                    <p>You can change the first name of the main character. The changed first name will be used and displayed, as with the default one, during dialogues.</p>
                    <p>The last name cannot be changed.</p>
                </div>
            </div>
        </div>
    );
}