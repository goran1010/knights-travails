export default function createPath(currentPosition, endPosition, path = []) {
  if (!currentPosition.parentPosition)
    return path.reverse().concat([endPosition]);
  path.push(currentPosition.parentPosition.coor);
  return createPath(currentPosition.parentPosition, endPosition, path);
}
