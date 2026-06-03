export default function PlayerAvatar({

    playerName,
    cardCount,
    isCurrentPlayer = false,
    showCardFan = true

}) {

    return (

        <div
        className="
        flex
        flex-col
        items-center
        gap-1
        "
        >

            {/* CARD FAN */}

            {showCardFan && (

    <div className="relative h-10 w-16">

        {[...Array(
            Math.min(cardCount, 5)
        )].map((_, index) => (

            <div

                key={index}

                className="
                absolute
                w-8
                h-12
                bg-red-700
                border
                border-white
                rounded
                "

                style={{
                    left: `${index * 8}px`,
                    transform:
                    `rotate(${index * 8 - 16}deg)`
                }}

            />

        ))}

    </div>

)}

            {/* AVATAR */}

            <div

                className={`
                w-14
                h-14
                rounded-full
                flex
                items-center
                justify-center
                text-2xl
                border-4

                ${

                    isCurrentPlayer

                    ? `
                      border-yellow-400
                      `
                    : `
                      border-white
                      `
                }
                bg-slate-700
                `}

            >

                👤

            </div>

            <div
            className="
            text-xs
            font-bold
            "
            >

                {playerName}

            </div>

            <div
            className="
            text-xs
            text-gray-300
            "
            >

                {cardCount} cards

            </div>

        </div>

    );
}