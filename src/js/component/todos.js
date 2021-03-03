import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import AlertDismissible from "./alert.js";
//create your first component

export default function Todo(props) {
	const [text, setText] = useState(props.todo.title);
	const [showAlert, setShowAlert] = useState(false);
	//const [updateTodo, setupdateTodo] = useState("");

	let todo = props.todo;
	return (
		<li>
			<input
				type="text"
				value={text}
				onChange={event => {
					setText(event.target.value);
				}}
			/>
			<input
				type="button"
				value="Save"
				onClick={event => {
					props.clickSave(props.todo.title, props.todo.id);

					//updateTodo(todo.id, text);
				}}
			/>
			<input
				type="button"
				value="Delete"
				onClick={event => {
					setShowAlert(true);
					//props.clickDelete(todo.id);
					//return <AlertDismissible />;
				}}
			/>
			{showAlert ? (
				<AlertDismissible todo={todo} clickDelete={props.clickDelete} />
			) : (
				""
			)}
		</li>
	);
}

Todo.propTypes = {
	todo: PropTypes.object,
	clickSave: PropTypes.func,
	clickDelete: PropTypes.func
};
