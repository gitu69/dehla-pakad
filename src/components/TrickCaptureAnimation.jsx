import { motion, AnimatePresence }
from 'framer-motion';

import {
    trickCaptureVariants
}
from '../animations/trickCaptureVariants';

export default function TrickCaptureAnimation({

    show,
    winner,
    trickCount,
    dehlaCount

}) {

    return (

        <AnimatePresence>

            {

                show && (

                    <motion.div

                        variants={trickCaptureVariants}

                        initial="hidden"

                        animate="visible"

                        exit="exit"

                        className="
fixed
inset-0

flex
items-center
justify-center

translate-y-40
sm:translate-y-44
md:translate-y-48

pointer-events-none

z-[210]
"

                    >

                        <div
                        className="
                        bg-slate-900/90

                        border
                        border-cyan-400/40

                        backdrop-blur-sm

                        rounded-2xl

                        px-5
                        py-3

                        shadow-lg

                        text-center
                        "
                        >

                            <div
                            className="
                            text-cyan-300
                            font-semibold
                            "
                            >

                                {

                                    winner === 'A'

                                    ? 'Team A'

                                    : 'Team B'

                                }

                                {' '}
                                Captured

                            </div>

                            <div
                            className="
                            text-sm
                            text-slate-300
                            mt-1
                            "
                            >

                                {trickCount}
                                {' '}
                                Tricks

                                {' • '}

                                {dehlaCount}
                                {' '}
                                Dahlas

                            </div>

                        </div>

                    </motion.div>

                )

            }

        </AnimatePresence>

    );

}