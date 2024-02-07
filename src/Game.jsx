import { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);

  return (
    <>
      <div>
        <Board xIsNext={xIsNext} setXIsNext={setXIsNext} />
      </div>
      <div>
        <ol>{/* TBD */}</ol>
      </div>
    </>
  );
}
