import { motion, AnimatePresence }
from 'framer-motion';

import {
    trickCaptureVariants
}
from '../animations/trickCaptureVariants';

export default function TrickCaptureAnimation({

    show,
    team,
    tricks,
    dahlas

}) {

    return (

        <AnimatePresence>

            {

                show && (

                    <motion.div

                        variants={
                            trickCaptureVariants
                        }

                        initial="hidden"

                        animate="visible"

                        exit="exit"

                        className="
                        fixed
                        inset-0

                        z-[300]

                        pointer-events-none

                        flex
                        items-center
                        justify-center
                        "

                    >

                        <div
                        className="
                        flex
                        flex-col
                        items-center
                        "
                        >

                            {/* CARD STACK */}

                            <div
                            className="
                            relative

                            w-16
                            h-20

                            sm:w-20
                            sm:h-24
                            "
                            >

                                <div
                                className="
                                absolute

                                w-12
                                h-16

                                sm:w-14
                                sm:h-20

                                bg-white

                                rounded-lg

                                border
                                border-slate-300

                                rotate-[-8deg]

                                left-1
                                top-1
                                "
                                />

                                <div
                                className="
                                absolute

                                w-12
                                h-16

                                sm:w-14
                                sm:h-20

                                bg-white

                                rounded-lg

                                border
                                border-slate-300

                                rotate-[4deg]

                                left-1
                                top-1
                                "
                                />

                                <div
                                className="
                                absolute

                                w-12
                                h-16

                                sm:w-14
                                sm:h-20

                                bg-white

                                rounded-lg

                                border
                                border-slate-300
                                "
                                />

                            </div>

                            {/* TEXT */}

                            <div
                            className="
                            mt-2

                            text-center

                            text-white

                            font-semibold

                            text-xs
                            sm:text-sm
                            "
                            >

                                Team {team}

                            </div>

                            <div
                            className="
                            text-center

                            text-slate-300

                            text-[10px]
                            sm:text-xs
                            "
                            >

                                {tricks} Tricks

                            </div>

                            <div
                            className="
                            text-center

                            text-yellow-300

                            text-[10px]
                            sm:text-xs
                            "
                            >

                                {dahlas} Dahlas

                            </div>

                        </div>

                    </motion.div>

                )

            }

        </AnimatePresence>

    );

}