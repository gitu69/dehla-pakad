export function hasAllFourDahlas(hand) {

    const suits =

        hand

        .filter(

            card =>

            card.value === '10'

        )

        .map(

            card => card.suit

        );

    return (

        suits.includes('♠')

        &&

        suits.includes('♥')

        &&

        suits.includes('♣')

        &&

        suits.includes('♦')

    );

}