import './Newsletter.css';
import RedBox from "../red-box/RedBox";
import NewsletterContent from "./Content";

export default function Newsletter() {
    const title = (<h3>Join our newsletter</h3>);
    return (
        <div>
            <RedBox title={title} content={<NewsletterContent />} />
        </div>
    );
}