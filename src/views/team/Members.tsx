import InstagramIcon from '@mui/icons-material/Instagram';

const members = [
    {
        name: 'Oshina',
        role: 'Character Designer, Programmeuse & Illustratrice',
        citation: "Otome games addict who always like the « destined to die » characters.",
        image: 'oshina.png',
        instagram: "https://www.instagram.com/oshina.art/"
    },
    {
        name: 'Yuru',
        role: 'Artiste amateure, Character Designer & Scriptwriter',
        citation: "A true tea addict & pretty boys enthousiast.",
        image: 'yuru.png',
        instagram: "https://www.instagram.com/yurumaruru/"
    }
];

export default function Members() {
    return (
        <div>
            <h1>Our Team</h1>

            <div id="members">
                {members.map((member, index) => {
                    return (
                        <div key={index} className="member">
                            <div className={`member-image ${member.name.toLowerCase()}`}></div>
                            <h2><b>{member.name}</b></h2>
                            <hr />
                            <p style={{textAlign: "center", marginBottom: "10px"}}>{member.role}</p>
                            <p style={{textAlign: "center"}}><i>{member.citation}</i></p>
                            <a href={member.instagram} target="_blank" rel="noreferrer">
                                <InstagramIcon
                                    sx={[
                                        { fontSize: "50px", marginTop: "20px" },
                                        { '&:hover': { color: 'var(--red3)' } }
                                    ]}
                                />
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}