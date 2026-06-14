  import {
    resetMatchState
}
from './match';

import {
    startNextRound
}
from './roundManager';

  export function resetMatch({

    setCurrentRound,

    setMatchA,
    setMatchB,

    setTeamA,
    setTeamB,

    setTableDahlas,

    setTrumpSuit,
    setLeadSuit,

    setMatchOver,
    setMatchWinner,

    setUncapturedTricks,

    setCapturedTrickCountA,
    setCapturedTrickCountB,

    setRoundHistory,

    setShowRoundSummary,

    setPendingRoundStart,

    setRoundCountdown,

    setDealStage,

    setNotification,

    setPlayers,
    setDeck,

    setCapturedA,
    setCapturedB,

    setCenterCards,

    setTableDahlaSuits,

    setLastWinner,
    setConsecutiveWins,

    setTrumpFixer,

    currentRound,

    matchA,
    matchB,

    setCurrentPlayer

}) {

    resetMatchState({

        setCurrentRound,

        setMatchA,

        setMatchB,

        setTeamA,

        setTeamB,

        setTableDahlas,

        setTrumpSuit,

        setLeadSuit,

        setMatchOver,

        setMatchWinner

    });

    setUncapturedTricks([]);

setCapturedTrickCountA(0);

setCapturedTrickCountB(0);

setRoundHistory([]);

setShowRoundSummary(
    false
);

setPendingRoundStart(
    null
);

setRoundCountdown(
    8
);
setDealStage(0);

setNotification('');

startNextRound({

    starter: 0,

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

});
}