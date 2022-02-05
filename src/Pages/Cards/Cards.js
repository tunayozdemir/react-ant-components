import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { CardV1 } from '../../components/Antd'

import './Cards.scss'

const cardData = [
  { id: '0', item: <CardV1 /> },
  { id: '1', item: <CardV1 /> },
  { id: '2', item: <CardV1 /> },
  { id: '4', item: <CardV1 /> },
  { id: '5', item: <CardV1 /> },
  { id: '6', item: <CardV1 /> },
  { id: '7', item: <CardV1 /> },
  { id: '8', item: <CardV1 /> }

]

function Cards() {

  const [characters, updateCharacters] = useState(cardData);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCharacters(items);
  }

  return (
    <div className='cards-container'>
      
      <h4>Yatay</h4>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters" >
          {(provided) => (
            <div className="cards-container__wrap" {...provided.droppableProps} ref={provided.innerRef}>
              {characters.map(({ id, item }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div className="cards-container__wrap--item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        {item}
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <hr />

      <h4>Dikey</h4>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters" >
          {(provided) => (
            <div  {...provided.droppableProps} ref={provided.innerRef}>
              {characters.map(({ id, item }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        {item}
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

    </div>
  )
}

export default Cards;
