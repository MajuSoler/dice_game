/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import React, { useState } from "react";
import ScoreCard from "./components/ScoreCard";
import Dice from "./components/Dice";
import Winner from "./components/Winner";

function App() {
  const [dice1, setDice1] = useState(0);
  const [dice2, setDice2] = useState(0);

  const [totalPlayer1, setTotalPlayer1] = useState(0);
  const [totalPlayer2, setTotalPlayer2] = useState(0);

  const [turnWinner, setTurnWinner] = useState(null);

  const handleDiceCLick = (dice) => {
    if (dice === "1") {
      setDice1(randomDiceNumber);
    } else if (dice === "2") {
      setDice2(randomDiceNumber);
    }
  };

  function randomDiceNumber() {
    return Math.floor(Math.random() * 6 + 1);
  }

  const compareRolls = () => {
    const result = dice1 - dice2;
    if (result > 0) {
      setTotalPlayer1(totalPlayer1 + 1);
      setTurnWinner("Player 1");
    } else if (result < 0) {
      setTotalPlayer2(totalPlayer2 + 1);
      setTurnWinner("Player 2");
    }
  };

  const newTurn = () => {
    setDice1(0);
    setDice2(0);
    setTurnWinner("");
  };
  return (
    <div className="App">
      <h1>Score</h1>
      <div>
        <ScoreCard player1={totalPlayer1} player2={totalPlayer2} />
      </div>
      <div className="game">
        <Dice diceResult={dice1} />
        <Winner winner={turnWinner} />
        <Dice diceResult={dice2} />
      </div>
      <div className="buttons">
        <button
          className="button"
          name="Roll"
          value="1"
          onClick={(e) => {
            handleDiceCLick(e.target.value);
          }}
        >
          Roll
        </button>
        <button
          className="button"
          name="Roll"
          value="2"
          onClick={(e) => {
            handleDiceCLick(e.target.value);
          }}
        >
          Roll
        </button>
      </div>
      <div className="buttons">
        <button
          className="button"
          onClick={() => {
            compareRolls();
          }}
        >
          Compare Rolls
        </button>
        <button
          className="button"
          onClick={() => {
            newTurn();
          }}
        >
          New Turn
        </button>
      </div>
      <div className="buttons"></div>
    </div>
  );
}

export default App;
