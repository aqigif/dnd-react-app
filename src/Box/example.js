import React from 'react'
import Dustbin from './Dustbin'
import Box from './Box'
export default function Container() {
  return (
    <center>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Dustbin />
      </div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Box name="Article" />
        <Box name="Videos" />
        <Box name="Banner" />
      </div>
    </center>
  )
}
