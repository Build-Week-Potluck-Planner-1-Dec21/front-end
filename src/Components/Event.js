import React from 'react';

const Event = (props) => {
	const { event, handleEdit, handleDelete, handleSelectEdit } = props;

	return (
		<>
			<div key={event.id} className="card">
				<div className="lead text-center">{event.potluck_name}</div>
				<p>
					<strong>Date:</strong> {event.date}
					<br />
					<strong>Location:</strong> {event.location}
					<br />
					<strong>Time:</strong> {event.time} <br />
					<strong>Event Organizer:</strong> {event.username} <br />
				</p>
				<p>{event.potluck_description}</p>
				<button>RSVP</button>&nbsp;&nbsp;&nbsp;
				<button
					onClick={() => {
						handleEditSelect(event.id);
					}}
				>
					Edit
				</button>
				&nbsp;&nbsp;&nbsp;
				<button
					onClick={() => {
						handleDelete(event.id);
					}}
				>
					Delete
				</button>
			</div>
		</>
	);
};

export default Event;
