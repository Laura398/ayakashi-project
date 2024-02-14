import TextContainer from "../../components/text-container/TextContainer";
import './ConfidentialityPolicy.css';

export default function ConfidentialityPolicy() {
    const href = window.location.href;
    const hrefHome = href.split('/confidentiality-policy')[0];

    const content =
    <div>
        <h1>Confidentiality Policy</h1>

        <h2>Who are we?</h2>

        <p>The address of our website is: {hrefHome}</p>

        <p>Under <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000801164#LEGIARTI000042038977">Article 6 of Law No. 2004-575 of June 21, 2004</a>, regarding confidence in the digital economy, it is specified to users of the website {hrefHome} the identity of the various stakeholders involved in its creation and monitoring:</p>

        <p>Website owner: Ayakashi Project<br/>Contact: lauramarwor@hotmail.fr<br/>Address: 3b rue la Fontaine 77400 Gouvernes.</p>

        <p>Hébergeur : GitHub</p>

        <h2>Comments</h2>

        <p> When you leave an email on our site, the data entered in the email form, as well as your IP address and browser user agent, are collected only to help us send you our newsletter.</p>

        <h2>Cookies</h2>

        <p>Le site {hrefHome} contient des liens hypertextes vers d’autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d’autres sites vers {hrefHome}.</p>

        <p>La navigation sur le site {hrefHome} est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur.</p>

        <h2>Content embedded from other sites</h2>

        <p>The articles on this site may include embedded content (such as videos, images, articles, etc.). Embedded content from other websites behaves in the same way as if the visitor were visiting that other website.</p>

        <p>These websites may collect data about you, use cookies, embed third-party tracking tools, and track your interactions with embedded content if you have an account logged in to their website.</p>

        <h2>Use and transmission of your personal data</h2>

        <p>In any case, Ayakashi Project only collects user's personal information for the needs of certain services offered by the site. The user provides this information knowingly, especially when entering it themselves.</p>

        <p>In accordance with the provisions of articles 38 and following of Law 78-17 of January 6, 1978, relating to data processing, files, and freedoms, every user has the right to access, rectify, and oppose personal data concerning them by making a written and signed request, accompanied by a copy of an identity document with the signature of the document's holder, specifying the address to which the response should be sent.</p>

        <p>No personal information of the website user is published without the user's knowledge, exchanged, transferred, assigned, or sold to any third party on any support.</p>

        <h2>The rights you have regarding your data</h2>

        <p>Regarding the newsletter: You can unsubscribe at any time by clicking on the link at the bottom of the emails. For more information regarding the privacy policy of the newsletter organization, visit the <a href="https://mailchimp.com/en/?currency=EUR">MailChimp</a> website.</p>

        <h2>Limitations of liability</h2>

        <p>Ayakashi Project cannot be held responsible for direct and indirect damages caused to the user's hardware when accessing the site {hrefHome}.</p>

        <p>Ayakashi Project declines all responsibility regarding the use that could be made of the information and content present on {hrefHome}.</p>

        <p>Ayakashi Project is committed to securing the website {hrefHome} to the best of its ability; however, its liability cannot be invoked if undesirable data is imported and installed on its site without its knowledge.</p>
    </div>;

    return (
        <section id="confidentiality-policy">
            <TextContainer content={content} />
        </section>
    );
}