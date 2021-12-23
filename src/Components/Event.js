// Imports here
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

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
			console.log(resp)
		})
		.catch( err => {
			console.log(err)
		})

	}

	return (
		<>
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
			
			<br />
			<button onClick={handleRSVP}>RSVP</button>
			<br />
			<button onClick={handleEdit}>Edit</button>
			<br />
			<button onClick={handleDelete}>Delete</button>
			<br />
			
		</>
	);
};

export default Event;
