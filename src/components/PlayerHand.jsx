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

    const [activeCard, setActiveCard] =
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

                const cardKey =

                    `${card.suit}-${card.value}`;

                const isLegalCard =

                    !leadSuit ||

                    !cards.some(
                        c => c.suit === leadSuit
                    )

                        ? true

                        : card.suit === leadSuit;

                const isCurrentPlayer =

                    currentPlayer ===
                    playerNumber;

                return (

                    <div

                        key={cardKey}

                        className={`
                            transition-all
                            duration-200

                            ${
                                activeCard === cardKey

                                ? "scale-110 -translate-y-4"

                                : isCurrentPlayer &&
                                  isLegalCard

                                    ? "scale-105 -translate-y-1"

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

                        onMouseEnter={() => {

                            const isTouchDevice =

                                'ontouchstart' in window;

                            if (

                                !isTouchDevice

                            ) {

                                setActiveCard(
                                    cardKey
                                );

                            }

                        }}

                        onMouseLeave={() => {

                            const isTouchDevice =

                                'ontouchstart' in window;

                            if (

                                !isTouchDevice

                            ) {

                                setActiveCard(
                                    null
                                );

                            }

                        }}

                        onTouchStart={(e) => {

                            if (

                                currentPlayer !== playerNumber

                                ||

                                playerNumber !== 0

                                ||

                                !isLegalCard

                            ) {

                                return;
                            }

                            setTouchStartY(
                                e.touches[0].clientY
                            );

                            setActiveCard(
                                cardKey
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

                                setActiveCard(
                                    null
                                );

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

                                setActiveCard(
                                    null
                                );

                                playCard(
                                    index
                                );

                                return;
                            }

                            setActiveCard(
                                null
                            );

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

                                    setActiveCard(
                                        null
                                    );

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