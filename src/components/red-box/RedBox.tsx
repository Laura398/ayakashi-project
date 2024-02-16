import './RedBox.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RedBox(props: { title: any, content: any }) {
    return (
        <div id="red-box-container">
            <div id="red-box-title">
                {props.title}
            </div>
            <div id="red-box-content">
                <div>{props.content}</div>
            </div>
        </div>
    );
}