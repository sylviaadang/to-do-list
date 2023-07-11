import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import {useState} from 'react';
import {v4} from 'uuid';

function App() {

  const [task, setTask] = useState([])

  const addTask = task => {
    setTask(currentTask => ([...currentTask, task]))
  }

  const removeTask = id => {
    let left = task.slice(0, id)
    let right = task.slice(id + 1)

    setTask(left.concat(right))
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <Form addFunction = {addTask}/>
      {
        task.map((task, i) => {
          return (
            <List key={v4()} id={i} removeTask={removeTask} name={task} />
          )
        })
      }
    </div>
  );
}

export default App;
