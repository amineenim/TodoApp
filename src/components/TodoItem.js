import React,{useState} from 'react';

function TodoItem({todo,todos,setTodos,editedTodo,setEditedTodo}){


	const handleTodoDelete = (id) =>{
		//we filter the array of todos based on the id of the todo element to delete
		const newTodosList = [...todos].filter(
			(todo) => todo.id !==id
			)
		setTodos(newTodosList)

	}

	const handleTodoEdit = (id) => {
		setEditedTodo(id)

	}

	const handleTodoCompleted = (id) => {
		const newTodos = [...todos].map(
			(todo) => {
				if(todo.id === id)
				{
					todo.completed = !todo.completed
				}
				return todo
			})
		setTodos(newTodos)
	}

	return (
		<div className="todo-row" >
		{todo.text}
		<div className="buttonsContainer">
		<button className="delete-todo"
		onClick={() => handleTodoDelete(todo.id)}>Delete</button>
		<button className="edit-todo" disabled = { todo.completed ? "disabled" : ''}
		onClick={() => handleTodoEdit(todo.id)}>Edit</button>
		<input type="checkbox" onChange={() => handleTodoCompleted(todo.id)} className="completed-check"/>
		</div>
		</div>
		)
	
}

export default TodoItem