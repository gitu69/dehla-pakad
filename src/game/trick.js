export function determineTrickWinner(

    cards,
    trumpSuit

) {

    const leadSuit =
    cards[0].card.suit;

    let winner =
    cards[0];

    cards.forEach(item => {

        const current =
        item.card;

        const best =
        winner.card;

        // Both trump

        if (

            trumpSuit &&

            current.suit === trumpSuit &&

            best.suit === trumpSuit

        ) {

            if (

                current.rank >
                best.rank

            ) {

                winner = item;
            }

            return;
        }

        // Trump beats anything

        if (

            trumpSuit &&

            current.suit === trumpSuit &&

            best.suit !== trumpSuit

        ) {

            winner = item;

            return;
        }

        // Non-trump cannot beat trump

        if (

            trumpSuit &&

            best.suit === trumpSuit

        ) {

            return;
        }

        // Lead suit comparison

        if (

            current.suit === leadSuit &&

            best.suit === leadSuit &&

            current.rank >
            best.rank

        ) {

            winner = item;
        }

    });

    return winner;
}