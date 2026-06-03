export default function ScoreBoard({
  teamA,
  teamB,
  matchA,
  matchB,
  currentRound
}) {
  return (
    <div
      className="
      bg-slate-800
      rounded-xl
      p-3
      mb-4
      shadow-lg
      "
    >
      <h2 className="text-center font-bold mb-3">
        Round {currentRound}
      </h2>

      <div className="flex justify-around">
        <div className="text-center">
          <p>Team A</p>
          <p className="text-2xl font-bold">
            {teamA}
          </p>
        </div>

        <div className="text-center">
          <p>Team B</p>
          <p className="text-2xl font-bold">
            {teamB}
          </p>
        </div>
      </div>

      <div className="mt-3 text-center border-t pt-2">
        Match Score: {matchA} - {matchB}
      </div>
    </div>
  );
}