import './Newsletter.css';
import RedBox from "../red-box/RedBox";
import NewsletterContent from "./Content";

export default function Newsletter() {
    return (
        <div>
            <RedBox title="Join our newsletter" content={<NewsletterContent />} />
        </div>
    );
}