import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const Event = (props) => {
	const { event, id, handleView } = props;

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
				</p>
				<p>{event.potluck_description}</p>
				<button>RSVP</button>&nbsp;&nbsp;&nbsp;
				<button>Edit</button>&nbsp;&nbsp;&nbsp;<button>Delete</button>
			</div>
		</>
	);
};

export default Event;
