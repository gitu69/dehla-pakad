import Card from './Card';

export default function PlayerHand({

    cards,
    currentPlayer,
    playerNumber,
    playCard,
    trumpSuit,
    vertical = false

}) {

    return (

       <div

className={

    vertical

   ? "flex flex-col gap-1"
   : "flex justify-center -space-x-1"
     }
     >

            {cards.map(

                (card, index) => (

                   <Card

                   key={index}

                   card={card}

                   isTrump={
                   trumpSuit &&
                   card.suit === trumpSuit
                   }

                    onClick={() => {
                            if (

                                currentPlayer ===
                                playerNumber

                            ) {

                                playCard(
                                    index
                                );
                            }
                        }}

                    />

                )

            )}

        </div>
    );
}