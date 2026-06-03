export function resetMatchState({

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

}) {

    setCurrentRound(1);

    setMatchA(0);

    setMatchB(0);

    setTeamA(0);

    setTeamB(0);

    setTableDahlas(0);

    setTrumpSuit(null);

    setLeadSuit(null);

    setMatchOver(false);

    setMatchWinner(null);
}