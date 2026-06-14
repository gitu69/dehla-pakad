export function undoMove( {


     history,
    setHistory,

    setPlayers,
    setCenterCards,
    setCurrentPlayer,

    setLeadSuit,
    setTrumpSuit,

    setTableDahlas,
    setTableDahlaSuits,

    setTeamA,
    setTeamB,

    setCapturedA,
    setCapturedB,

    setUncapturedTricks,

    setCapturedTrickCountA,
    setCapturedTrickCountB,

    setLastWinner,
    setConsecutiveWins,

    setTrumpFixer,

    setDeck,

    setCurrentRound,

    setMatchA,
    setMatchB,

    setMatchOver,
    setMatchWinner,

    setShowRoundSummary,

    setRoundCountdown,

    setPendingRoundStart,

    setRoundHistory,

    setDealStage,

    setNotification

}) {



    if (
        history.length === 0
    ) {

        return;
    }

    const previous =

    history[
        history.length - 1
    ];

    setPlayers(
        previous.players
    );

    setCenterCards(
        previous.centerCards
    );

    setCurrentPlayer(
        previous.currentPlayer
    );

    setLeadSuit(
        previous.leadSuit
    );

    setTrumpSuit(
        previous.trumpSuit
    );

    setTableDahlas(
        previous.tableDahlas
    );

    setTableDahlaSuits(
    previous.tableDahlaSuits
    );

    setTeamA(
        previous.teamA
    );

    setTeamB(
        previous.teamB
    );

    setCapturedA(
    previous.capturedA
    );

    setCapturedB(
    previous.capturedB
    );

    setUncapturedTricks(
    previous.uncapturedTricks
    );

    setCapturedTrickCountA(
    previous.capturedTrickCountA
    );

    setCapturedTrickCountB(
    previous.capturedTrickCountB
    );

    setLastWinner(
        previous.lastWinner
    );

    setConsecutiveWins(
        previous.consecutiveWins
    );

    setTrumpFixer(
        previous.trumpFixer
    );

    setDeck(
        previous.deck
    );

    setCurrentRound(
    previous.currentRound
);

setMatchA(
    previous.matchA
);

setMatchB(
    previous.matchB
);

setMatchOver(
    previous.matchOver
);

setMatchWinner(
    previous.matchWinner
);

setShowRoundSummary(
    previous.showRoundSummary
);

setRoundCountdown(
    previous.roundCountdown
);

setPendingRoundStart(
    previous.pendingRoundStart
);

setRoundHistory(
    previous.roundHistory
);

setDealStage(
    previous.dealStage
);

setNotification(
    previous.notification || ''
);



    setHistory(

        history.slice(
            0,
            -1
        )

    );
}