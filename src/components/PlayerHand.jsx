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

                ? "flex flex-col -space-y-8"

                : "flex justify-center items-end"

            }

        >

            {cards.map((card, index) => {

                const middle = (cards.length - 1) / 2;

                const offset = index - middle;

                return (

                    <div

                        key={index}

                        className="transition-all duration-200"

                        style={

                            vertical

                            ? {

                                marginTop: "-28px",

                                zIndex: index

                              }

                            : {

    marginLeft:
        index === 0
        ? "0px"
        : "-18px",

    zIndex: index
}

                        }

                    >

                        <Card

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

                    </div>

                );

            })}

        </div>

    );

}