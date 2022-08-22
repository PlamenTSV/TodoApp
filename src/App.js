import './App.css';
import {useState} from 'react'

//The Application
const ToDoApp = () => {
  let [todos, setTodos] = useState([{}]);

  return (
    <div className="body">
      <h1>ToDo List App</h1>
      <InputField setTodos={setTodos}/>
      <ListField todos={todos} setTodos={setTodos}/>
    </div>
  )
}

//The component representing a single todo in the list
const Todo = ({value, todos, setTodos}) => {
    return(
      <div className="todo-element">
        <h2>{value}</h2>
        <button className='remove-todo' onClick={() => {
          setTodos(todos.filter(currElement => currElement.value !== value));
        }}>x</button>
      </div>
    )
}

//The part of the application holding the list of todos
const ListField = ({todos, setTodos}) => {
  return(
    <div className="todo-list">
      {todos.filter(currTodo => currTodo.value !== undefined)
            .map(currTodo => <Todo todos={todos} value={currTodo.value} setTodos={setTodos}/>)}
    </div>
  )
}

//The part of the application with the input fields
const InputField = ({setTodos}) => {
  let [currTodo, setCurrTodo] = useState("");
  let [id, setId] = useState(1);

  return (
    <div className="input">
      <input className="enter-todo" type="text" onChange={event => {
        setCurrTodo(event.target.value);
      }} value={currTodo}></input>
      <input className="submit-todo" type="button" value="ADD" onClick={() => {
        if(currTodo !== ""){
          setTodos(oldTodos => [...oldTodos, {
            id: id,
            value: currTodo,
            isCompleted: false
          }]);
          setCurrTodo("");
          setId(prev => prev+1);
        }
      }}/>
    </div>
  )
}

//The App component that gets exported for rendering
function App() {
  return (
    <div className="bg">
      <ToDoApp/>
    </div>
  );
}

export default App;
