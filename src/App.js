import { useState } from 'react';
import './App.css';
import ListItems from './components/ListItems'
function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);


  const inpFunction = (event) => {
    setInputList(event.target.value);
  }
  const listOfItems =(event)=>{
    setItems((oldItems)=>{
      return [...oldItems, inputList]
    });
    setInputList("");
  }
  const deleteItem=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem, idx)=>{
          return idx!=id;
      })
    });
  }
  return (
    <div className='main-div'>
      <div className="App">
        <h1 className="heading">ToDo List</h1>
        <input type="text" placeholder="Add Task" name="todo" onChange={inpFunction} value={inputList}
        />
        <button onClick={listOfItems}>+</button>

        <ol>
        {/* <li>{inputList}</li> */}
         { items.map((val, index)=>{
            return <ListItems key={index} 
              id={index}
              text={val}
              onSelect={deleteItem} />
         })}
        </ol>
      </div>
    </div>
    
  );
}

export default App;
