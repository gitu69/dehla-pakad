export default function GameInfo({

    currentPlayer,
    matchWinner,
    matchOver,
    resetMatch

}) {

    return (

        <div
        className="
        text-center
        mb-3
        "
        >

            {/* Current Turn */}

            <div
            className="
            inline-flex
            items-center
            gap-2

            px-4
            py-2

            bg-slate-900/60
            backdrop-blur-sm

            border
            border-slate-700

            rounded-xl

            text-lg
            font-bold
            "
            >

                <span className="text-blue-400">
                    ▶
                </span>

                Player {currentPlayer + 1} Turn

            </div>

            {/* Match Winner */}

            {

                matchWinner && (

                    <div
                    className="
                    mt-3
                    text-xl
                    font-bold
                    text-yellow-400
                    "
                    >

                        🏆 Winner: {matchWinner}

                    </div>

                )

            }

            {/* New Match Button */}

            {

                matchOver && (

                    <button

                        onClick={resetMatch}

                        className="
                        mt-3

                        bg-blue-600
                        hover:bg-blue-500

                        px-5
                        py-2

                        rounded-xl

                        font-bold
                        "

                    >

                        New Match

                    </button>

                )

            }

        </div>

    );

}