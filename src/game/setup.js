export function resetRoundState({

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
    

}) {

    setCenterCards([]);

    setLeadSuit(null);

    setTrumpSuit(null);

    setTableDahlas(0);

    setTableDahlaSuits([]);

    setLastWinner(null);

    setConsecutiveWins(0);

    setTrumpFixer(null);

    setTeamA(0);

    setTeamB(0);
}