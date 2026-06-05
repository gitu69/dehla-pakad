export default function Card({

    card,
    onClick,
    isTrump = false,
    large = false

}) {

    const suitColor =

        card.suit === '♥'
        ||
        card.suit === '♦'

        ? 'text-red-600'

        : 'text-black';

    return (

        <div

        onClick={onClick}

       className={`
relative

${

   large

? `
  w-20
  h-28

  md:w-24
  md:h-32

  lg:w-28
  lg:h-40
  `

: `
  w-14
  h-20

  md:w-16
  md:h-24

  lg:w-[72px]
  lg:h-[104px]
  `
}
bg-white
rounded-xl
shadow-md
cursor-pointer
hover:-translate-y-1
transition
select-none

${

    isTrump

    ? `
      border-2
      border-yellow-400
      ring-1
      ring-yellow-300
      `

    : `
      border
      border-gray-300
      `
}
`}
        >

            {/* TOP LEFT */}

            <div
            className={`
            absolute
            top-1
            left-1
            flex
            flex-col
            items-center
            leading-none
            text-xs
            font-bold
            ${suitColor}
            `}
            >

                <span>
                    {card.value}
                </span>

                <span>
                    {card.suit}
                </span>

            </div>

            {/* CENTER */}

            <div
            className={`
            absolute
            inset-0
            flex
            items-center
            justify-center
            text-3xl
            ${suitColor}
            `}
            >

                {card.suit}

            </div>

            {/* BOTTOM RIGHT */}

            <div
            className={`
            absolute
            bottom-1
            right-1
            flex
            flex-col
            items-center
            leading-none
            text-xs
            font-bold
            rotate-180
            ${suitColor}
            `}
            >

                <span>
                    {card.value}
                </span>

                <span>
                    {card.suit}
                </span>

            </div>

           

        </div>

    );
}