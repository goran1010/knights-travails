function checkBounds(n) {
  if (n >= 0 && n <= 7) return true;
  return false;
}

export default function buildPossibleMoves(currentPosition) {
  const possibleMoves = [];

  let x = currentPosition.coor[0];
  let y = currentPosition.coor[1];

  if (checkBounds(x + 1) && checkBounds(y + 2)) {
    possibleMoves.push({
      parentPosition: currentPosition,
      coor: [x + 1, y + 2],
    });
  }
  if (checkBounds(x + 2) && checkBounds(y + 1)) {
    possibleMoves.push({
      parentPosition: currentPosition,
      coor: [x + 2, y + 1],
    });
  }
  if (checkBounds(x + 2) && checkBounds(y - 1)) {
    possibleMoves.push({
      parentPosition: currentPosition,
      coor: [x + 2, y - 1],
    });
  }
  if (checkBounds(x + 1) && checkBounds(y - 2)) {
    possibleMoves.push({
      parentPosition: currentPosition,
      coor: [x + 1, y - 2],
    });
  }
  if (checkBounds(x - 1) && checkBounds(y - 2)) {
    possibleMoves.push({
      parentPosition: currentPosition,
      coor: [x - 1, y - 2],
    });
  }
  if (checkBounds(x - 2) && checkBounds(y - 1)) {
    possibleMoves.push({
      parentPosition: currentPosition,
      coor: [x - 2, y - 1],
    });
  }
  if (checkBounds(x - 2) && checkBounds(y + 1)) {
    possibleMoves.push({
      parentPosition: currentPosition,
      coor: [x - 2, y + 1],
    });
  }
  if (checkBounds(x - 1) && checkBounds(y + 2)) {
    possibleMoves.push({
      parentPosition: currentPosition,
      coor: [x - 1, y + 2],
    });
  }
  return possibleMoves;
}
