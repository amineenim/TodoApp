import React,{useState} from 'react';

function TodoForm({input,setInput,todos,setTodos}){


	const handleTodoSubmit = (e) => {
		e.preventDefault();

		const newTodo = {
			id        : new Date().getTime(),
			text      : input,
			completed : false
		}
		console.log(newTodo)
		const newTodos = [...todos].concat(newTodo);
		setTodos(newTodos)
		setInput('')

	}

	return(

		<form onSubmit ={ handleTodoSubmit } className="todo-form">
		   <input type="text" className="todo-input" 
		   placeholder="add a Todo ..."
		   onChange ={(e) => setInput(e.target.value)}
		   value ={input}
		   />
		   <button type="submit" className ="todo-button"> Add Todo </button>
		</form>
		)
}

export default TodoForm