// COUNT DEHLAS IN A TRICK

export function countDahlas(cards) {

    let count = 0;

    cards.forEach(item => {

        if (

            item.card.value === '10'

        ) {

            count++;
        }
    });

    return count;
}


// COUNT DEHLAS IN PLAYERS' HANDS

export function countHandDahlas(players) {

    let count = 0;

    players.forEach(hand => {

        hand.forEach(card => {

            if (

                card.value === '10'

            ) {

                count++;
            }
        });
    });

    return count;
}


// ROUND POINTS

export function calculateRoundPoints(

    capturedDahlas

) {

    return (

        capturedDahlas / 4
    );
}


// MATCH WINNER

export function determineMatchWinner(

    matchA,
    matchB

) {

    if (

        matchA > matchB

    ) {

        return 'Team A';
    }

    if (

        matchB > matchA

    ) {

        return 'Team B';
    }

    return 'Draw';
}