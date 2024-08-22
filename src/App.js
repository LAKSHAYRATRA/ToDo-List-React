import logo from './logo.svg';
import './App.css';
import List from './components/List'
import { useState } from 'react';

function App() {
  const [aoe,changeAoe]=useState('Add')
  const [placeHolder,changePlaceHolder]=useState("add todo...");

  const [todoList,changeTodoList]=useState([])

  const [newData,changeNewData]=useState('');

  const [editIndex, setEditIndex] = useState(null);

  const addTodoHandler=()=>{
    if (newData.trim() !== '') {
      if (editIndex !== null) {
        // If editing, update the existing item
        const updatedList = [...todoList];
        updatedList[editIndex] = newData;
        changeTodoList(updatedList);
        setEditIndex(null); // Reset after editing
        changeAoe("Add");
      } else {
        // If not editing, add a new item
        changeTodoList([...todoList, newData]);
      }
      changeNewData('');
    }
  }
  const deleteItem = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    changeTodoList(updatedList);
  };
  const onChangeHandler = (e) => {
    changeNewData(e.target.value);
    console.log(newData);
}
const editItem = (index) => {
  setEditIndex(index);
  changeNewData(todoList[index]);
  changeAoe('Edit');
};
  return (
    <div className="App">
      <h1 className='text-6xl m-2 font-bold p-2'>TODO LIST</h1>
      <div>
        <div className='w-[90vw] border-2 mx-[5vw]'></div>
        <div className='flex-col justfy-center align-center m-2'>
          <input type='text' placeholder={placeHolder} className='rounded w-[80vw] border-4 m-2 ' value={newData} onChange={onChangeHandler}></input>
          <div className='flex justify-center align-center'>
            <button className='border-4 rounded-xl p-1 m-2 bg-emerald-500 border-emerald-500 hover:bg-emerald-600 active:bg-red-400' onClick={addTodoHandler}>{aoe}</button>
            </div>
        </div>
        <br></br>
        <br/>
        <div className='flex justify-center align center'>
          
        <List items={todoList} deleteItem={deleteItem} editItem={editItem}/>
        </div>
      </div>
    </div>
  );
}

export default App;
