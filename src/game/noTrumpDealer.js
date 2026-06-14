import {
    sortHand
}
from './round';

import {
    getAllDahlasWinner,
}
from './allDahlasManager';

export function handleNoTrumpDeal({

    cardsToDeal,

    updatedPlayers,

    deck

}) {

    const updatedPlayersCopy =

        updatedPlayers.map(
            hand => [...hand]
        );

    const updatedDeckCopy =
    [...deck];

    for (

        let i = 0;

        i < cardsToDeal;

        i++

    ) {

        for (

            let p = 0;

            p < 4;

            p++

        ) {

            updatedPlayersCopy[p]
            .push(

                updatedDeckCopy.pop()

            );

        }

    }

    const sortedPlayers =

    updatedPlayersCopy.map(

        hand => sortHand(hand)

    );

    return {

        players:
        sortedPlayers,

        deck:
        updatedDeckCopy,

        allDahlasWinner:

        getAllDahlasWinner(
            sortedPlayers
        )

    };

}