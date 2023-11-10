export default function createPath(currentPosition, allMoves) {
  if (!currentPosition.parentPosition) return allMoves;
  allMoves.push(currentPosition.parentPosition.coor);
  return createPath(currentPosition.parentPosition, allMoves);
}
