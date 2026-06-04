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

            {showCardFan && (

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

                        const FAN_DISTANCE = 72;

                        let left = 0;
                        let top = 0;
                        let rotate = 0;
                        let transformOrigin = "center center";
                        

                        // PLAYER 2 (TOP)

                        if (position === "bottom") {

                            left =
                                offset * 3;

                            top =
    FAN_DISTANCE -
    Math.pow(offset, 2) * 0.25;

                            rotate =
                                -offset * 5;

                            transformOrigin =
                                "top center";
                        }

                        // PLAYER 3 (RIGHT SIDE OF TABLE)

                   else if (position === "left") {

    left =
    -FAN_DISTANCE +
    Math.pow(offset, 2) * 0.15;

top =
    offset * 4;

rotate =
    offset * 0.8;

    transformOrigin =
        "center center";
}

                        // PLAYER 4 (LEFT SIDE OF TABLE)

                    else if (position === "right") {

  left =
    FAN_DISTANCE -
    Math.pow(offset, 2) * 0.15;

top =
    offset * 4;

rotate =
    -offset * 0.8;
    transformOrigin =
        "center center";
}
                        return (

                            <div

                                key={index}

                                className="
                                absolute
                              w-6
h-9
                                bg-red-500
                                border
                                border-white
                                rounded-[2px]
                                shadow
                                "

                                style={{

                                    left: `${left}px`,
                                    top: `${top}px`,

                                  transform:

position === "left"
? `rotate(${90 + rotate}deg)`

: position === "right"
? `rotate(${-90 + rotate}deg)`

: `rotate(${rotate}deg)`,
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
                    animate-pulse
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

{(position === "bottom" || position === "bottomPlayer") ? (

    <div
        className="
        absolute
        left-full
        ml-2
        top-1/2
        -translate-y-1/2

        text-xs
        font-bold
        text-white
        whitespace-nowrap
        "
    >
        {playerName}
    </div>

) : (

    <div
        className="
        mt-1
        text-xs
        font-bold
        text-white
        whitespace-nowrap
        "
    >
        {playerName}
    </div>

)}

        </div>

    );

}