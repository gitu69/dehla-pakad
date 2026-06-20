export default function PlayerAvatar({

    playerName,
    cardCount,
    isCurrentPlayer = false,
    showCardFan = true,
    position = "bottom"

}) {

    return (

        <div
            className="
            relative
            flex
            flex-col
            items-center
            gap-1
            "
        >

            {/* OPPONENT CARDS */}

            {showCardFan && cardCount > 0 && (

                <div
                    className="
                    absolute
                    pointer-events-none
                    -z-10
                    "
                >

                    {[...Array(Math.min(cardCount, 13))].map((_, index) => {

                        const total =
                            Math.min(cardCount, 13);

                        const center =
                            (total - 1) / 2;

                        const offset =
                            index - center;

                        let left = 0;
                        let top = 0;
                        let transformOrigin = "center center";

                       // PLAYER 2 (TOP)

if (position === "bottom") {

    left =
        offset * 14;

    top =
        0;

    transformOrigin =
        "center center";
}

                       // PLAYER 3 (RIGHT SIDE)

else if (position === "left") {

    left =
        -20;

    top =
        offset * 10;

    transformOrigin =
        "center center";
}

                        // PLAYER 4 (LEFT SIDE)

else if (position === "right") {

    left =
        -20;

    top =
        offset * 10;

    transformOrigin =
        "center center";
}

                        return (

                            <div

                                key={index}

                                className="
absolute

w-8
h-12

sm:w-9
sm:h-14

md:w-10
md:h-16

lg:w-11
lg:h-[72px]

                                border
                                border-white/70

                                rounded-[4px]

                                shadow-md

                                bg-center
                                bg-cover
                                bg-no-repeat

                                overflow-hidden
                                "

                                style={{

                                    left: `${left}px`,
                                    top: `${top}px`,

                                    backgroundImage:
                                        "url('/card-back.png')",

                                    transform:

                                    position === "left"
                                    ? "rotate(90deg)"

                                    : position === "right"
                                    ? "rotate(-90deg)"

                                    : "rotate(0deg)",

                                    transformOrigin,

                                    zIndex: index

                                }}

                            />

                        );

                    })}

                </div>

            )}

            {/* AVATAR */}

            <div

                className={`
                relative
                z-10

                w-10
                h-10

                sm:w-12
                sm:h-12

                rounded-full

                flex
                items-center
                justify-center

                text-lg
                sm:text-xl

                border-4

                transition-all
                duration-300

                ${

    isCurrentPlayer

        ? `
        border-yellow-400
        shadow-lg
        shadow-yellow-400/70
        scale-110
        `
        : `
        border-slate-300
        `
}

                bg-slate-700
                `}

            >

                👤

            </div>

            {/* NAME */}

{position === "bottom" ? (

    // PLAYER 2

    <div
        className="
        mt-1

        px-3
        py-1

        rounded-xl

        bg-black/80
        border
        border-amber-700

        text-xs
        font-bold
        text-white

        whitespace-nowrap

        shadow-lg
        "
    >
        {playerName}
    </div>

) : position === "bottomPlayer" ? (

    // PLAYER 1

    <div
        className="
        absolute

        bottom-full
        mb-2

        left-1/2
        -translate-x-1/2

        px-3
        py-1

        rounded-xl

        bg-black/80
        border
        border-amber-700

        text-xs
        font-bold
        text-white

        whitespace-nowrap

        shadow-lg
        "
    >
        {playerName}
    </div>

) : position === "left" ? (

    // PLAYER 3

    <div
        className="
        absolute

        right-full
        mr-2

        top-1/2
        -translate-y-1/2

        px-3
        py-1

        rounded-xl

        bg-black/80
        border
        border-amber-700

        text-xs
        font-bold
        text-white

        whitespace-nowrap

        shadow-lg
        "
    >
        {playerName}
    </div>

) : (

    // PLAYER 4

    <div
        className="
        absolute

        left-full
        ml-2

        top-1/2
        -translate-y-1/2

        px-3
        py-1

        rounded-xl

        bg-black/80
        border
        border-amber-700

        text-xs
        font-bold
        text-white

        whitespace-nowrap

        shadow-lg
        "
    >
        {playerName}
    </div>

)}

        </div>

    );

}