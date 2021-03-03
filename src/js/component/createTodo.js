// import React, { useState, useEffect } from "react";
// import { PropTypes } from "prop-types";

// export default function CreateTodo() {

// 	fetch("https://jsonplaceholder.typicode.com/todos/", {
// 		method: "POST",
// 		body: JSON.stringify({
// 			title: newTodo,
// 			body: "",
// 			userId: 1
// 		}),
// 		headers: {
// 			"Content-type": "application/json; charset=UTF-8"
// 		}
// 	})
// 		.then(response => {
// 			return response.json();
// 		})
// 		.then(responseJson => {
// 			let newTodos = [...todos];
// 			newTodos.push(responseJson);
// 			setTodos(newTodos);
// 			SetNewTodo(" ");
// 	