import {
    hasAllFourDahlas
}
from './allDahlas';

import {
    completeMatch
}
from './matchComplete';

export function getAllDahlasWinner(

    hands

) {

    return hands.findIndex(

        hand =>

        hasAllFourDahlas(
            hand
        )

    );

}

export function processAllDahlasWin({

    winnerPlayer,

    currentRound,

    matchA,
    matchB,

    setTeamA,
    setTeamB,

    setMatchA,
    setMatchB,

    setRoundHistory,

    setNotification,

    setMatchWinner,
    setMatchOver,

    setRoundCountdown,

    setPendingRoundStart,

    setShowRoundSummary

}) {

    const teamAWin =

        winnerPlayer === 0

        ||

        winnerPlayer === 2;

    const updatedMatchA =

        matchA +

        (teamAWin ? 1 : 0);

    const updatedMatchB =

        matchB +

        (teamAWin ? 0 : 1);

    setTeamA(
        teamAWin ? 4 : 0
    );

    setTeamB(
        teamAWin ? 0 : 4
    );

    setMatchA(
        updatedMatchA
    );

    setMatchB(
        updatedMatchB
    );

    setRoundHistory(

        prev => [

            ...prev,

            {

                round:
                currentRound,

                teamADahlas:
                teamAWin ? 4 : 0,

                teamBDahlas:
                teamAWin ? 0 : 4,

                teamATricks: 0,

                teamBTricks: 0,

                pointsA:
                teamAWin ? 1 : 0,

                pointsB:
                teamAWin ? 0 : 1

            }

        ]

    );

    setNotification(

        winnerPlayer === 0

        ? '🏆 You Have All 4 Dahlas'

        : `🏆 Player ${winnerPlayer + 1} Has All 4 Dahlas`

    );

    setTimeout(() => {

        setNotification('');

    }, 2500);

    if (

    completeMatch({

        currentRound,

        updatedMatchA,

        updatedMatchB,

        setMatchWinner,

        setMatchOver

    })

) {

    setTimeout(() => {

        setShowRoundSummary(
            true
        );

    }, 2500);

    return;
}

    setRoundCountdown(8);

setPendingRoundStart({

    winner:
    winnerPlayer

});

setTimeout(() => {

    setShowRoundSummary(
        true
    );

}, 2500);

}