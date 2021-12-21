// Imports here
import React from 'react';

//Component

const Event = (props) => {
	const { event } = props;

	return (
		<>
			<div className="lead text-center">{event.potluck_name}</div>
			<p>
				<strong>Date:</strong> {event.date}
				<br />
				<strong>Time:</strong> {event.time} <br />
				<strong>Location:</strong> {event.location}
				<br />
				<strong>Event Organizer:</strong> {event.username} <br />
			</p>
			<p>{event.potluck_description}</p>
		</>
	);
};

export default Event;
