import { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);

  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  function onPlay(nextSquare) {
    setXIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = "Start the game";
    }
    return (
      <li
        key={move}
        className="sm:my-2  bg-black text-white border border-violet-950 px-2 rounded-md"
      >
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="sm:flex justify-center mt-3">
      <div
        className="mt-2 mr-3
      "
      >
        <Board xIsNext={xIsNext} onPlay={onPlay} squares={currentSquares} />
      </div>
      <div className="text-lg mt-4 sm:ml-4 border border-gray-100 rounded-md p-3">
        <ol className="">{moves}</ol>
      </div>
    </div>
  );
}
