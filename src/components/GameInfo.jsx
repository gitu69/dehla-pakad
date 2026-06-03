export default function GameInfo({

    currentPlayer,
    trumpSuit,
    tableDahlas,
    tableDahlaSuits,
    capturedA,
    capturedB,
    teamA,
    teamB,
    currentRound,
    matchA,
    matchB,
    matchWinner,
    matchOver,
    resetMatch

}) {

    return (

        <div
        className="
        text-lg
        font-bold
        text-center
        mb-3
        "
        >

            <div>

                ▶ Player
                {' '}
                {currentPlayer + 1}
                {' '}
                Turn

            </div>

            <div className="mt-1">

                Round:
                {' '}
                {currentRound}/5

                {' | '}

                Trump:
                {' '}

                {

                    trumpSuit

                    ? (

                        <span
                        className={
                            trumpSuit === '♥'
                            ||
                            trumpSuit === '♦'
                            ? 'text-red-500'
                           : 'text-gray-300'
                        }
                        >

                            {trumpSuit}

                        </span>

                    )

                    : 'None'

                }

            </div>

            <div>

                Dahlas:
                {' '}
                {tableDahlas}

                {' | '}

                Team A:
                {' '}
                {teamA}

                {' | '}

                Team B:
                {' '}
                {teamB}

                {' | '}

                Points:
                {' '}

                {matchA}

                {' - '}

                {matchB}

            </div>

            {

                tableDahlaSuits.length > 0 && (

                    <div
                    className="
                    mt-1
                    text-2xl
                    tracking-widest
                    "
                    >

                        {

                            tableDahlaSuits.map(

                                (suit, index) => (

                                    <span

                                        key={index}

                                        className={`

                                        mx-1

                                        ${

                                            suit === '♥'
                                            ||
                                            suit === '♦'

                                            ? 'text-red-500'

                                           : 'text-gray-300'

                                        }

                                        `}

                                    >

                                        {suit}

                                    </span>

                                )

                            )

                        }

                    </div>

                )

            }

            <div
            className="
            mt-2
            text-base
            "
            >

                <div>

                    Team A Captured:

                    {' '}

                    {

                        capturedA.length > 0

                        ? capturedA.map(

                            (suit, index) => (

                                <span

                                    key={index}

                                    className={`

                                    mx-1

                                    ${

                                        suit === '♥'
                                        ||
                                        suit === '♦'

                                        ? 'text-red-500'

                                        : 'text-gray-300'

                                    }

                                    `}

                                >

                                    {suit}

                                </span>

                            )

                        )

                        : '-'

                    }

                </div>

                <div>

                    Team B Captured:

                    {' '}

                    {

                        capturedB.length > 0

                        ? capturedB.map(

                            (suit, index) => (

                                <span

                                    key={index}

                                    className={`

                                    mx-1

                                    ${

                                        suit === '♥'
                                        ||
                                        suit === '♦'

                                        ? 'text-red-500'

                                       : 'text-gray-300'
                                    }

                                    `}

                                >

                                    {suit}

                                </span>

                            )

                        )

                        : '-'

                    }

                </div>

            </div>

            {

                matchWinner && (

                    <div>

                        Winner:
                        {' '}
                        {matchWinner}

                    </div>

                )

            }

            {

                matchOver && (

                    <button

                        onClick={resetMatch}

                        className="
                        mt-2
                        bg-blue-600
                        px-4
                        py-2
                        rounded
                        "

                    >

                        New Match

                    </button>

                )

            }

        </div>

    );

}