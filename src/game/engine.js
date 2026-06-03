// TRUMP FIXING

export function shouldFixTrump({

    leadSuit,
    trumpSuit,
    currentPlayer,
    trickLeader,
    hand

}) {

    // Trump already fixed

    if (trumpSuit) {

        return false;
    }

    // Can follow suit

    const hasLeadSuit =

    hand.some(

        card =>

        card.suit === leadSuit
    );

    // First player unable to follow suit
    // fixes trump

    return (

        currentPlayer !== trickLeader

        &&

        !hasLeadSuit
    );
}


// CONSECUTIVE WINS

export function getConsecutiveWins({

    lastWinner,
    currentWinner,
    previousCount

}) {

    if (

        lastWinner === currentWinner

    ) {

        return previousCount + 1;
    }

    return 1;
}


// DEHLA CAPTURE

export function shouldCaptureDahlas({

    consecutiveWins,
    tableDahlas

}) {

    return (

        consecutiveWins >= 2

        &&

        (
            tableDahlas === 2
            ||
            tableDahlas === 4
        )
    );
}


// TEAM HELPERS

export function isTeamA(player) {

    return (

        player === 0
        ||
        player === 2
    );
}


export function isTeamB(player) {

    return (

        player === 1
        ||
        player === 3
    );
}


// ROUND COMPLETE

export function isRoundComplete({

    teamA,
    teamB

}) {

    return (

        teamA + teamB === 4
    );
}


// MATCH POINTS

export function calculateRoundPoints(

    capturedDahlas

) {

    return (

        capturedDahlas / 4
    );
}