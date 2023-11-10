import "./style.css";
import knightMoves from "./knightMoves.js";

let start = [0, 0];
let end = [7, 3];

console.log(
  `Knight starts at position [${start}], it's target position is [${end}]`
);
knightMoves(start, end);
