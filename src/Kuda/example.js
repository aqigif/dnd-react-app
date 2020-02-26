import React, { useEffect, useState } from 'react'
import Board from './Board'
import { observe } from './Game'
const containerStyle = {
  width: 500,
  height: 500,
  border: '2px solid gold',
}
/**
 * The Chessboard Tutorial Application
 */
const ChessboardTutorialApp = () => {
  const [knightPos, setKnightPos] = useState([1, 7])
  // the observe function will return an unsubscribe callback
  useEffect(() => observe(newPos => setKnightPos(newPos)))
  return (
    <center>
      <div style={containerStyle}>
        <Board knightPosition={knightPos} />
      </div>
    </center>
  )
}
export default ChessboardTutorialApp
