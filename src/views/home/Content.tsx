export default function ActualitiesContent() {
    // const actualities = [
    //     {
    //         date: "01/01/2021",
    //         content: "Content 1"
    //     },
    //     {
    //         date: "01/01/2021",
    //         content: "Content 2"
    //     },
    //     {
    //         date: "01/01/2021",
    //         content: "Content 3"
    //     },
    //     {
    //         date: "01/01/2021",
    //         content: "Content 4"
    //     },
    //     {
    //         date: "01/01/2021",
    //         content: "Content 5"
    //     },
    //     {
    //         date: "01/01/2021",
    //         content: "Content 6"
    //     },
    //     {
    //         date: "01/01/2021",
    //         content: "Content 7"
    //     },
    //     {
    //         date: "01/01/2021",
    //         content: "Content 8"
    //     },
    //     {
    //         date: "01/01/2021",
    //         content: "Content 9"
    //     },
    //     {
    //         date: "01/01/2021",
    //         content: "Content 10"
    //     }
    // ];


const actualities = [
    {
        id: 1,
        date: "08/04/2023",
        content: "Lancement du projet « Ayakashi Project » et création du site internet"
    },
    {
        id: 2,
        date: "22/08/2023",
        content: "Premiers concepts pour Manekko, Zakurou et Kayo"
    },
    {
        id: 3,
        date: "10/10/2023",
        content: "Ajout de personnages dans la galerie du site"
    },
    {
        id: 4,
        date: "14/12/2023",
        content: "Avancée majeure sur le script"
    },
    {
        id: 5,
        date: "20/01/2024",
        content: "Ajout de personnages dans la galerie du site !"
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