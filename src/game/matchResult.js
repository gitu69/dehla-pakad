export function getMatchWinner(

    matchA,
    matchB

) {

    if (

        matchA > matchB

    ) {

        return 'Team A';
    }

    if (

        matchB > matchA

    ) {

        return 'Team B';
    }

    return 'Draw';
}