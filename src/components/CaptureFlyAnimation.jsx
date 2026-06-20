import { motion, AnimatePresence }
from 'framer-motion';

import {
    useEffect,
    useState
}
from 'react';

export default function CaptureFlyAnimation({

    show,
    winner,
    trickCount,
    dehlaCount

}) {

    const [flyAway, setFlyAway] =
    useState(false);

    useEffect(() => {

        if (

            !show

        ) {

            setFlyAway(
                false
            );

            return;
        }

        const timer =

        setTimeout(() => {

            setFlyAway(
                true
            );

        }, 500);

        return () =>

            clearTimeout(
                timer
            );

    }, [

        show

    ]);

    return (

        <AnimatePresence>

            {

                show && (

                    <motion.div

                        initial={{

                            opacity: 0

                        }}

                        animate={

                            flyAway

                            ? {

                                x: -60,

                                y: -25,

                                opacity: 0

                              }

                            : {

                                opacity: 0.8

                              }

                        }

                        exit={{

                            opacity: 0

                        }}

                        transition={{

                            duration:

                                flyAway

                                ? 1.2

                                : 0.3

                        }}

                        className="
fixed

left-1/2
top-1/2

-translate-x-1/2
-translate-y-1/2

translate-y-16

z-[205]

pointer-events-none
"

                    >

                        <div
                        className="
flex
gap-2
"
                        >

                            {/* Diamond Dahla */}

                            <div
                            className="
w-10
h-14

opacity-80

bg-white

rounded-md

border
border-red-400

flex
flex-col
items-center
justify-center
"
                            >

                                <div
                                className="
text-lg
font-bold
text-red-600
leading-none
"
                                >
                                    ♦
                                </div>

                                <div
                                className="
text-[10px]
font-bold
text-red-600
"
                                >
                                    10
                                </div>

                            </div>

                            {/* Club Dahla */}

                            {

                                dehlaCount >= 2 && (

                                    <div
                                    className="
w-10
h-14

opacity-80

bg-white

rounded-md

border
border-slate-400

flex
flex-col
items-center
justify-center
"
                                    >

                                        <div
                                        className="
text-lg
font-bold
text-slate-800
leading-none
"
                                        >
                                            ♣
                                        </div>

                                        <div
                                        className="
text-[10px]
font-bold
text-slate-800
"
                                        >
                                            10
                                        </div>

                                    </div>

                                )

                            }

                        </div>

                    </motion.div>

                )

            }

        </AnimatePresence>

    );

}