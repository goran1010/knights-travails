export default function displayPath(path, startPosition, endPosition) {
  console.log(
    `Knight starts at position [${startPosition}], it's target position is [${endPosition}]`
  );
  console.log(`Number of moves it took was: ${path.length - 1}`);
  for (let i = 0; i <= path.length - 1; i++) {
    if (i === 0) {
      console.log(`Start at: [${path[i]}]`);
    } else console.log(`Move number ${i} is: [${path[i]}]`);
  }
  console.log("Done!");
}
