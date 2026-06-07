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

      px-3
      py-2

      shadow-xl

      w-[320px]
      sm:w-[380px]
      md:w-[500px]
      "
    >

      {/* INFO ROW */}

<div
  className="
  flex
  items-center
  justify-between

  text-xs
  md:text-sm

  mb-2
  "
>

  <span>
    Round {currentRound}/5
  </span>

  <span>
    Trump: {trumpSuit || "None"}
  </span>

  <span className="text-yellow-400">
    Table: {tableDahlaSuits.length}
  </span>

</div>

{/* MATCH SCORE */}

<div
  className="
  flex
  justify-center
  items-center

  border-t
  border-b
  border-slate-700

  py-1
  mb-2
  "
>

  <span
    className="
    text-xl
    md:text-2xl

    font-bold

    text-white
    "
  >
    {matchA} - {matchB}
  </span>

</div>

{/* TEAM ROW */}

<div
  className="
  flex
  items-center
  justify-between
  gap-4
  "
>

        {/* TEAM A */}

        <div
          className="
          flex
          items-center
          gap-2
          "
        >

          <span
            className="
            text-blue-400
            font-semibold
            text-xs
            md:text-sm
            "
          >
            Team A
          </span>

          <div
            className="
            flex
            gap-1
            min-w-[40px]
            "
          >

            {capturedA.length > 0 ? (

              capturedA.map((suit, index) => (

                <span
                  key={index}
                  className="
                  text-blue-400
                  text-sm
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

        <span
          className="
          text-slate-500
          font-bold
          text-xs
          md:text-sm
          "
        >
          VS
        </span>

        {/* TEAM B */}

        <div
          className="
          flex
          items-center
          gap-2
          "
        >

          <span
            className="
            text-red-400
            font-semibold
            text-xs
            md:text-sm
            "
          >
            Team B
          </span>

          <div
            className="
            flex
            gap-1
            min-w-[40px]
            "
          >

            {capturedB.length > 0 ? (

              capturedB.map((suit, index) => (

                <span
                  key={index}
                  className="
                  text-red-400
                  text-sm
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

    </div>

  );
}