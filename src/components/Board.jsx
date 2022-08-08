import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [x, setX] = useState(true);
  const winner = calculateWinner(square);
  let status ; 

  if(winner){
    status = 'Winner is : ' + winner
    // alert('Winner is : ' + winner)
  }
  else{
    status = 'Player turn : ' + (x ? 'X' : 'O')
  }

  const rednderSquare = (i) => {
    return <Square value={square[i]} onClick={() => handleClick(i)} />;
  };

  const handleClick = (i) => {
    const squares = square.slice();
    if (squares[i] === null) {
      squares[i] = x ? "X" : "O";
      setSquare(squares);
      setX(!x);
    } else {
      alert("You Can't Change Value ");
    }
  };

  function calculateWinner(square) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (square[a] && square[a] === square[b] && square[a] === square[c]){
       return square[a];
      }
    }
    return null;
  }

  return (
    <div className="board">
      <div className="board-row">
        {rednderSquare(0)}
        {rednderSquare(1)}
        {rednderSquare(2)}
      </div>

      <div className="board-row">
        {rednderSquare(3)}
        {rednderSquare(4)}
        {rednderSquare(5)}
      </div>

      <div className="board-row">
        {rednderSquare(6)}
        {rednderSquare(7)}
        {rednderSquare(8)}
      </div>

      <h2>{status}</h2>
    </div>
  );
};

export default Board;
