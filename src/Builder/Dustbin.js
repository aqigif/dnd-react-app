import React from 'react';
import { useDrop } from 'react-dnd';
import ItemTypes from '../ItemTypes';
import Box from './Box';
const style = {
  width: 400,
  height: '100%',
  display: 'flex',
  borderRadius: 5,
  color: 'white',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const data = ['Appbar', 'Articles', 'Banner', 'Profile', 'Videos'];
const Dustbin = props => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: () => ({ name: 'Dustbin' }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  const isActive = canDrop && isOver;
  let backgroundColor = '#222';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }
  const { componentSelected, setComponentUnselect, componentUnselect, setComponentSelect } = props;
  return (
    <div ref={drop} style={{ ...style, backgroundColor }}>
      {isActive ? 'Release to drop' : 'Drag a box here'}
      <br />
      {componentSelected.map(item => {
        return (
          <Box
            name={item}
            setComponentUnselect={setComponentUnselect}
            componentUnselect={componentUnselect}
            componentSelected={componentSelected}
            setComponentSelect={setComponentSelect}
          />
        );
      })}
    </div>
  );
};
export default Dustbin;
