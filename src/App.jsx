import { useEffect, useState }
from 'react';



import { determineTrickWinner }
from './game/trick';



import {

    dealRemainingCards,
    areHandsEmpty,
    sortHand

}
from './game/round';

import {

    shouldFixTrump,
    shouldCaptureDahlas,
    getConsecutiveWins,
    isTeamA,
    isRoundComplete

}
from './game/engine';



import PlayerHand
from './components/PlayerHand';

import PlayerAvatar
from './components/PlayerAvatar';

import Table
from './components/Table';

import { resetMatchState }
from './game/match';


import { chooseAICard }

from './game/ai';

import { completeMatch }
from './game/matchComplete';

import { undoMove }
from './game/undo';


import {

    getAllDahlasWinner,
    processAllDahlasWin

}
from './game/allDahlasManager';

import {
    startNextRound
}
from './game/roundManager';

import ScoreBoard
from './components/ScoreBoard';

import TrumpAnimation
from './components/TrumpAnimation';

import DehlaAnimation
from './components/DehlaAnimation';

import TrickCaptureAnimation
from './components/TrickCaptureAnimation';

import RoundSummaryModal
from './components/RoundSummaryModal';

import CenterNotification
from './components/CenterNotification';

import UndoButton
from './components/UndoButton';

import ShowCardsButton
from './components/ShowCardsButton';

import AISwitchButton
from './components/AISwitchButton';



export default function App() {

    const [players, setPlayers] =
    useState([[], [], [], []]);

    const [deck, setDeck] =
    useState([]);

    const [centerCards, setCenterCards] =
    useState([]);

    const [currentPlayer, setCurrentPlayer] =
    useState(0);

    const [leadSuit, setLeadSuit] =
    useState(null);

    const [trumpSuit, setTrumpSuit] =
    useState(null);

    const [tableDahlas, setTableDahlas] =
    useState(0);

    const [tableDahlaSuits,setTableDahlaSuits] =
    useState([]);


    const [teamA, setTeamA] =
    useState(0);

    const [teamB, setTeamB] =
    useState(0);

    const [capturedA, setCapturedA] =
useState([]);

const [capturedB, setCapturedB] =
useState([]);

const [uncapturedTricks, setUncapturedTricks] =
useState([]);

const [capturedTrickCountA,
setCapturedTrickCountA] =
useState(0);

const [capturedTrickCountB,
setCapturedTrickCountB] =
useState(0);

    const [lastWinner, setLastWinner] =
    useState(null);

    const [consecutiveWins, setConsecutiveWins] =
    useState(0);

    const [currentRound, setCurrentRound] =
    useState(1);

    const [matchA, setMatchA] =
    useState(0);

    const [matchB, setMatchB] =
    useState(0);

    const [matchOver, setMatchOver] =
    useState(false);

    const [matchWinner, setMatchWinner] =
    useState(null);

    const [trumpFixer, setTrumpFixer] =
    useState(null);

    const [history, setHistory] =
    useState([]);

    const [showTrumpAnimation,
setShowTrumpAnimation] =
useState(false);

const [trumpAnimationSuit,
setTrumpAnimationSuit] =
useState(null);

const [showDehlaAnimation,
setShowDehlaAnimation] =
useState(false);

const [dehlaAnimationSuit,
setDehlaAnimationSuit] =
useState(null);

const [showTrickCaptureAnimation,
setShowTrickCaptureAnimation] =
useState(false);

const [trickCaptureWinner,
setTrickCaptureWinner] =
useState(null);

const [showRoundSummary,
setShowRoundSummary] =
useState(false);

const [roundHistory,
setRoundHistory] =
useState([]);

const [roundCountdown,
setRoundCountdown] =
useState(8);

const [pendingRoundStart,
setPendingRoundStart] =
useState(null);





const [capturedTrickAnimationCount,
setCapturedTrickAnimationCount] =
useState(0);

const [capturedDehlaAnimationCount,
setCapturedDehlaAnimationCount] =
useState(0);

const [notification, setNotification] =
useState('');

const [dealStage, setDealStage] =
useState(0);

    const [showAllCards, setShowAllCards] =
    useState(false);

    const [aiEnabled, setAiEnabled] =
useState(true);

    


   

    // INITIAL DEAL

   useEffect(() => {

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

}, []);

useEffect(() => {

    if (

        !aiEnabled

    ) {

        return;

    }

    // HUMAN PLAYER

    if (

        currentPlayer === 0

    ) {

        return;

    }

    if (

    centerCards.length === 4

) {

    return;

}

    // NO CARDS

    if (

        players[currentPlayer]
        .length === 0

    ) {

        return;

    }

    const timer =

    setTimeout(() => {

       const aiCard =

       chooseAICard({

            hand:
            players[currentPlayer],

            leadSuit,

            centerCards,

            currentPlayer,

            lastWinner,

            tableDahlas,

            trumpSuit

        });

       const cardIndex =

players[currentPlayer]
.findIndex(

    card =>

        card.suit ===
        aiCard.suit

        &&

        card.value ===
        aiCard.value

);

        if (

            cardIndex !== -1

        ) {

            playCard(
                cardIndex
            );

        }

    }, 1000);

    return () =>

        clearTimeout(
            timer
        );

}, [

    currentPlayer,

    players,

    leadSuit,

    centerCards,

    lastWinner,

    tableDahlas,

    trumpSuit

]);

useEffect(() => {

    if (

        pendingRoundStart === null

    ) {

        return;

    }

    

    if (

        roundCountdown <= 0

    ) {

        

        setShowRoundSummary(
            false
        );

        setRoundCountdown(8);

        setCurrentRound(

            prev => prev + 1

        );

        startNextRound({

    starter:
    pendingRoundStart.winner,

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

        setPendingRoundStart(
            null
        );

        return;
    }

    const timer =

    setTimeout(() => {

        setRoundCountdown(

            prev => prev - 1

        );

    }, 1000);

    return () =>

        clearTimeout(
            timer
        );

}, [

    roundCountdown,

    pendingRoundStart

]);



   function playCard(index) {

    setHistory(prev => [

    ...prev,

    {

        players:
        players.map(
            hand => [...hand]
        ),

        centerCards:
        [...centerCards],

        currentPlayer,

        leadSuit,

        trumpSuit,

        tableDahlas,

        teamA,

        teamB,

        lastWinner,

        consecutiveWins,

        trumpFixer,
        
        tableDahlaSuits:
        [...tableDahlaSuits],

        capturedA:
        [...capturedA],

        capturedB:
        [...capturedB],

        uncapturedTricks:
        [...uncapturedTricks],

        capturedTrickCountA,

        capturedTrickCountB,

        currentRound,

matchA,

matchB,

matchOver,

matchWinner,

showRoundSummary,

roundCountdown,

pendingRoundStart,

roundHistory:
[...roundHistory],

dealStage,

notification,

deck:
[...deck]

    }

]);

    const updatedPlayers =
    players.map(hand => [...hand]);

    const card =
    updatedPlayers[currentPlayer][index];

    let localTrumpFixer =
trumpFixer;

let trumpWasFixed = false;

    if (!card) {

        return;
    }

    // FOLLOW SUIT

    if (leadSuit) {

        const hasLeadSuit =

        updatedPlayers[currentPlayer]
        .some(

            c =>

            c.suit === leadSuit

        );

        if (

            hasLeadSuit

            &&

            card.suit !== leadSuit

        ) {

          setNotification(
    'Must Follow Suit'
);

setTimeout(() => {

    setNotification('');

}, 1800);

            return;
        }
    }

    // SET LEAD SUIT

    if (!leadSuit) {

        setLeadSuit(
            card.suit
        );
    }

    // FIX TRUMP

    else if (

        !trumpSuit

    ) {

        const trickLeader =

        centerCards[0]?.player;

        if (

            shouldFixTrump({

                leadSuit,

                trumpSuit,

                currentPlayer,

                trickLeader,

                hand:
                updatedPlayers[currentPlayer]

            })

        ) {

           setTrumpSuit(
    card.suit
);

setTrumpAnimationSuit(
    card.suit
);

setShowDehlaAnimation(
    false
);

setShowTrumpAnimation(
    true
);

setTimeout(() => {

    setShowTrumpAnimation(
        false
    );

}, 1800);


localTrumpFixer =
currentPlayer;

setTrumpFixer(
    currentPlayer
);

trumpWasFixed = true;
        }
    }

   if (

    card.value === '10'

) {

    if (

        !trumpWasFixed

    ) {

        setDehlaAnimationSuit(
            card.suit
        );

        setShowDehlaAnimation(
            true
        );

        setTimeout(() => {

            setShowDehlaAnimation(
                false
            );

        }, 1800);

    }

    setTableDahlas(

        prev => prev + 1

    );

    setTableDahlaSuits(

        prev => [

            ...prev,

            card.suit

        ]

    );

}

    // REMOVE CARD

    updatedPlayers[currentPlayer]
    .splice(index, 1);

    setPlayers(
        updatedPlayers
    );

    // ADD TO CENTER

    const updatedCenter = [

        ...centerCards,

        {
            player: currentPlayer,
            card
        }

    ];

    // COMPLETE TRICK

    if (

        updatedCenter.length === 4

    ) {

        setCenterCards(
            updatedCenter
        );

        // DEAL REMAINING CARDS
        // AFTER FIRST TRUMP FIX

        if (

    localTrumpFixer !== null

    &&

    deck.length > 0

) 



{

            const result =

dealRemainingCards(

    updatedPlayers,
    deck

);

             result.players =

             result.players.map(

             hand => sortHand(hand)

             );

            setPlayers(
                result.players
            );

            

            const allDahlasWinner =

getAllDahlasWinner(
    result.players
);




if (

    allDahlasWinner !== -1

) {

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

    return;
}

            setDeck(
                result.deck
            );
            setDealStage(2);
        }

       


        // TRUE WINNER

       const activeTrump =

trumpSuit ||

(
    localTrumpFixer !== null
    ? updatedCenter.find(

        item =>

        item.player ===
        localTrumpFixer

    )?.card?.suit
    : null
);

const winner =

determineTrickWinner(

    

    updatedCenter,

    activeTrump

);

const trickRecord = {

    winner: winner.player,

    cards: updatedCenter

};



        // CHECK FINAL HAND

        const noCardsLeft =

        areHandsEmpty(
            updatedPlayers
        );

        if (

    noCardsLeft

    &&

    !trumpSuit

    &&

    localTrumpFixer === null

) {

    // FIRST 5 CARDS COMPLETE

    if (

        dealStage === 0

    ) {

        const updatedPlayersCopy =

        updatedPlayers.map(
            hand => [...hand]
        );

        const updatedDeckCopy =
        [...deck];

        for (

            let i = 0;

            i < 5;

            i++

        ) {

            for (

                let p = 0;

                p < 4;

                p++

            ) {

                updatedPlayersCopy[p]
                .push(

                    updatedDeckCopy.pop()

                );

            }

        }

        const sortedPlayers =

updatedPlayersCopy.map(

    hand => sortHand(hand)

);

setPlayers(
    sortedPlayers
);

const allDahlasWinner =

getAllDahlasWinner(
    sortedPlayers
);

if (

    allDahlasWinner !== -1

) {

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

    return;
}

        setDeck(
            updatedDeckCopy
        );

        setDealStage(1);

        setNotification(
            'No Trump Fixed • +5 Cards'
        );

        setTimeout(() => {

            setNotification('');

        }, 2200);

        setTimeout(() => {

            setCenterCards([]);

            setLeadSuit(null);

            setCurrentPlayer(
                winner.player
            );

        }, 1000);

        return;
    }

    // SECOND 5 CARDS COMPLETE

    if (

        dealStage === 1

    ) {

        const updatedPlayersCopy =

        updatedPlayers.map(
            hand => [...hand]
        );

        const updatedDeckCopy =
        [...deck];

        for (

            let i = 0;

            i < 3;

            i++

        ) {

            for (

                let p = 0;

                p < 4;

                p++

            ) {

                updatedPlayersCopy[p]
                .push(

                    updatedDeckCopy.pop()

                );

            }

        }

        const sortedPlayers =

updatedPlayersCopy.map(

    hand => sortHand(hand)

);

setPlayers(
    sortedPlayers
);

const allDahlasWinner =

getAllDahlasWinner(
    sortedPlayers
);

if (

    allDahlasWinner !== -1

) {

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

    return;
}

        setDeck(
            updatedDeckCopy
        );

        setDealStage(2);

        setNotification(
            'Still No Trump • Final 3 Cards'
        );

        setTimeout(() => {

            setNotification('');

        }, 2200);

        setTimeout(() => {

            setCenterCards([]);

            setLeadSuit(null);

            setCurrentPlayer(
                winner.player
            );

        }, 1000);

        return;
    }

}

      const newTableDahlas =

card.value === '10'

? tableDahlas + 1

: tableDahlas;

const newTableDahlaSuits =

card.value === '10'

? [

    ...tableDahlaSuits,

    card.suit

]

: tableDahlaSuits;

        // CONSECUTIVE WINS

       

        const newConsecutiveWins =

        getConsecutiveWins({

            lastWinner,

            currentWinner:
            winner.player,

            previousCount:
            consecutiveWins

        });

        setConsecutiveWins(
            newConsecutiveWins
        );

        setLastWinner(
            winner.player
        );

        let updatedTeamA =
        teamA;

        let updatedTeamB =
        teamB;

        const tricksCaptured =

        uncapturedTricks.length + 1;

        // CAPTURE DEHLAS

        

        if (

            shouldCaptureDahlas({

                consecutiveWins:
                newConsecutiveWins,

                tableDahlas:
                newTableDahlas

            })

        ) {

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

                

            } else {

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

        if (

            !shouldCaptureDahlas({

                consecutiveWins:
                newConsecutiveWins,

                tableDahlas:
                newTableDahlas

            })

        ) {

            setUncapturedTricks(

                prev => [

                    ...prev,

                    trickRecord

                ]

            );

        }

       // FINAL TRICK

if (

    noCardsLeft

    &&

    !isRoundComplete({

        teamA: updatedTeamA,

        teamB: updatedTeamB

    })

) {

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

   

}

        // ROUND COMPLETE

        if (

            isRoundComplete({

                teamA:
                updatedTeamA,

                teamB:
                updatedTeamB

            })

        ) {
let roundPointsA = 0;

let roundPointsB = 0;

if (

    updatedTeamA >

    updatedTeamB

) {

    roundPointsA = 1;

}

else if (

    updatedTeamB >

    updatedTeamA

) {

    roundPointsB = 1;

}

else {

    let tricksA =
        capturedTrickCountA;

    let tricksB =
        capturedTrickCountB;

    // Current trick batch not yet reflected in state

    if (

        shouldCaptureDahlas({

            consecutiveWins:
            newConsecutiveWins,

            tableDahlas:
            newTableDahlas

        })

    ) {

        if (

            isTeamA(
                winner.player
            )

        ) {

            tricksA +=
            tricksCaptured;

        }

        else {

            tricksB +=
            tricksCaptured;

        }

    }

    // Final trick capture path

    else if (

        noCardsLeft

    ) {

        if (

            isTeamA(
                winner.player
            )

        ) {

            tricksA +=
            uncapturedTricks.length + 1;

        }

        else {

            tricksB +=
            uncapturedTricks.length + 1;

        }

    }

    if (

        tricksA >

        tricksB

    ) {

        roundPointsA = 1;

    }

    else if (

        tricksB >

        tricksA

    ) {

        roundPointsB = 1;

    }

    else {

        roundPointsA = 0.5;

        roundPointsB = 0.5;

    }

}

            setMatchA(
                matchA + roundPointsA
            );

            setMatchB(
                matchB + roundPointsB
            );
const updatedMatchA =
matchA + roundPointsA;

const updatedMatchB =
matchB + roundPointsB;

let roundWinnerMessage = '';

if (

    roundPointsA >

    roundPointsB

) {

    roundWinnerMessage =
    '🏆 Team A Wins Round';

}

else if (

    roundPointsB >

    roundPointsA

) {

    roundWinnerMessage =
    '🏆 Team B Wins Round';

}

else {

    roundWinnerMessage =
    '🤝 Round Drawn';

}

setNotification(
    roundWinnerMessage
);

setTimeout(() => {

    setNotification('');

}, 2500);

let finalTricksA =
capturedTrickCountA;

let finalTricksB =
capturedTrickCountB;

if (

    shouldCaptureDahlas({

        consecutiveWins:
        newConsecutiveWins,

        tableDahlas:
        newTableDahlas

    })

) {

    if (

        isTeamA(
            winner.player
        )

    ) {

        finalTricksA +=
        tricksCaptured;

    }

    else {

        finalTricksB +=
        tricksCaptured;

    }

}

else if (

    noCardsLeft

) {

    if (

        isTeamA(
            winner.player
        )

    ) {

        finalTricksA +=
        uncapturedTricks.length + 1;

    }

    else {

        finalTricksB +=
        uncapturedTricks.length + 1;

    }

}

setRoundHistory(

    prev => {

        const withoutCurrentRound =

        prev.filter(

            item =>

            item.round !== currentRound

        );

        return [

            ...withoutCurrentRound,

            {

                round:
                currentRound,

                teamADahlas:
                updatedTeamA,

                teamBDahlas:
                updatedTeamB,

                teamATricks:
                finalTricksA,

                teamBTricks:
                finalTricksB,

                pointsA:
                roundPointsA,

                pointsB:
                roundPointsB

            }

        ];

    }

);

setShowDehlaAnimation(
    false
);

setShowTrumpAnimation(
    false
);

setShowTrickCaptureAnimation(
    false
);

if (

    completeMatch({

        currentRound,

        updatedMatchA,

        updatedMatchB,

        setMatchWinner,

        setMatchOver,

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
    winner.player,

    matchA:
    updatedMatchA,

    matchB:
    updatedMatchB

});

setTimeout(() => {

    setShowRoundSummary(
        true
    );

}, 2500);

return;
            
        }

        // NEXT TRICK

        setTimeout(() => {

            setCenterCards([]);

            setLeadSuit(null);

            setTrumpFixer(
                null
            );

            setCurrentPlayer(
                winner.player
            );

        }, 1000);
    }

    // CONTINUE TRICK

    else {

        setCenterCards(
            updatedCenter
        );

        setCurrentPlayer(

            (currentPlayer + 1) % 4

        );
    }
}

    // START NEXT ROUND

   

  function resetMatch() {

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



  

    return (

       <div
className="
relative
w-screen
h-screen
overflow-hidden

bg-[radial-gradient(circle_at_center,_#102a66,_#081830,_#030712)]

text-white
"
>

    <CenterNotification

    show={
        notification !== ''
    }

    text={
        notification
    }

/>

            

          

<TrumpAnimation

    show={showTrumpAnimation}

    suit={trumpAnimationSuit}

/>

<DehlaAnimation

    show={showDehlaAnimation}

    suit={dehlaAnimationSuit}

/>

<TrickCaptureAnimation

    show={
        showTrickCaptureAnimation
    }

    winner={
        trickCaptureWinner
    }

    trickCount={
        capturedTrickAnimationCount
    }

    dehlaCount={
        capturedDehlaAnimationCount
    }

/>

<RoundSummaryModal

    show={
        showRoundSummary
    }

    roundHistory={
        roundHistory
    }

    matchA={
        matchA
    }

    matchB={
        matchB
    }

    countdown={
        roundCountdown
    }

    onContinue={() => {

        setShowRoundSummary(
            false
        );

    }}

    isMatchComplete={
        matchOver
    }

    onNewMatch={
        resetMatch
    }

/>

<div
className="
absolute
top-3
left-3
md:top-4
md:left-4
z-30
"
>
<ScoreBoard
  teamA={teamA}
  teamB={teamB}
  matchA={matchA}
  matchB={matchB}
  currentRound={currentRound}
  trumpSuit={trumpSuit}
  capturedA={capturedA}
  capturedB={capturedB}
  tableDahlaSuits={tableDahlaSuits}
  capturedTrickCountA={capturedTrickCountA}
  capturedTrickCountB={capturedTrickCountB}
/>
</div>

<div
className="
absolute

top-[70px]
right-[18px]

md:top-[78px]
md:right-[28px]

flex
gap-2

z-40
"
>

<UndoButton

    undoMove={() =>

        undoMove({

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

        })

    }

/>

<ShowCardsButton
    showAllCards={showAllCards}
    setShowAllCards={setShowAllCards}
/>

<AISwitchButton
    aiEnabled={aiEnabled}
    setAiEnabled={setAiEnabled}
/>

</div>



      {/* PLAYER 2 */}

<div
className="
absolute

top-[6px]
left-1/2
-translate-x-1/2

flex
flex-col
items-center

z-40
"
>

{

showAllCards

? (

<PlayerHand

    cards={players[2]}

    currentPlayer={currentPlayer}

    playerNumber={2}

    playCard={playCard}

    trumpSuit={trumpSuit}

/>

)

: (

<PlayerAvatar

    playerName="Player 2"
    position="bottom"

    cardCount={
        players[2].length
    }

    isCurrentPlayer={
        currentPlayer === 2
    }

/>

)

}

</div>

            

            {/* CENTER */}

           <div
className="
absolute
top-[49%]
left-1/2

-translate-x-1/2
-translate-y-1/2

flex
justify-center
items-center

w-full
"
>

               {/* PLAYER 4 */}

<div
className="
absolute
left-[12px]

md:left-[18px]

lg:left-[28px]

top-1/2
-translate-y-1/2
z-20
"
>

{

showAllCards

? (

<PlayerHand

    cards={players[3]}

    currentPlayer={currentPlayer}

    playerNumber={3}

    playCard={playCard}

    trumpSuit={trumpSuit}

    vertical={true}

/>

)

: (

<PlayerAvatar

    playerName="Player 4"
    position="right"
    cardCount={
        players[3].length
    }

    isCurrentPlayer={
        currentPlayer === 3
    }

/>

)

}

</div>

               {/* TABLE */}

<div
className="
absolute

left-1/2
top-1/2

-translate-x-1/2
-translate-y-1/2

w-[72vw]
max-w-[900px]

h-[46vh]

flex
items-center
justify-center
"
>

<Table
    centerCards={centerCards}
/>

</div>
               {/* PLAYER 3 */}

<div
className="
absolute

right-[12px]

md:right-[18px]

lg:right-[28px]

top-1/2
-translate-y-1/2

flex
flex-col
items-center

z-40
"
>

{

showAllCards

? (

<PlayerHand

    cards={players[1]}

    currentPlayer={currentPlayer}

    playerNumber={1}

    playCard={playCard}

    trumpSuit={trumpSuit}

    vertical={true}

/>

)

: (

<PlayerAvatar

    playerName="Player 3"
    position="left"

    cardCount={
        players[1].length
    }

    isCurrentPlayer={
        currentPlayer === 1
    }

/>

)

}

</div>
            </div>

       {/* PLAYER 1 */}

<div
className="
absolute

bottom-[2px]

sm:bottom-[4px]

md:bottom-[8px]

left-1/2
-translate-x-1/2

flex
flex-col
items-center

z-50

w-full
"
>

  <div className="translate-y-12 md:translate-y-7">
 <PlayerHand

    cards={players[0]}

    currentPlayer={currentPlayer}

    playerNumber={0}

    playCard={playCard}

    trumpSuit={trumpSuit}

    leadSuit={leadSuit}

/>
</div>

<div className="-mt-5 relative z-50">
    <PlayerAvatar

    playerName="You"

    cardCount={
        players[0].length
    }

    isCurrentPlayer={
        currentPlayer === 0
    }

    showCardFan={false}

    position="bottomPlayer"
/>
</div>
</div>
        </div>
    );
}