import Card from './Card';

export default function Table({

    centerCards

}) {

    return (

        <div
        className="
        relative
      w-[500px]
      h-[320px]
        bg-gradient-to-br
        from-amber-100
        via-orange-100
        to-amber-200
        border-2
        border-amber-500
        shadow-2xl
        rounded-2xl
        overflow-hidden
        "
        >

            {/* INNER RING */}

            <div
            className="
            absolute
            inset-4
            border
            border-amber-400
            rounded-xl
            opacity-40
            pointer-events-none
            "
            />

            {/* TABLE WATERMARK */}

            <div
            className="
            absolute
            inset-0
            flex
            flex-col
            items-center
            justify-center
            text-amber-800
            opacity-20
            font-bold
            text-2xl
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
    bottom-4
    left-1/2
    -translate-x-1/2
    `;

    rotation = "";
}

else if (item.player === 1) {

    position = `
    absolute
    right-10
    top-1/2
    -translate-y-1/2
    `;

    rotation = "-rotate-90";
}

else if (item.player === 2) {

    position = `
    absolute
    top-4
    left-1/2
    -translate-x-1/2
    `;

    rotation = "rotate-180";
}

else if (item.player === 3) {

    position = `
    absolute
    left-10
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

    <div className={rotation}>

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