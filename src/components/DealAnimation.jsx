import { motion }
from 'framer-motion';

export default function DealAnimation({

    isDealing

}) {

    if (

        !isDealing

    ) {

        return null;
    }

    const sequence = [];

    for (

        let i = 0;

        i < 20;

        i++

    ) {

        sequence.push(
            i % 4
        );
    }

    return (

        <div
        className="
fixed
inset-0

pointer-events-none

z-[300]
"
        >

            {

                sequence.map(

                    (

                        player,
                        index

                    ) => {

                        let x = 0;
                        let y = 0;

                        if (

                            player === 0

                        ) {

                            y = 300;
                        }

                        else if (

                            player === 1

                        ) {

                            x = 420;
                        }

                        else if (

                            player === 2

                        ) {

                            y = -300;
                        }

                        else {

                            x = -420;
                        }

                        return (

                            <motion.img

                                key={index}

                                src="/card-back.png"

                                className="
absolute

w-16
sm:w-20

left-1/2
top-1/2

-translate-x-1/2
-translate-y-1/2
"

                                initial={{

                                    x: 0,
                                    y: 0,

                                    opacity: 1
                                }}

                                animate={{

                                    x,
                                    y
                                }}

                                transition={{

                                    duration: 0.45,

                                    delay:
                                        index * 0.08,

                                    ease:
                                        'easeOut'
                                }}

                            />

                        );

                    }

                )

            }

        </div>

    );

}