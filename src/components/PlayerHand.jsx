import Card from './Card';

export default function PlayerHand({

    cards,
    currentPlayer,
    playerNumber,
    playCard,
    trumpSuit,
    leadSuit,
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

                const isLegalCard =

                    !leadSuit ||

                    !cards.some(
                        c => c.suit === leadSuit
                    )

                        ? true

                        : card.suit === leadSuit;

                return (

                    <div

                        key={index}

                        className={`
                            transition-all
                            duration-200

                           ${
    playerNumber === 0 &&
    currentPlayer === 0 &&
    isLegalCard

        ? "scale-110 -translate-y-2"

        : ""
}
                        `}

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