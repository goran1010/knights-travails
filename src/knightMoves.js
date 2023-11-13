import buildPossibleMoves from "./buildPossibleMoves.js";
import createPath from "./createPath.js";
import displayPath from "./displayPath.js";

export default function knightMoves(startPosition, endPosition, queue = []) {
  if (!queue.length) {
    startPosition = { parentPosition: null, coor: startPosition };
    queue.push(startPosition);
  }
  let currentPosition = queue.shift();
  if (currentPosition.coor.toString() === endPosition.toString()) {
    const path = createPath(currentPosition, endPosition);
    displayPath(path, startPosition, endPosition);
    return;
  }
  queue = queue.concat(buildPossibleMoves(currentPosition));
  knightMoves(startPosition, endPosition, queue);
}
