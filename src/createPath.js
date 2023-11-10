export default function createPath(currentPosition, allMoves) {
  console.log(allMoves);
  if (!currentPosition.parentPosition) return allMoves;
  allMoves.push(currentPosition.parentPosition.coor);
  return createPath(currentPosition.parentPosition, allMoves);
}
