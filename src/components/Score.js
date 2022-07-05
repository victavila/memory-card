export default function Score({score, bestScore}) {
  return (
    <div className="scoreboard">
      <div className="score">Score: {score}</div>
      <div className="besst-score">Best score: {bestScore}</div>
    </div>
  )
}