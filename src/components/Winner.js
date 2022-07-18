import "./Components.css";
export default function Winner(props) {
  const winner = props.winner;
  return (
    <div className="winner">
      {winner ? <div>{winner} wins this turn</div> : <div></div>}
    </div>
  );
}
