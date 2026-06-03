// DEAL FIRST 5 CARDS

export function createInitialHands(deck) {

    const players =
    [[], [], [], []];

    for (

        let i = 0;

        i < 5;

        i++

    ) {

        for (

            let p = 0;

            p < 4;

            p++

        ) {

            players[p]
            .push(
                deck.pop()
            );
        }
    }

    return players;
}


// DEAL REMAINING CARDS
// AFTER TRUMP IS FIXED

export function dealRemainingCards(

    players,
    deck

) {

    const updatedPlayers =

    players.map(
        hand => [...hand]
    );

    const updatedDeck =
    [...deck];

    while (

        updatedDeck.length > 0

    ) {

        for (

            let p = 0;

            p < 4;

            p++

        ) {

            if (

                updatedDeck.length > 0

            ) {

                updatedPlayers[p]
                .push(
                    updatedDeck.pop()
                );
            }
        }
    }

    return {

        players:
        updatedPlayers,

        deck: []
    };
}


// CHECK IF ALL HANDS EMPTY

export function areHandsEmpty(

    players

) {

    return players.every(

        hand =>

        hand.length === 0
    );
}

export function sortHand(hand) {

    const suitOrder = {

        '♠': 4,
        '♥': 3,
        '♣': 2,
        '♦': 1

    };

    return [...hand].sort((a, b) => {

        const suitDiff =

            suitOrder[b.suit] -
            suitOrder[a.suit];

        if (suitDiff !== 0) {

            return suitDiff;
        }

        return b.rank - a.rank;
    });
}