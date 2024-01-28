import './Landing.css'
import Story from './Story';
import Title from './Title';
import Update from './Update';

export default function Landing() {
    return (
        <section id="landing">
            <hr />
            
            <Title />

            <hr />

            <Story />

            <hr />

            <Update />
        </section>
    );
}