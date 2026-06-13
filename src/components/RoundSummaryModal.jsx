import { motion, AnimatePresence }
from 'framer-motion';

import {
    roundSummaryVariants
}
from '../animations/roundSummaryVariants';

export default function RoundSummaryModal({

    show,
    roundHistory,

    matchA,
    matchB,

    countdown,

    onContinue,

    isMatchComplete = false,

    onNewMatch

}) {

    const winnerText =

        matchA > matchB

        ? '🏆 Team A Wins'

        : matchB > matchA

        ? '🏆 Team B Wins'

        : '🤝 Match Drawn';

    const winnerColor =

        matchA === matchB

        ? 'text-slate-300'

        : 'text-yellow-300';

    return (

        <AnimatePresence>

            {

                show && (

                    <motion.div

                        variants={
                            roundSummaryVariants
                        }

                        initial="hidden"

                        animate="visible"

                        exit="exit"

                        className="
                        fixed
                        inset-0

                        bg-black/55
                        backdrop-blur-sm

                        flex
                        items-center
                        justify-center

                        z-[500]
                        "

                    >

                        <div
                        className="
                        bg-slate-900

                        border
                        border-slate-700

                        rounded-2xl

                        p-4

                        w-[92vw]
                        max-w-[700px]

                        shadow-xl
                        "
                        >

                            <h2
                            className="
                            text-center

                            text-lg
                            md:text-xl

                            font-bold

                            mb-4
                            "
                            >
                                {

                                    isMatchComplete

                                    ? 'Match Summary'

                                    : 'Round Summary'

                                }
                            </h2>

                            {/* TABLE */}

                            <div
                            className="
                            bg-slate-800/50

                            rounded-xl

                            p-3
                            "
                            >

                                <div
                                className="
                                grid

                                grid-cols-[52px_1fr_1fr]

                                pb-2
                                mb-2

                                border-b
                                border-slate-700

                                text-xs
                                sm:text-sm

                                font-bold
                                "
                                >

                                    <div
                                    className="
                                    text-slate-300
                                    "
                                    >
                                        Round
                                    </div>

                                    <div
                                    className="
                                    text-center
                                    text-cyan-300
                                    "
                                    >
                                        Team A
                                    </div>

                                    <div
                                    className="
                                    text-center
                                    text-rose-300
                                    "
                                    >
                                        Team B
                                    </div>

                                </div>

                                {

                                    [1, 2, 3, 4, 5].map(

                                        roundNumber => {

                                            const round =

                                            roundHistory.find(

                                                r =>

                                                r.round ===
                                                roundNumber

                                            );

                                            return (

                                                <div

                                                    key={
                                                        roundNumber
                                                    }

                                                    className="
                                                    grid

                                                    grid-cols-[52px_1fr_1fr]

                                                    py-2

                                                    text-xs
                                                    sm:text-sm

                                                    border-b

                                                    border-slate-800

                                                    last:border-b-0
                                                    "
                                                >

                                                    <div
                                                    className="
                                                    text-slate-400

                                                    font-medium
                                                    "
                                                    >
                                                        R{roundNumber}
                                                    </div>

                                                    <div
                                                    className="
                                                    text-center
                                                    "
                                                    >

                                                        {

                                                            round

                                                            ? `♦${round.teamADahlas}  T${round.teamATricks}`

                                                            : '—'

                                                        }

                                                    </div>

                                                    <div
                                                    className="
                                                    text-center
                                                    "
                                                    >

                                                        {

                                                            round

                                                            ? `♦${round.teamBDahlas}  T${round.teamBTricks}`

                                                            : '—'

                                                        }

                                                    </div>

                                                </div>

                                            );

                                        }

                                    )

                                }

                            </div>

                            {/* SCORE */}

                            <div
                            className="
                            mt-5

                            border-t
                            border-slate-700

                            pt-4

                            text-center
                            "
                            >

                                <div
                                className="
                                text-xs

                                uppercase

                                tracking-widest

                                text-slate-400
                                "
                                >
                                    Match Score
                                </div>

                                {

                                    isMatchComplete && (

                                        <div
                                        className={`
                                        mt-2

                                        text-lg

                                        font-semibold

                                        ${winnerColor}
                                        `}
                                        >
                                            {winnerText}
                                        </div>

                                    )

                                }

                                <div
                                className="
                                mt-1

                                text-3xl
                                sm:text-4xl

                                font-bold

                                text-white
                                "
                                >
                                    {matchA} - {matchB}
                                </div>

                            </div>

                            {

                                isMatchComplete

                                ? (

                                    <button

                                        onClick={
                                            onNewMatch
                                        }

                                        className="
                                        mt-4

                                        w-full

                                        bg-green-600
                                        hover:bg-green-500

                                        rounded-lg

                                        py-2

                                        font-semibold
                                        "

                                    >

                                        New Match

                                    </button>

                                )

                                : (

                                    <>

                                        <div
                                        className="
                                        mt-3

                                        text-center

                                        text-slate-400

                                        text-sm
                                        "
                                        >
                                            Next round in {countdown}s
                                        </div>

                                        <button

                                            onClick={
                                                onContinue
                                            }

                                            className="
                                            mt-4

                                            w-full

                                            bg-blue-600
                                            hover:bg-blue-500

                                            rounded-lg

                                            py-2

                                            font-semibold
                                            "

                                        >

                                            Continue

                                        </button>

                                    </>

                                )

                            }

                        </div>

                    </motion.div>

                )

            }

        </AnimatePresence>

    );

}