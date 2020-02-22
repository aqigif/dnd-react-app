import React from 'react'
import { DragSource, DragPreviewImage } from 'react-dnd'
import ItemTypes from './ItemTypes'
// import knightImage from './knightImage'
const knightStyle = {
  fontSize: 40,
  cursor: 'move',
}
const Knight = ({ connectDragSource, connectDragPreview, isDragging }) => {
  return (
    <>
      <DragPreviewImage connect={connectDragPreview} />
      <div
        ref={connectDragSource}
        style={{
          ...knightStyle,
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        pion
      </div>
    </>
  )
}
export default DragSource(
  ItemTypes.PION,
  {
    beginDrag: () => ({}),
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }),
)(Knight)
