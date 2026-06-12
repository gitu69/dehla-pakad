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

    onContinue

}) {

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
                        max-w-[520px]

                        shadow-xl
                        "
                        >

                            <h2
                            className="
                            text-center

                            text-lg
                            md:text-xl

                            font-bold

                            mb-3
                            "
                            >
                                Round Summary
                            </h2>

                            <div
                            className="
                            space-y-2
                            "
                            >

                                {

                                    roundHistory.map(

                                        round => (

                                            <div

                                                key={
                                                    round.round
                                                }

                                                className="
                                                bg-slate-800/70

                                                rounded-lg

                                                px-3
                                                py-2
                                                "
                                            >

                                                <div
                                                className="
                                                text-xs
                                                text-slate-400

                                                mb-1
                                                "
                                                >
                                                    Round {round.round}
                                                </div>

                                                <div
                                                className="
                                                text-sm
                                                "
                                                >
                                                    A {round.teamADahlas}D {round.teamATricks}T +{round.pointsA}
                                                </div>

                                                <div
                                                className="
                                                text-sm
                                                "
                                                >
                                                    B {round.teamBDahlas}D {round.teamBTricks}T +{round.pointsB}
                                                </div>

                                            </div>

                                        )

                                    )

                                }

                            </div>

                            <div
                            className="
                            mt-4

                            text-center

                            text-lg

                            font-bold
                            "
                            >
                                Score: {matchA} - {matchB}
                            </div>

                            <div
                            className="
                            mt-2

                            text-center

                            text-slate-400
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

                                Start Now

                            </button>

                        </div>

                    </motion.div>

                )

            }

        </AnimatePresence>

    );

}