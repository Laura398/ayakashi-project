import './TextContainer.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TextContainer(props: { content: any, className: string}) {
    return (
        <div id="resume-container" className={props.className}>
                {props.content}
        </div>
    );
}