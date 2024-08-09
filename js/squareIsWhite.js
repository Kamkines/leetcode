var squareIsWhite = function (coordinates) {
    const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const chessBoard = {};

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const cellName = columns[col] + (row + 1);
            const color = (row + col) % 2 == 0 ? 'black' : 'white';
            chessBoard[cellName] = color;
        }
    }

    return chessBoard[coordinates] == 'white' ? true : false
};
// example

squareIsWhite('a1')