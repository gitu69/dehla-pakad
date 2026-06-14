export function handleDehlaPlayed({

    card,

    trumpWasFixed,

    setDehlaAnimationSuit,

    setShowDehlaAnimation,

    setTableDahlas,

    setTableDahlaSuits

}) {

    if (

        card.value !== '10'

    ) {

        return;
    }

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