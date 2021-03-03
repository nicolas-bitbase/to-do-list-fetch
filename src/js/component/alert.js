import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

export default function AlertDismissible(props) {
	const [text, setText] = useState(props.todo.title);
	let todo = props.todo;

	return (
		<div className="modal" tabIndex="-1" role="dialog">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Modal title</h5>
						<button
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<p>Modal body text goes here.</p>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary">
							Save changes
						</button>
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
							onClick={event => {
								props.clickDelete(props.todo.id);
							}}>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

AlertDismissible.propTypes = {
	todo: PropTypes.object,

	clickDelete: PropTypes.func
};
