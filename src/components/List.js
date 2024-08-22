import React from 'react'

function work({items,deleteItem,editItem}) {
  const deleteClickHandler=(e)=>{
    const index = parseInt(e.target.id);
    deleteItem(index);
  }
  const editClickHandler=(e)=>{
    const index = parseInt(e.target.id);
    editItem(index);
  }
  return (
    <div>
      {
        items.map((item,index)=>(
          <div className='flex justify-between w-[80vw] border-2 rounded-xl'>
      <p className='inline m-3'>{item}</p>
      <div className='inline'>
        <button className='mx-3 my-1 p-2 bg-green-400 rounded-xl hover:bg-green-600 active:bg-green-300'id={index} onClick={editClickHandler}>Edit</button>
        <button className='mx-3 my-1 p-2 bg-red-400 rounded-xl hover:bg-red-600 active:bg-red-300' id={index} onClick={deleteClickHandler}>Delete</button>
      </div>
    </div>
        ))

      }
    </div>
  )
}

export default work
