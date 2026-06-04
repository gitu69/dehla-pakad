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
      w-[140px]
      sm:w-[180px]
      md:w-[220px]
      bg-slate-900/70
      backdrop-blur-md
      border
      border-slate-700
      rounded-2xl
      p-3
      shadow-xl
      "
    >

      {/* Top Row */}

      <div className="flex justify-between text-xs mb-3">

        <span>
          Round {currentRound}/5
        </span>

        <span>
          Trump: {trumpSuit || "None"}
        </span>

      </div>

      {/* Team Section */}

      <div className="flex items-start justify-between mb-3">

        {/* Team A */}

        <div className="text-center flex-1">

          <p className="text-blue-400 text-sm font-semibold">
            Team A
          </p>

          <div className="flex justify-center gap-1 flex-wrap mt-1 min-h-[24px]">

            {capturedA.length > 0 ? (
              capturedA.map((suit, index) => (
                <span
                  key={index}
                  className="
                  text-lg
                  text-blue-400
                  "
                >
                  {suitIcon(suit)}
                </span>
              ))
            ) : (
              <span className="text-slate-500">
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
          text-lg
          px-2
          pt-2
          "
        >
          VS
        </div>

        {/* Team B */}

        <div className="text-center flex-1">

          <p className="text-red-400 text-sm font-semibold">
            Team B
          </p>

          <div className="flex justify-center gap-1 flex-wrap mt-1 min-h-[24px]">

            {capturedB.length > 0 ? (
              capturedB.map((suit, index) => (
                <span
                  key={index}
                  className="
                  text-lg
                  text-red-400
                  "
                >
                  {suitIcon(suit)}
                </span>
              ))
            ) : (
              <span className="text-slate-500">
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

        <div className="flex justify-center gap-1 flex-wrap min-h-[24px]">

          {tableDahlaSuits.length > 0 ? (
            tableDahlaSuits.map((suit, index) => (
              <span
                key={index}
                className="
                text-lg
                text-yellow-400
                "
              >
                {suitIcon(suit)}
              </span>
            ))
          ) : (
            <span className="text-slate-500">
              -
            </span>
          )}

        </div>

      </div>

      {/* Match Score */}

      <div className="border-t border-slate-700 pt-3 mt-2">

        <p className="text-center text-sm text-slate-300">
          Match Score
        </p>

        <p
          className="
          text-center
          text-4xl
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