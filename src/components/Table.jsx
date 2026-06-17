import Card from './Card';

export default function Table({

    centerCards,

    currentLeadingPlayer

}) {

    return (

        <div
        className="
        relative

        w-full
        h-full

        flex
        items-center
        justify-center
        "
        >

            {/* WATERMARK */}

            <div
            className="
            absolute
            inset-0

            flex
            flex-col
            items-center
            justify-center

            text-slate-400
            opacity-10

            font-bold

            text-lg
            sm:text-2xl

            tracking-widest

            pointer-events-none
            select-none
            "
            >

                <div>
                    ♠ ♥
                </div>

                <div>
                    DEHLA PAKAD
                </div>

                <div>
                    ♣ ♦
                </div>

            </div>

            {centerCards.map((item, index) => {

                let position = "";
                let rotation = "";

                if (item.player === 0) {

                    position = `
                    absolute
                    bottom-[-8px]
                    left-1/2
                    -translate-x-1/2
                    `;

                    rotation = "";
                }

                else if (item.player === 1) {

                    position = `
                    absolute
                    right-24
                    top-1/2
                    -translate-y-1/2
                    `;

                    rotation = "-rotate-90";
                }

                else if (item.player === 2) {

                    position = `
                    absolute
                    top-[-8px]
                    left-1/2
                    -translate-x-1/2
                    `;

                    rotation = "rotate-180";
                }

                else if (item.player === 3) {

                    position = `
                    absolute
                    left-24
                    top-1/2
                    -translate-y-1/2
                    `;

                    rotation = "rotate-90";
                }

                return (

                    <div
                    key={index}
                    className={position}
                    >

                        <div

className={`
    ${rotation}

    transition-all
    duration-300

    ${

        currentLeadingPlayer !== null

        &&

        item.player !==
        currentLeadingPlayer

        ? 'opacity-60'

        : 'opacity-100'

    }
`}
>

                            <Card
                                card={item.card}
                                onClick={() => {}}
                                large={true}
                            />

                        </div>

                    </div>

                );

            })}

        </div>

    );

}