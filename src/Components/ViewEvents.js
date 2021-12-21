import React, { useState, useEffect } from 'react';
import '../Design Assets/assets/css/events.css';
import Event from './Event';
import axios from 'axios';

const initialValues = {
	potluck_id: '',
	potluck_name: '',
	potluck_description: null,
	date: '',
	time: '',
	location: '',
	organizer: '',
	username: '',
};

const ViewEvents = (props) => {
	const [events, setEvents] = useState([initialValues]);

	useEffect(() => {
		axios
			.get('https://potluckplan.herokuapp.com/api/potlucks')
			.then((res) => {
				// console.log(res.data);
				setEvents(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="container">
			<h1>Events List</h1>
			<div className="grid-2">
				{events.map((event) => {
					return (
						<div key={event.id} className="card">
							<Event key={event.potluck_id} event={event} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

//Export

export default ViewEvents;
