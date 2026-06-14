import { createDeck }
from './deck';

import {

    createInitialHands,
    sortHand

}
from './round';

import {

    resetRoundState

}
from './setup';

import {

    getAllDahlasWinner,
    processAllDahlasWin

}
from './allDahlasManager';

export function startNextRound({

    starter,

    setPlayers,
    setDeck,

    setCapturedA,
    setCapturedB,

    setUncapturedTricks,

    setCapturedTrickCountA,
    setCapturedTrickCountB,

    setDealStage,

    setCenterCards,
    setLeadSuit,
    setTrumpSuit,

    setTableDahlas,
    setTableDahlaSuits,

    setLastWinner,
    setConsecutiveWins,

    setTrumpFixer,

    setTeamA,
    setTeamB,

    currentRound,

    matchA,
    matchB,

    setMatchA,
    setMatchB,

    setRoundHistory,

    setNotification,

    setMatchWinner,
    setMatchOver,

    setRoundCountdown,

    setPendingRoundStart,

    setShowRoundSummary,

    setCurrentPlayer

}) 

{

        const shuffledDeck =
        createDeck();

       let newPlayers =

createInitialHands(
    shuffledDeck
);

newPlayers =

newPlayers.map(

    hand => sortHand(hand)

);


setPlayers(
    newPlayers
);

setDeck(
    shuffledDeck
);

// RESET ROUND STATES

        

        setCapturedA([]);
setCapturedB([]);

setUncapturedTricks([]);

setCapturedTrickCountA(0);

setCapturedTrickCountB(0);

setDealStage(0);

        resetRoundState({

    setCenterCards,

    setLeadSuit,

    setTrumpSuit,

    setTableDahlas,

    setTableDahlaSuits,

    setLastWinner,

    setConsecutiveWins,

    setTrumpFixer,

    setTeamA,

    setTeamB

});

const allDahlasWinner =

getAllDahlasWinner(
    newPlayers
);

if (

    allDahlasWinner !== -1

) {

    setTimeout(() => {

        processAllDahlasWin({

    winnerPlayer:
    allDahlasWinner,

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

});

    }, 100);

    return;
}

      
        // ROUND STARTER

      setCurrentPlayer(
       starter
       );
    }