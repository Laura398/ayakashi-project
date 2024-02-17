export default function ActualitiesContent() {
    const actualities = [
        {
            id: 1,
            date: "08/04/2023",
            content: 'Launch of the "Ayakashi Project" and creation of the website'
        },
        {
            id: 2,
            date: "22/08/2023",
            content: "Initial concepts for Manekko, Zakurou, and Kayo"
        },
        {
            id: 3,
            date: "10/10/2023",
            content: "Addition of characters to the website's gallery"
        },
        {
            id: 4,
            date: "14/12/2023",
            content: "Major progress on the script"
        },
        {
            id: 5,
            date: "20/01/2024",
            content: "Addition of characters to the website's gallery!"
        },
    ];

    return (
        <div id="actualities-outer">
            <div id="actualities-inner">
                {actualities
                .sort((a, b) => {
                    return b.id - a.id;
                })
                .map((actuality, index) => {
                    return (
                        <p key={index} style={{borderBottom: index === actualities.length-1 ? "none" : "solid 1px white"}}>
                            {actuality.date} : {actuality.content}     
                        </p>
                    );
                })}
            </div>
        </div>
    );
}