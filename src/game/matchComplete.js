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

    

    return true;
}