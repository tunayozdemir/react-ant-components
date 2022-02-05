import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { TableV1, TableV2, TableV3, TableV4, TableV5, TableV6 } from '../../components/Antd'
import './TablesPage.scss'

const tableData = [
  { id: '0', item: <TableV1 /> },
  { id: '1', item: <TableV2 /> },
  { id: '2', item: <TableV3 /> },
  { id: '3', item: <TableV4 /> },
  { id: '4', item: <TableV5 /> },
  { id: '5', item: <TableV6 /> },
]


function TablePageV7_Dnd() {
  const [characters, updateCharacters] = useState(tableData);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }


  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters" >
          {(provided) => (
            <div  {...provided.droppableProps} ref={provided.innerRef}>
              {characters.map(({ id, item }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <>
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          {item}
                        </div>
                        <hr />
                        <br />
                      </>
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

export default TablePageV7_Dnd;
