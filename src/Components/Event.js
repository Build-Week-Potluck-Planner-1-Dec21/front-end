// Imports here
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import "../DesignAssets/assets/css/events.css";

//Component

const Event = (props) => {

	const { push } = useHistory();
    const potluck_id = useParams();
	const { event } = props;

	const handleRSVP = () => {
		push(`/rsvp/${event.potluck_id}`)
	}

	const handleEdit = () => {
		push(`/potlucks/${event.potluck_id}`)
	}

	const handleDelete = () => {
		axiosWithAuth()
		.delete(`/potlucks/${event.potluck_id}`)
		.then( resp => {
			push(`/`)
		})
		.catch( err => {
			console.log(err)
		})

	}

	return (
		<div className='event-border'>
			<div className="lead text-center">{event.potluck_name}</div>
			<p className="event-style">
				<strong>Date:</strong> {event.date}
				<br />
				<strong>Location:</strong> {event.location}
				<br />
				<strong>Time:</strong> {event.time} <br />
				<strong>Event Organizer:</strong> {event.username} <br />
			</p>
			<button onClick={handleRSVP}>RSVP</button>
			<br />
			<button onClick={handleEdit}>Edit</button>
			<br />
			<button onClick={handleDelete}>Delete</button>
			<br />
			
		</div>
	);
};

export default Event;
