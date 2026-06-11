import { motion, AnimatePresence }
from 'framer-motion';

import {
    trumpVariants
}
from '../animations/trumpVariants';

export default function TrumpAnimation({

    show,
    suit

}) {

    const suitSymbol =

        suit === 'spades'
        ? '♠'

        : suit === 'hearts'
        ? '♥'

        : suit === 'diamonds'
        ? '♦'

        : suit === 'clubs'
        ? '♣'

        : suit;

    return (

        <AnimatePresence>

            {

                show && (

                    <motion.div

                        variants={trumpVariants}

                        initial="hidden"

                        animate="visible"

                        exit="exit"

                        className="
                        fixed
                        inset-0

                        flex
                        items-center
                        justify-center

                        z-[200]

                        pointer-events-none
                        "

                    >

                        <div
                        className="
                        bg-slate-900/90

                        border
                        border-yellow-400/40

                        backdrop-blur-sm

                        rounded-full

                        px-4
                        py-2

                        sm:px-5
                        sm:py-2

                        shadow-lg
                        "
                        >

                            <div
                            className="
                            flex
                            items-center
                            gap-2

                            text-sm
                            sm:text-base

                            font-semibold

                            text-yellow-300
                            "
                            >

                                <span
                                className="
                                text-lg
                                sm:text-xl
                                "
                                >
                                    {suitSymbol}
                                </span>

                                <span>
                                    Trump Fixed
                                </span>

                            </div>

                        </div>

                    </motion.div>

                )

            }

        </AnimatePresence>

    );

}