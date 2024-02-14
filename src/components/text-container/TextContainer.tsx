import './TextContainer.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TextContainer(props: { content: any }) {
    return (
        <div id="resume-container">
                {props.content}
        </div>
    );
}