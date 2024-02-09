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
    for (let i=0; i<3; i++) {
      if (marks[i] !== "minus" && marks[i] === marks[i+3] && marks[i] === marks[i+6]) {
        setGameOver(true);
      }
    }
    for (let i=0; i<=6; i++) {
      if (marks[i] !== "minus" && marks[i] === marks[i+1] && marks[i] === marks[i+2]) {
        setGameOver(true);
      }
    }
    if (marks[0] !== "minus" && marks[0] === marks[4] && marks[4] === marks[8]) {
      setGameOver(true);
    }
    if (marks[2] !== "minus" && marks[2] === marks[4] && marks[4] === marks[6]) {
      setGameOver(true);
    }
  }, [marks]);

  useEffect(() => {
    hasWon();
  }, [handlePlay, hasWon]);

  if (gameOver) {
    return (
      <div className="cont">
        <h1 style={{color: `${col === "green" ? "red" : "green"}`}}>{p1_turn === true ? "Player 2 with O Won" : "Player 1 with X won"} </h1>
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
