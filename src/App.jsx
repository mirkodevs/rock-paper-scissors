import { rotate } from "three/examples/jsm/nodes/Nodes.js";
import "./App.css";
import { useState } from "react";
function App() {
  const moves = ["ROCK", "PAPER", "SCISSORS"];
  const movesIcon = {
    rock: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="139.64"
        height="72"
        viewBox="0 0 1536 1408"
      >
        <path
          fill="currentColor"
          d="M768 128q-53 0-90.5 37.5T640 256v128h-32v-93q0-48-32-81.5T496 176q-46 0-79 33t-33 79v429l-32-30V515q0-48-32-81.5T240 400q-46 0-79 33t-33 79v224q0 47 35 82l310 296q39 39 39 102q0 26 19 45t45 19h640q26 0 45-19t19-45v-25q0-41 10-77l108-436q10-36 10-77V355q0-48-32-81.5t-80-33.5q-46 0-79 33t-33 79v32h-32V259q0-40-25-72.5t-64-40.5q-14-2-23-2q-46 0-79 33t-33 79v128h-32V262q0-51-32.5-89.5T781 129q-5-1-13-1m0-128q84 0 149 50q57-34 123-34q59 0 111 27t86 76q27-7 59-7q100 0 170 71.5t70 171.5v246q0 51-13 108l-109 436q-6 24-6 71q0 80-56 136t-136 56H576q-84 0-138-58.5T384 1207L76 911Q0 838 0 736V512q0-99 70.5-169.5T240 272q11 0 16 1q6-95 75.5-160T496 48q52 0 98 21Q666 0 768 0"
        />
      </svg>
    ),
    paper: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="116.58"
        height="72"
        viewBox="0 0 1632 1792"
      >
        <path
          fill="currentColor"
          d="M880 128q-46 0-79 33t-33 79v656h-32V368q0-46-33-79t-79-33t-79 33t-33 79v784L358 947q-38-51-102-51q-53 0-90.5 37.5T128 1024q0 43 26 77l384 512q38 51 102 51h688q34 0 61-22t34-56l76-405q5-32 5-59V624q0-46-33-79t-79-33t-79 33t-33 79v272h-32V368q0-46-33-79t-79-33t-79 33t-33 79v528h-32V240q0-46-33-79t-79-33m0-128q68 0 125.5 35.5T1094 132q19-4 42-4q99 0 169.5 70.5T1376 368v17q105-6 180.5 64t75.5 175v498q0 40-8 83l-76 404q-14 79-76.5 131t-143.5 52H640q-60 0-114.5-27.5T435 1690L51 1178q-51-68-51-154q0-106 75-181t181-75q78 0 128 34V368q0-99 70.5-169.5T624 128q23 0 42 4q31-61 88.5-96.5T880 0"
        />
      </svg>
    ),
    scissors: (
      <svg
        style={{ transform: "rotate(90deg)" }}
        xmlns="http://www.w3.org/2000/svg"
        width="149.34"
        height="72"
        viewBox="0 0 1792 1536"
      >
        <path
          fill="currentColor"
          d="M1073 1536H896q-163 0-226-141q-23-49-23-102v-5q-62-30-98.5-88.5T512 1072q0-38 5-48H256q-106 0-181-75T0 768t75-181t181-75h113l-44-17q-74-28-119.5-93.5T160 256q0-106 75-181T416 0q46 0 91 17l628 239h401q106 0 181 75t75 181v668q0 88-54 157.5t-140 90.5l-339 85q-92 23-186 23m-49-711l-155 71l-163 74q-30 14-48 41.5t-18 60.5q0 46 33 79t79 33q26 0 46-10l338-154q-49-10-80.5-50t-31.5-90zm320 311q0-46-33-79t-79-33q-26 0-46 10l-290 132q-28 13-37 17t-30.5 17t-29.5 23.5t-16 29t-8 40.5q0 50 31.5 82t81.5 32q20 0 38-9l352-160q30-14 48-41.5t18-60.5m-232-752L462 136q-24-8-46-8q-53 0-90.5 37.5T288 256q0 40 22.5 73t59.5 47l526 200v64H256q-53 0-90.5 37.5T128 768t37.5 90.5T256 896h535l233-106V592q0-63 46-106l111-102zm-39 1024q82 0 155-19l339-85q43-11 70-45.5t27-78.5V512q0-53-37.5-90.5T1536 384h-308l-136 126q-36 33-36 82v296q0 46 33 77t79 31t79-35t33-81V672h32v208q0 70-57 114q52 8 86.5 48.5t34.5 93.5q0 42-23 78t-61 53l-310 141z"
        />
      </svg>
    ),
  };

  const [gameState, setGameState] = useState({
    player1: "ROCK",
    player2: "ROCK",
    points: [0, 0],
  });

  function handleMove(move) {
    const numcas = Math.floor(Math.random() * 3);
    const player2move = moves[numcas];
    let winner;
    console.log(player2move, move);
    if (move === player2move) {
      winner = undefined;
    } else if (
      (player2move === "PAPER" && move === "SCISSORS") ||
      (player2move === "SCISSORS" && move === "ROCK") ||
      (player2move === "ROCK" && move === "PAPER")
    ) {
      winner = 0;
    } else {
      winner = 1;
    }

    const newPoints = [...gameState.points];
    newPoints[winner] += 1;
    setGameState((prevGameState) => ({
      ...prevGameState,
      player1: move,
      player2: player2move,
      points: newPoints,
    }));
  }
  function onRestart() {
    setGameState({
      player1: "ROCK",
      player2: "ROCK",
      points: [0, 0],
    });
  }
  return (
    <main>
      <h1>Rock Paper Scissors Game</h1>
      <div id="moves">
        <div
          id="move1"
          style={{
            transform:
              gameState.player1 === "SCISSORS" &&
              "rotate(-90deg) rotateX(180deg)",
          }}
        >
          {movesIcon[gameState.player1.toLowerCase()]}
        </div>
        <div
          style={{
            transform:
              gameState.player2 !== "SCISSORS" &&
              "rotate(90deg) rotateX(180deg)",
          }}
          id="move2"
        >
          {movesIcon[gameState.player2.toLowerCase()]}
        </div>
      </div>
      <div id="points">
        <span> {gameState.points[0]}</span>:<span> {gameState.points[1]}</span>
      </div>
      <ul id="choose">
        {moves.map((oneMove) => {
          return (
            <li key={oneMove}>
              <button onClick={() => handleMove(oneMove)}>{oneMove}</button>
            </li>
          );
        })}
        <li>
          <button onClick={onRestart}>restart</button>
        </li>
      </ul>
    </main>
    
  );
}

export default App;
