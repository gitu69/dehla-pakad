export function validateFollowSuit({

    leadSuit,
    hand,
    card,
    setNotification

}) {

    if (!leadSuit) {

        return true;
    }

    const hasLeadSuit =

        hand.some(

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

        return false;
    }

    return true;
}