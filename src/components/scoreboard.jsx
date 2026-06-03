export default function ScoreBoard({

    currentRound,

    matchA,

    matchB,

    teamA,

    teamB

}) {

    return (

        <div
            className="
            bg-slate-800
            rounded-lg
            p-3
            mb-3
            text-center
            "
        >

            <div>
                Round: {currentRound}
            </div>

            <div>
                Match Score:
                Team A {matchA}
                -
                Team B {matchB}
            </div>

            <div>
                Current Round:
                Team A {teamA}
                -
                Team B {teamB}
            </div>

        </div>

    );

}