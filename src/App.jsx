import { useEffect, useState }
from 'react';

import { createDeck }
from './game/deck';

import { determineTrickWinner }
from './game/trick';

import {

    calculateRoundPoints

}
from './game/scoring';

import {

    createInitialHands,
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

import Card
from './components/Card';

import GameInfo
from './components/GameInfo';

import PlayerHand
from './components/PlayerHand';

import PlayerAvatar
from './components/PlayerAvatar';

import Table
from './components/Table';

import { resetMatchState }
from './game/match';

import {
    resetRoundState
}
from './game/setup';

import {

    chooseAICard

}

from './game/ai';

import { completeMatch }
from './game/matchComplete';

import Message
from './components/Message';

import ScoreBoard
from './components/ScoreBoard';

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

    const [capturedA,
setCapturedA] =
useState([]);

const [capturedB,
setCapturedB] =
useState([]);

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

    const [showAllCards, setShowAllCards] =
    useState(false);

    const [aiEnabled, setAiEnabled] =
useState(true);

    const [message, setMessage] =
    useState('');


   

    // INITIAL DEAL

   useEffect(() => {

    startNextRound(0);

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

function showMessage(text) {

    setMessage(text);

    setTimeout(() => {

        setMessage('');

    }, 2000);

}

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

        currentRound,

matchA,

matchB,

matchOver,

matchWinner,

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

           showMessage(
           'Must follow suit'
           );

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

showMessage(
    `Trump fixed: ${card.suit}`
);

localTrumpFixer =
currentPlayer;

setTrumpFixer(
    currentPlayer
);
        }
    }

    if (

    card.value === '10'

) {

    showMessage(

        `🔥 Dahla Played: ${card.suit}`

    );

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

) {

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

            setDeck(
                result.deck
            );
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



        // CHECK FINAL HAND

        const noCardsLeft =

        areHandsEmpty(
            updatedPlayers
        );

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

                showMessage(
                `Team A captured ${newTableDahlas} Dahlas`
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

                showMessage(
                `Team B captured ${newTableDahlas} Dahlas`
                );
            }

            setTableDahlas(0);

            setTableDahlaSuits([]);
        }

       // FINAL TRICK

if (

    noCardsLeft

) {

    let finalDahlas = 0;

    if (

        !shouldCaptureDahlas({

            consecutiveWins:
            newConsecutiveWins,

            tableDahlas:
            newTableDahlas

        })

    ) {

        finalDahlas =
        newTableDahlas;

        if (

            isTeamA(
                winner.player
            )

        ) {

            updatedTeamA +=
            finalDahlas;

            setTeamA(
                updatedTeamA
            );

        } else {

            updatedTeamB +=
            finalDahlas;

            setTeamB(
                updatedTeamB
            );
        }
    }

    setTableDahlas(0);

    setTableDahlaSuits([]);
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

            const roundPointsA =

            calculateRoundPoints(
                updatedTeamA
            );

            const roundPointsB =

            calculateRoundPoints(
                updatedTeamB
            );

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

setHistory([]);



setTimeout(() => {

    // MATCH COMPLETE

   if (

    completeMatch({

        currentRound,

        updatedMatchA,

        updatedMatchB,

        setMatchWinner,

        setMatchOver,
        
        showMessage

    })

) {

    return;
}

    showMessage(
        'Round Complete!'
    );

    setCurrentRound(
        prev => prev + 1
    );

    startNextRound(
        winner.player
    );

}, 500);
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

    function startNextRound(starter) {

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

      // RESET ROUND STATES

        setPlayers(
            newPlayers
        );

        setDeck(
            shuffledDeck
        );

        setCapturedA([]);
setCapturedB([]);

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
        // ROUND STARTER

      setCurrentPlayer(
       starter
       );
    }

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

    startNextRound(0);
}

function undoMove() {

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

    setHistory(

        history.slice(
            0,
            -1
        )

    );
}

  

    return (

        <div
className="
relative
min-h-screen
bg-[radial-gradient(circle_at_center,_#102a66,_#081830,_#030712)]
text-white
p-4
"
>

            

          


<Message
    message={message}
/>

<div
className="
absolute
top-2
left-2
sm:top-4
sm:left-4
z-20
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
/>
</div>

<div
className="
absolute
top-2
right-2
sm:top-4
sm:right-4
z-20
flex
gap-1
sm:gap-2
"
>

<UndoButton
    undoMove={undoMove}
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
top-[10px]
sm:top-[20px]
md:top-[30px]
left-1/2
-translate-x-1/2
z-20
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
left-[4vw]
sm:left-[5vw]
md:left-[6vw]

top-[45%]
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

w-[88vw]
max-w-[600px]

h-[38vh]
max-h-[320px]

rounded-3xl
border
border-slate-500

bg-slate-800/20
backdrop-blur-sm

flex
items-center
justify-center

shadow-xl
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
right-[4vw]
sm:right-[5vw]
md:right-[6vw]

top-[45%]
-translate-y-1/2
z-20
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
fixed
bottom-[50px]
sm:bottom-[60px]
md:bottom-[70px]

left-1/2
-translate-x-1/2

flex
flex-col
items-center

z-50

w-full
"
>

   <PlayerAvatar

    playerName="You"

    cardCount={
        players[0].length
    }

    isCurrentPlayer={
        currentPlayer === 0
    }

    showCardFan={false}

/>


    <PlayerHand

        cards={players[0]}

        currentPlayer={currentPlayer}

        playerNumber={0}

        playCard={playCard}

        trumpSuit={trumpSuit}

    />

</div>
        </div>
    );
}