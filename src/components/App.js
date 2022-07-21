import React,{useState} from 'react';
import '../App.css';
import TodoForm from './TodoForm.js'
import TodoItem from './TodoItem.js'
import Header from './Header.js'

function App() {
	//variable that refers to the input state in the form 
	const [input,setInput] = useState("")
	//variable that refers to our todos list 
	const [todos,setTodos] = useState([])
	//variable that refers to the id of the actual eddited todo item
	const [editedTodo,setEditedTodo] = useState(0)
	//variable that refers to the input value of the edited todo item
	const [editingText,setEditingText] = useState('')


	const saveEditedTodo = (id) => {

		const updatedTodos = [...todos].map(
			(todo) => {
				if(todo.id === editedTodo){
					todo.text = editingText 
				}
				return todo
			})
		setTodos(updatedTodos)
		setEditingText('')
		setEditedTodo(0)
	}



  return (
    <div className="App">
      <Header />
      <h1 className="title">Todo List</h1>
      <p className="introduction"> Here you may planify some tasks that you want to accomplish, Hope you 
      get a good experience with us ! </p>
      <TodoForm 
      input={input}
      setInput = {setInput}
      setTodos ={setTodos}
      todos = {todos}
      />
      {todos.map(
      	(todo) => {
      		if(todo.id === editedTodo)
      		{
      			return (<form className="form-todo-edit"
      				     onSubmit ={() => saveEditedTodo(todo.id)} key={todo.id}>
      				    <input type="text" className="edit-input" 
      				    placeholder={todo.text}
      				    onChange={(e) =>setEditingText(e.target.value)} />
      				    <button type="submit" className="save-button">Save</button>
      				    </form>)
      		}
      		return <TodoItem todo = {todo} key={todo.id} todos={todos} setTodos={setTodos} editedTodo={editedTodo} setEditedTodo={setEditedTodo}/>	
      	}
      	)}
    </div>
  );
}

export default App;
