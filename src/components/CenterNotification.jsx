import { motion, AnimatePresence }
from 'framer-motion';

export default function CenterNotification({

    show,
    text

}) {

    return (

        <AnimatePresence>

            {

                show && (

                    <motion.div

                        initial={{
                            opacity: 0,
                            scale: 0.8
                        }}

                        animate={{
                            opacity: 1,
                            scale: 1
                        }}

                        exit={{
                            opacity: 0,
                            scale: 0.8
                        }}

                        transition={{
                            duration: 0.25
                        }}

                        className="
                        fixed
                        inset-0

                        flex
                        items-center
                        justify-center

                        pointer-events-none

                        z-[250]
                        "
                    >

                        <div
                        className="
                        bg-slate-900/90

                        border
                        border-red-400/40

                        backdrop-blur-sm

                        rounded-full

                        px-5
                        py-3

                        shadow-lg

                        text-red-300

                        font-semibold
                        "
                        >

                            ⚠ {text}

                        </div>

                    </motion.div>

                )

            }

        </AnimatePresence>

    );

}