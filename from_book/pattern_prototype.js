// Проблема
class BoardSquare {
  constructor(color, row, file, startingPiece) {
    this.color = color;
    this.row = row;
    this.file = file;
  }

  occupySquare(piece) {
    this.piece = piece;
  }

  clearPiece() {
    this.piece = null;
  }
}

{
  // При необходимости изменений в этих экземплярах color (white -> black) придется менять в каждом вызове new.
  const squareOne = new BoardSquare('white');
  const squareTwo = new BoardSquare('white');
  const squareThree = new BoardSquare('white');
  // ...
}

// Решение
class BoardSquarePrototype {
  constructor(prototype) {
    this.prototype = prototype;
  }

  clone() {
    return Object.assign(new BoardSquare(), this.prototype);
  }
}

// При необходимости изменения color (white -> black) изменения достаточно внести только тут
const boardSquare = new BoardSquare('white');
const boardSquarePrototype = new BoardSquarePrototype(boardSquare);

const squareOne = boardSquarePrototype.clone();
const squareTwo = boardSquarePrototype.clone();
const squareThree = boardSquarePrototype.clone();
