import {
    shouldFixTrump
}
from './engine';

export function handleTrumpFix({

    trumpSuit,

    leadSuit,

    currentPlayer,

    centerCards,

    hand,

    card,

    setTrumpSuit,

    setTrumpAnimationSuit,

    setShowTrumpAnimation,

    setShowDehlaAnimation,

    setTrumpFixer

}) {

    let localTrumpFixer = null;

    let trumpWasFixed = false;

    if (

        trumpSuit

    ) {

        return {

            localTrumpFixer,
            trumpWasFixed

        };

    }

    const trickLeader =

        centerCards[0]?.player;

    if (

        shouldFixTrump({

            leadSuit,

            trumpSuit,

            currentPlayer,

            trickLeader,

            hand

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

    return {

        localTrumpFixer,
        trumpWasFixed

    };
}