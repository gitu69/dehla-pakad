export function processCapture({

    winner,

    trickRecord,

    newConsecutiveWins,

    newTableDahlas,

    newTableDahlaSuits,

    uncapturedTricks,

    teamA,

    teamB,

    setTeamA,
    setTeamB,

    setCapturedA,
    setCapturedB,

    setCapturedTrickCountA,
    setCapturedTrickCountB,

    setCapturedTrickAnimationCount,
    setCapturedDehlaAnimationCount,

    setTrickCaptureWinner,

    setShowTrickCaptureAnimation,

    setShowDehlaAnimation,
    setShowTrumpAnimation,

    setTableDahlas,
    setTableDahlaSuits,

    setUncapturedTricks,

    shouldCaptureDahlas,

    isTeamA

}) {

    let updatedTeamA =
    teamA;

    let updatedTeamB =
    teamB;

    const tricksCaptured =

    uncapturedTricks.length + 1;

    const captured =

    shouldCaptureDahlas({

        consecutiveWins:
        newConsecutiveWins,

        tableDahlas:
        newTableDahlas

    });

    if (!captured) {

        setUncapturedTricks(

            prev => [

                ...prev,

                trickRecord

            ]

        );

    }

    if (captured) {

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

            prev + tricksCaptured

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

            prev + tricksCaptured

        );

    }

    setShowDehlaAnimation(
        false
    );

    setShowTrumpAnimation(
        false
    );

    setCapturedTrickAnimationCount(
        tricksCaptured
    );

    setCapturedDehlaAnimationCount(
        newTableDahlas
    );

    setTrickCaptureWinner(

        isTeamA(
            winner.player
        )

        ? 'A'

        : 'B'

    );

    setShowTrickCaptureAnimation(
        true
    );

    setTimeout(() => {

        setShowTrickCaptureAnimation(
            false
        );

    }, 2200);

    setTableDahlas(0);

    setTableDahlaSuits([]);

    setUncapturedTricks([]);

}

    return {

        updatedTeamA,

        updatedTeamB,

        tricksCaptured,

        captured

    };

}