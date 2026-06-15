import Card from './Card';

import { useState } from 'react';

export default function PlayerHand({

    cards,
    currentPlayer,
    playerNumber,
    playCard,
    trumpSuit,
    leadSuit,
    vertical = false

}) {

    const [touchStartY, setTouchStartY] =
    useState(null);

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

                        className="
                            transition-all
                            duration-200
                        "

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

                        onTouchStart={(e) => {

                            setTouchStartY(
                                e.touches[0].clientY
                            );

                        }}

                        onTouchEnd={(e) => {

                            if (

                                currentPlayer !== playerNumber

                            ) {

                                return;
                            }

                            if (

                                playerNumber !== 0

                            ) {

                                return;
                            }

                            if (

                                !isLegalCard

                            ) {

                                return;
                            }

                            if (

                                touchStartY === null

                            ) {

                                return;
                            }

                            const touchEndY =

                                e.changedTouches[0]
                                .clientY;

                            const swipeDistance =

                                touchStartY -
                                touchEndY;

                            if (

                                swipeDistance > 60

                            ) {

                                playCard(
                                    index
                                );
                            }

                        }}

                    >

                        <Card

                            card={card}

                            isTrump={

                                trumpSuit &&

                                card.suit === trumpSuit

                            }

                            onClick={() => {

                                const isTouchDevice =

                                    'ontouchstart' in window;

                                if (

                                    isTouchDevice

                                ) {

                                    return;
                                }

                                if (

                                    currentPlayer ===
                                    playerNumber

                                    &&

                                    isLegalCard

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