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
      w-[110px]
      sm:w-[140px]
      md:w-[180px]

      bg-slate-900/70
      backdrop-blur-md

      border
      border-slate-700

      rounded-xl
      md:rounded-2xl

      p-2
      md:p-3

      shadow-xl
      "
    >

      {/* Top Row */}

      <div className="flex justify-between text-xs mb-2">

        <span>
          Round {currentRound}/5
        </span>

        <span>
          Trump: {trumpSuit || "None"}
        </span>

      </div>

      {/* Team Section */}

      <div className="flex items-start justify-between mb-2">

        {/* Team A */}

        <div className="text-center flex-1">

          <p className="text-blue-400 text-xs md:text-sm font-semibold">
            Team A
          </p>

          <div className="flex justify-center gap-1 flex-wrap mt-1 min-h-[18px]">

            {capturedA.length > 0 ? (
              capturedA.map((suit, index) => (
                <span
                  key={index}
                  className="
                  text-sm
                  md:text-base
                  text-blue-400
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

        <div
          className="
          text-slate-400
          font-bold

          text-sm
          md:text-base

          px-1
          pt-1
          "
        >
          VS
        </div>

        {/* Team B */}

        <div className="text-center flex-1">

          <p className="text-red-400 text-xs md:text-sm font-semibold">
            Team B
          </p>

          <div className="flex justify-center gap-1 flex-wrap mt-1 min-h-[18px]">

            {capturedB.length > 0 ? (
              capturedB.map((suit, index) => (
                <span
                  key={index}
                  className="
                  text-sm
                  md:text-base
                  text-red-400
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

      {/* Table Dehlas */}

      <div className="border-t border-slate-700 pt-2">

        <p className="text-xs text-yellow-400 mb-1">
          Table
        </p>

        <div className="flex justify-center gap-1 flex-wrap min-h-[18px]">

          {tableDahlaSuits.length > 0 ? (
            tableDahlaSuits.map((suit, index) => (
              <span
                key={index}
                className="
                text-sm
                md:text-base
                text-yellow-400
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

      {/* Match Score */}

      <div className="border-t border-slate-700 pt-2 mt-1">

        <p className="text-center text-xs md:text-sm text-slate-300">
          Match Score
        </p>

        <p
          className="
          text-center

          text-2xl
          md:text-3xl

          font-bold
          text-white
          "
        >
          {matchA} - {matchB}
        </p>

      </div>

    </div>
  );
}