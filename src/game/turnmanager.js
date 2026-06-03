export function getNextPlayer(

    players,
    currentPlayer

){

    let nextPlayer =
    (currentPlayer + 1) % 4;

    let attempts = 0;

    while(

        players[nextPlayer]

        &&

        players[nextPlayer]
        .length === 0

        &&

        attempts < 4

    ){

        nextPlayer =
        (nextPlayer + 1) % 4;

        attempts++;
    }

    return nextPlayer;
}