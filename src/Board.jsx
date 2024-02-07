import { useState } from "react";

/* eslint-disable react/prop-types */
function Square({ squares, onSquareClick }) {
  return (
    <button
      className="text-3xl bg-white w-12 h-12 p-2 border border-gray-950 rounded-md m-1"
      onClick={onSquareClick}
    >
      {squares}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  //   console.log(squares);
  function handleClick(i) {
    //   console.log("clicked" + i);
    const nextSquares = [...squares];
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
  return (
    <div>
      <div className="flex">
        <Square squares={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square squares={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square squares={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        <Square squares={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square squares={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square squares={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div>
        <Square squares={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square squares={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square squares={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
