import React, { useState, useEffect } from "react";

import Todo from "./todos.js";
//import { CreateTodo } from "./createTodo.js";

export function Home() {
	const [todos, setTodos] = useState([]);
	const [newTodo, SetNewTodo] = useState("");
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos/", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
				// 'Content-Type': 'application/x-www-form-urlencoded',
			}
		})
			.then(response => {
				console.log(response);
				return response.json();
			})
			.then(responseJson => {
				setTodos(responseJson);
			});
	}, []);

	function CreateTodo() {
		fetch("https://jsonplaceholder.typicode.com/todos/", {
			method: "POST",
			body: JSON.stringify({
				title: newTodo,
				body: "",
				userId: 1
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
			.then(response => {
				return response.json();
			})
			.then(responseJson => {
				let newTodos = [...todos];
				newTodos.push(responseJson);
				setTodos(newTodos);
				SetNewTodo(" ");
			});
	}

	function updateTodo(newTitle, id) {
		fetch("https://jsonplaceholder.typicode.com/todos/" + id + "/", {
			method: "PUT",
			body: JSON.stringify({
				id: id,
				title: newTitle,
				body: "",
				userId: 1
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
			.then(response => {
				return response.json();
			})
			.then(responseJson => {
				console.log(responseJson);
				// let newTodos = [...todos];
				// newTodos.push(responseJson);
				// setTodos(newTodos);
				// SetNewTodo(" ");
			});
	}

	function deleteTodo(id) {
		fetch("https://jsonplaceholder.typicode.com/todos/" + id + "/", {
			method: "DELETE"
		}).then(response => {
			if (response.ok) {
				let positionToDelete = -1;

				let newTodos = [...todos];
				for (let i = 0; i < todos.length; i++) {
					let newTodo = newTodos[i];
					if (newTodo.id === id) {
						positionToDelete = i;
					}
				}
				if (positionToDelete > -1) {
					newTodos.splice(positionToDelete, 1);
					setTodos(newTodos);
				} else console.log("error");
			}
		});
	}

	return (
		<div className="text-center mt-5">
			<div>
				<input
					type="text"
					onChange={event => {
						SetNewTodo(event.target.value);
					}}
				/>
				<input type="button" value="Add Todo" onClick={CreateTodo} />
			</div>
			<ul>
				{todos.map((todo, index) => {
					return (
						<Todo
							key={todo.id}
							todo={todo}
							clickSave={updateTodo}
							clickDelete={deleteTodo}
						/>
					);
				})}
			</ul>
		</div>
	);
}
