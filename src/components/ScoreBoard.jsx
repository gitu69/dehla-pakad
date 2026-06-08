export default function ScoreBoard({
  teamA,
  teamB,
  matchA,
  matchB,
  currentRound,
  trumpSuit,
  tableDahlaSuits,
  capturedA,
  capturedB
}) {

  function suitIcon(suit) {
    switch (suit) {
      case "spades":
        return "♠";
      case "hearts":
        return "♥";
      case "diamonds":
        return "♦";
      case "clubs":
        return "♣";
      default:
        return suit;
    }
  }

  return (

    <div
      className="
      bg-slate-900/75
      backdrop-blur-md

      border
      border-slate-700

      rounded-xl

      px-1.5
      py-1

      shadow-xl

      w-[210px]
      sm:w-[260px]
      md:w-[340px]
      lg:w-[420px]
      "
    >

      {/* INFO ROW */}

      <div
        className="
        flex
        items-center
        justify-between

        text-[10px]
        sm:text-xs
        md:text-sm
        "
      >

        <span>
          Round {currentRound}/5
        </span>

        <span>
          Trump: {trumpSuit || "None"}
        </span>

        <div className="flex items-center gap-1 text-yellow-400">

          <span>Table:</span>

          {tableDahlaSuits.length > 0 ? (

            tableDahlaSuits.map((suit, index) => (

              <span key={index}>
                {suitIcon(suit)}
              </span>

            ))

          ) : (

            <span>-</span>

          )}

        </div>

      </div>

      {/* DIVIDER */}

      <div className="h-px bg-slate-700 my-1" />

      {/* TEAM ROW */}

      <div
        className="
        flex
        items-center
        justify-between

        gap-1
        "
      >

        {/* TEAM A */}

        <div
          className="
          flex
          items-center
          gap-1
          "
        >

          <span
            className="
            text-blue-400
            font-semibold

            text-[10px]
            sm:text-xs
            md:text-sm
            "
          >
            Team A
          </span>

          <div
            className="
            flex
            gap-1
            min-w-[24px]
            "
          >

            {capturedA.length > 0 ? (

              capturedA.map((suit, index) => (

                <span
                  key={index}
                  className="
                  text-blue-400
                  text-xs
                  sm:text-sm
                  "
                >
                  {suitIcon(suit)}
                </span>

              ))

            ) : (

              <span className="text-slate-500 text-xs">
                -
              </span>

            )}

          </div>

        </div>

        {/* VS */}

        <span
          className="
          text-slate-500
          font-bold
          text-xs
          "
        >
          VS
        </span>

        {/* TEAM B */}

        <div
          className="
          flex
          items-center
          gap-1
          "
        >

          <span
            className="
            text-red-400
            font-semibold

            text-[10px]
            sm:text-xs
            md:text-sm
            "
          >
            Team B
          </span>

          <div
            className="
            flex
            gap-1
            min-w-[24px]
            "
          >

            {capturedB.length > 0 ? (

              capturedB.map((suit, index) => (

                <span
                  key={index}
                  className="
                  text-red-400
                  text-xs
                  sm:text-sm
                  "
                >
                  {suitIcon(suit)}
                </span>

              ))

            ) : (

              <span className="text-slate-500 text-xs">
                -
              </span>

            )}

          </div>

        </div>

      </div>

      {/* DIVIDER */}

      <div className="h-px bg-slate-700 my-1" />

      {/* MATCH SCORE */}

      <div
        className="
        flex
        justify-center
        items-center
        "
      >

        <span
          className="
          text-lg
          md:text-xl
          lg:text-2xl

          font-bold
          text-white
          "
        >
          {matchA} - {matchB}
        </span>

      </div>

    </div>

  );
}