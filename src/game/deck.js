const suits = [

    '♥',
    '♠',
    '♦',
    '♣'

];

const values = [

    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A'

];

export function createDeck() {

    const deck = [];

    suits.forEach(suit => {

        values.forEach((value, index) => {

            deck.push({

                suit,

                value,

                rank: index + 2

            });
        });
    });

    return shuffleDeck(deck);
}

function shuffleDeck(deck) {

    const shuffled = [...deck];

    for (

        let i = shuffled.length - 1;

        i > 0;

        i--

    ) {

        const j =
        Math.floor(
            Math.random() * (i + 1)
        );

        [

            shuffled[i],

            shuffled[j]

        ] = [

            shuffled[j],

            shuffled[i]

        ];
    }

    return shuffled;
}

