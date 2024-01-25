import React, { useState, useEffect, useCallback } from "react";

const Grid = () => {
  const [p1_turn, setP1_turn] = useState(true);
  const [marks, setMarks] = useState(Array(9).fill("minus"));
  const [gameOver, setGameOver] = useState(false);
  const [col, setCol] = useState("black")

  const handlePlay = useCallback(
    (index) => {
      if (marks[index] === "minus") {
        setMarks((prevMarks) => {
          const newMarks = [...prevMarks];
          newMarks[index] = p1_turn ? "xmark" : "o";
          return newMarks;
        });
        setP1_turn((prevTurn) => !prevTurn);
        p1_turn ? setCol("green") : setCol("red");
      }
    },
    [marks, p1_turn]
  );

  const handleRestart = () => {
    setMarks(Array(9).fill("minus"));
    setGameOver(false);
  }

  const hasWon = useCallback(() => {
    if (
      marks[0] !== "minus" &&
      marks[0] === marks[1] &&
      marks[1] === marks[2]
    ) {
      //   console.log("Game Over");
      setGameOver(true);
    }
    if (
      marks[3] !== "minus" &&
      marks[3] === marks[4] &&
      marks[4] === marks[5]
    ) {
      //   console.log("Game Over");
      setGameOver(true);
    }
    if (
      marks[6] !== "minus" &&
      marks[6] === marks[7] &&
      marks[7] === marks[8]
    ) {
      //   console.log("Game Over");
      setGameOver(true);
    }
    if (
      marks[0] !== "minus" &&
      marks[0] === marks[3] &&
      marks[3] === marks[6]
    ) {
      //   console.log("Game Over");
      setGameOver(true);
    }
    if (
      marks[1] !== "minus" &&
      marks[1] === marks[4] &&
      marks[4] === marks[7]
    ) {
      //   console.log("Game Over");
      setGameOver(true);
    }
    if (
      marks[2] !== "minus" &&
      marks[2] === marks[5] &&
      marks[5] === marks[8]
    ) {
      //   console.log("Game Over");
      setGameOver(true);
    }
    if (
      marks[0] !== "minus" &&
      marks[0] === marks[4] &&
      marks[4] === marks[8]
    ) {
      //   console.log("Game Over");
      setGameOver(true);
    }
    if (
      marks[2] !== "minus" &&
      marks[2] === marks[4] &&
      marks[4] === marks[6]
    ) {
      //   console.log("Game Over");
      setGameOver(true);
    }
  }, [marks]);

  useEffect(() => {
    hasWon();
  }, [handlePlay, hasWon]);

  if (gameOver) {
    if (p1_turn)
      return (
        <div className="cont">
          <h1 style={{color: `${col === "green" ? "red" : "green"}`}}>Player 2 with O Won </h1>
          <button className="btn" onClick={handleRestart}>Restart</button>
        </div>
      );
    else
      return (
        <div className="cont">
          <h1 style={{color: `${col === "green" ? "red" : "green"}`}}>Player 1 with X won</h1>
          <button className="btn" onClick={handleRestart}>Restart</button>
        </div>
      );
  }
  return (
    <div className="cont">
        <h1>Tic Tac Toe</h1>
      <div className="grid-container">
        {marks.map((mark, index) => (
          <div key={index} className="grid-item">
            <i
              className={`fa-solid fa-${mark}`}
              onClick={() => handlePlay(index)}
              style={{color: `${mark === "minus" ? col : (mark === "xmark" ? "red" : "green")}`}}
            ></i>
          </div>
        ))}
      </div>
      <button className="btn" onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default Grid;
