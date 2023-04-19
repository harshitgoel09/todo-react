import React from 'react'

function ListItems(props) {
    
  return ( 
    <>
    <div className='todo-list'>
        <li onClick={()=>{props.onSelect(props.id)}} className='del'>x</li>
        <li>{props.text}</li>
    </div> 
    </>
  )
  
}

export default ListItems
