import {
    getMatchWinner
}
from './matchResult';


export function completeMatch({

    currentRound,
    updatedMatchA,
    updatedMatchB,
    setMatchWinner,
    setMatchOver,
    showMessage

}) {

    if (

        currentRound !== 5

    ) {

        return false;
    }

    const winnerName =

    getMatchWinner(

        updatedMatchA,

        updatedMatchB

    );

    setMatchWinner(
        winnerName
    );

    setMatchOver(
        true
    );

    showMessage(

    winnerName === 'Draw'

    ? 'Match Draw!'

    : `🏆 ${winnerName} Wins Match!`

);

    return true;
}