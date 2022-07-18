import "./Components.css";
export default function ScoreCard(props) {
  return (
    <div className="scoreCardBody">
      <div className="player">
        <p>Player 1</p>
        <p>{props.player1}</p>
      </div>
      <div className="player">
        <p>Player 2</p>
        <p>{props.player2}</p>
      </div>
    </div>
  );
}
