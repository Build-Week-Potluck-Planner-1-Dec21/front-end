import React from 'react';

const ViewEvent = (props) => {
	const { event } = props;

	return (
		<>
			<div key={event.potluck_id} className="card">
				<div className="lead text-center">{event.potluck_name}</div>

				<p>
					<strong>Date:</strong> {event.date}
					<br />
					<strong>Location:</strong> {event.location}
					<br />
					<strong>Time:</strong> {event.time} <br />
					<strong>Event Organizer:</strong> {event.username} <br />
					<p>{event.potluck_description}</p>
				</p>
			</div>
		</>
	);
};

export default ViewEvent;
