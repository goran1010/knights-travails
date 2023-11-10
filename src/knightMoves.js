import buildPossibleMoves from "./buildPossibleMoves.js";
import createPath from "./createPath.js";

export default function knightMoves(
  startPosition,
  endPosition,
  currentPosition = startPosition,
  queue = [],
  allMoves = []
) {
  if (currentPosition === startPosition) {
    currentPosition = { parentPosition: null, coor: startPosition };
    queue.push(currentPosition);
  }
  currentPosition = queue.shift();
  if (currentPosition.coor.toString() === endPosition.toString()) {
    allMoves = createPath(currentPosition, allMoves)
      .reverse()
      .concat([endPosition]);
    console.log(`Number of moves it took was: ${allMoves.length - 1}`);
    for (let i = 0; i <= allMoves.length - 1; i++) {
      if (i === 0) {
        console.log(`Start at: [${allMoves[i]}]`);
        continue;
      }
      if (i === allMoves.length - 1) {
        console.log(`Move number ${i} is: [${allMoves[i]}]`);
        console.log("Done!");
        continue;
      }
      console.log(`Move number ${i} is: [${allMoves[i]}]`);
    }
    return;
  }
  queue = queue.concat(buildPossibleMoves(currentPosition));
  knightMoves(startPosition, endPosition, currentPosition, queue, allMoves);
}
