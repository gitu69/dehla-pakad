
export function chooseAICard({

    hand,
    leadSuit,
    centerCards,
    currentPlayer,
    lastWinner,
    tableDahlas,
    trumpSuit

}) {

    // LEGAL PLAYABLE CARDS

    let playable =
    hand;

    // FOLLOW SUIT IF POSSIBLE

    if (leadSuit) {

        const sameSuit =
        hand.filter(
            card =>
            card.suit === leadSuit
        );

        if (
            sameSuit.length > 0
        ) {

            playable =
            sameSuit;
        }
    }

    // SAFE SORT
    // strongest → weakest

    playable =

    [...playable]

    .sort(

        (a, b) =>

        b.rank - a.rank

    );

    // TEAMMATE

    const teammate =

    currentPlayer === 0
    ? 2

    : currentPlayer === 1
    ? 3

    : currentPlayer === 2
    ? 0

    : 1;

    // WHO IS CURRENTLY WINNING

    let winningPlayer =
    null;

    let winningCard =
    null;

    if (
        centerCards.length > 0
    ) {

        winningPlayer =
        centerCards[0].player;

        winningCard =
        centerCards[0].card;

        centerCards.forEach(item => {

            const current =
            item.card;

            // TRUMP BEATS NON-TRUMP

            if (trumpSuit) {

                if (

                    current.suit === trumpSuit

                    &&

                    winningCard.suit !== trumpSuit

                ) {

                    winningCard =
                    current;

                    winningPlayer =
                    item.player;

                    return;
                }

                // HIGHER TRUMP

                if (

                    current.suit === trumpSuit

                    &&

                    winningCard.suit === trumpSuit

                    &&

                    current.rank >
                    winningCard.rank

                ) {

                    winningCard =
                    current;

                    winningPlayer =
                    item.player;

                    return;
                }
            }

            // SAME SUIT HIGHER CARD

            if (

                current.suit === winningCard.suit

                &&

                current.rank >
                winningCard.rank

            ) {

                winningCard =
                current;

                winningPlayer =
                item.player;
            }
        });
    }

    // TEAMMATE WINNING
    // PLAY WEAKEST LEGAL CARD

    if (
        winningPlayer === teammate
    ) {

        return playable[
            playable.length - 1
        ];
    }

    // OPPONENT DANGEROUSLY
    // CLOSE TO CAPTURE

    const opponentWinning =

    winningPlayer !== null

    &&

    winningPlayer !== teammate

    &&

    winningPlayer !== currentPlayer;

    if (

        opponentWinning

        &&

        tableDahlas >= 2

    ) {

        // TRY TO WIN TRICK

        for (const card of playable) {

            // TRUMP BEATS NON-TRUMP

            if (

                trumpSuit

                &&

                card.suit === trumpSuit

                &&

                winningCard

                &&

                winningCard.suit !== trumpSuit

            ) {

                return card;
            }

            // SAME SUIT HIGHER CARD

            if (

                winningCard

                &&

                card.suit === winningCard.suit

                &&

                card.rank >
                winningCard.rank

            ) {

                return card;
            }
        }

        // CANNOT WIN
        // TRY TO CREATE 3 DAHLAS

        const dahlaCard =
        playable.find(
            c =>
            c.value === '10'
        );

        if (dahlaCard) {

            // SAME SUIT DAHLA

            if (
                dahlaCard.suit === leadSuit
            ) {

                return dahlaCard;
            }

            // OFF-SUIT DAHLA
            // ONLY IF NO LEAD SUIT

            const hasLeadSuit =
            hand.some(
                c =>
                c.suit === leadSuit
            );

            if (!hasLeadSuit) {

                return dahlaCard;
            }
        }

        // OTHERWISE STRONGEST

        return playable[0];
    }

    // PRESERVE TRUMP
    // IF POSSIBLE

    if (trumpSuit) {

        const nonTrumpCards =
        playable.filter(
            c =>
            c.suit !== trumpSuit
        );

        // USE WEAKEST NON-TRUMP

        if (
            nonTrumpCards.length > 0
        ) {

            return nonTrumpCards[
                nonTrumpCards.length - 1
            ];
        }

        // IF ONLY TRUMP LEFT
        // PLAY WEAKEST TRUMP

        const trumpCards =
        playable.filter(
            c =>
            c.suit === trumpSuit
        );

        if (
            trumpCards.length > 0
        ) {

            return trumpCards[
                trumpCards.length - 1
            ];
        }
    }

    // DEFAULT:
    // WEAKEST LEGAL CARD

    return playable[
        playable.length - 1
    ];
}

