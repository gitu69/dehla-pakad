import { motion, AnimatePresence }
from 'framer-motion';

import {
    dehlaVariants
}
from '../animations/dehlaVariants';

export default function DehlaAnimation({

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

                        variants={dehlaVariants}

                        initial="hidden"

                        animate="visible"

                        exit="exit"

                       className="
fixed
inset-0

flex
items-center
justify-center

translate-y-20
sm:translate-y-24
md:translate-y-28

z-[205]

pointer-events-none
"

                    >

                        <div
                        className="
                        bg-slate-900/90

                        border
                        border-orange-400/40

                        backdrop-blur-sm

                        rounded-full

                        px-4
                        py-2

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

                            text-orange-300
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
                                    Dahla Played
                                </span>

                            </div>

                        </div>

                    </motion.div>

                )

            }

        </AnimatePresence>

    );

}