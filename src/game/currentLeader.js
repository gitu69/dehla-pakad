import { determineTrickWinner }
from './trick';

export function getCurrentLeader(

    centerCards,

    trumpSuit

) {

    if (

        centerCards.length === 0

    ) {

        return null;
    }

    const winner =

    determineTrickWinner(

        centerCards,

        trumpSuit

    );

    return winner.player;
}