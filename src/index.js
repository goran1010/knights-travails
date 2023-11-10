import "./style.css";
import knightMoves from "./knightMoves.js";

let start = [3, 3];
let end = [4, 3];

console.log(
  `Knight starts at position [${start}], it's target position is [${end}]`
);
knightMoves(start, end);
