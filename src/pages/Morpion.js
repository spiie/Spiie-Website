import React, { useState } from "react";
import * as R from "ramda";

const Square = ({ square, onClick, i, hasWinner }) => {
  return (
    <button
      key={i}
      className={`square square${i}`}
      onClick={() => onClick(i)}
      disabled={hasWinner}
    >
      {square}
    </button>
  );
};

const Rows = ({ collums, squares, onClick, hasWinner }) => {
  const _squares = R.splitEvery(3, squares);
  const mapIndexed = R.addIndex(R.map);

  return mapIndexed((squares, indexPack) => {
    return (
      <div className="board-row" key={indexPack}>
        {mapIndexed(
          (square, index) => (
            <Square
              onClick={onClick}
              square={square}
              key={`${index}-${indexPack}`}
              i={index + indexPack * squares.length}
              hasWinner={hasWinner}
            />
          ),
          squares
        )}
      </div>
    );
  }, _squares);
};

const ResetButton = ({ onClick }) => {
  return (
    <button className="reset-button" onClick={() => onClick()}>
      Restart
    </button>
  );
};

// const SizeForm = ({ onSubmit }) => {
//   const [error, setError] = useState(false);
//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         const collums = parseInt(e.target[0].value, 10);
//         const rows = parseInt(e.target[1].value, 10);
//         if (isNaN(collums) || isNaN(rows)) {
//           setError(true);
//         } else {
//           setError(false);
//           onSubmit(collums, rows);
//         }
//       }}
//     >
//       <label>
//         Collums :
//         <input
//           type="text"
//           name="collums"
//           id="collums"
//           placeholder="collums"
//           defaultValue="3"
//         />
//       </label>
//       <br />
//       <label>
//         Rows :
//         <input
//           type="text"
//           name="rows"
//           id="rows"
//           placeholder="rows"
//           defaultValue="3"
//         />
//       </label>
//       {error ? (
//         <p style={{ color: "red" }}> Veuillez ecrire des nombres valides. </p>
//       ) : null}
//       <br />
//       <input type="submit" value="Appliquer" />
//     </form>
//   );
// };

const possibility = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const Board = () => {
  const [rows, setRows] = useState(3);
  const [collums, setCollums] = useState(3);
  const [squares, setSquares] = useState(Array(rows * collums).fill(null));
  const [turn, setTurn] = useState("x");
  const [hasWinner, setHasWinner] = useState(false);
  const [theWinner, setTheWinner] = useState(null);

  const status = `Next player: ${turn}`;

  const onSquareClick = async (index) => {
    const square = squares[index];
    if (square !== "x" && square !== "o") {
      let nextSquares = squares;
      nextSquares[index] = turn;
      setSquares(nextSquares);
      for (let poss = 0; poss < possibility.length; poss++) {
        const _poss = possibility[poss];
        if (
          squares[_poss[0]] === turn &&
          squares[_poss[1]] === turn &&
          squares[_poss[2]] === turn
        ) {
          setTheWinner(nextSquares[index]);
          setHasWinner(true);
          return
        }
      }
      if (
        R.pipe(R.filter((value) => value === null))(squares).length === 0
      ) {
        setHasWinner(true); // everyone win !
        setTheWinner(null);
      } else {
        const nextTurn = turn === "x" ? "o" : "x";
        setTurn(nextTurn);
      }
    }
  };

  const onResetBoard = (_rows = rows, _collums = collums) => {
    setSquares(Array(_rows * _collums).fill(null));
    setTurn("x");
    setHasWinner(false);
    setTheWinner(null);
  };

  // const transform = (collums, row) => {
  //   setCollums(collums);
  //   setRows(row);
  //   onResetBoard(row, collums);
  // };

  return (
    <div className="board">
      <div className="status">{status}</div>
      <div className="squares-board">
        <Rows
          rows={rows}
          collums={collums}
          squares={squares}
          onClick={onSquareClick}
          hasWinner={hasWinner}
        />
      </div>
      {R.and(hasWinner, theWinner) && (
        <p
          className="endMessage"
          style={{ backgroundColor: "lightgreen" }}
        >{`"${theWinner}" vient de gagner la partie !`}</p>
      )}
      {R.and(hasWinner, !theWinner) && (
        <p className="endMessage" style={{ backgroundColor: "lightgreen" }}>
          C'est une égalité ! Bien joué à tous les joueurs.
        </p>
      )}
      <ResetButton onClick={onResetBoard} />
      {/* <SizeForm onSubmit={transform} /> */}
    </div>
  );
};

const Game = () => {
  return (
    <div className="game">
      <Board />
    </div>
  );
};

export default Game;
