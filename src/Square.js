import React from 'react'
const squareStyle = {
  width: '100%',
  textAlign: 'center',
  height: '100%',
}
export const Square = ({ black, children }) => {
  const backgroundColor = black ? 'black' : 'white'
  const color = black ? 'white' : 'black'
  return (
    <div
      style={{
        ...squareStyle,
        color,
        backgroundColor,
      }}
    >
      {children}
    </div>
  )
}
