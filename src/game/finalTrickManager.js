export function processFinalTrick({

    noCardsLeft,

    updatedTeamA,

    updatedTeamB,

    winner,

    newTableDahlas,

    newTableDahlaSuits,

    uncapturedTricks,

    setTeamA,
    setTeamB,

    setCapturedA,
    setCapturedB,

    setCapturedTrickCountA,
    setCapturedTrickCountB,

    setTableDahlas,
    setTableDahlaSuits,

    setUncapturedTricks,

    isRoundComplete,

    isTeamA

}) {

    if (

        !noCardsLeft

        ||

        isRoundComplete({

            teamA: updatedTeamA,

            teamB: updatedTeamB

        })

    ) {

        return {

            updatedTeamA,

            updatedTeamB

        };

    }

    const finalTricksCaptured =

        uncapturedTricks.length + 1;

    if (

        isTeamA(
            winner.player
        )

    ) {

        updatedTeamA +=
        newTableDahlas;

        setTeamA(
            updatedTeamA
        );

        setCapturedA(

            prev => [

                ...prev,

                ...newTableDahlaSuits

            ]

        );

        setCapturedTrickCountA(

            prev =>

            prev + finalTricksCaptured

        );

    }

    else {

        updatedTeamB +=
        newTableDahlas;

        setTeamB(
            updatedTeamB
        );

        setCapturedB(

            prev => [

                ...prev,

                ...newTableDahlaSuits

            ]

        );

        setCapturedTrickCountB(

            prev =>

            prev + finalTricksCaptured

        );

    }

    setTableDahlas(0);

    setTableDahlaSuits([]);

    setUncapturedTricks([]);

    return {

        updatedTeamA,

        updatedTeamB

    };

}