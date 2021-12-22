import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Design Assets/assets/css/events.css';
import Event from './Event';
import EditEvent from './EditEvent';
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
	const [editing, setEditing] = useState(false);
	const [editID, setEditID] = useState('');

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

	const handleEdit = (event) => {
		axios
			.put(`/api/potlucks/${event.id}`)
			.then((res) => {
				events.map((item) => (item.id == event.id ? res : item));
			})
			.catch((err) => console.log(err));
	};

	const handleDelete = (event) => {
		axios.put();
	};

	const handleEditSelect = (id) => {
		setEditing(true);
		setEditID(id);
	};

	return (
		<div className="container">
			<h1>Events List</h1>
			<div className="grid-2">
				{events.map((event) => {
					return (
						<div key={event.id}>
							<Event
								key={event.id}
								event={event}
								handleEdit={handleEdit}
								handleDelete={handleDelete}
								id={event.id}
								handleEditSelect={handleEditSelect}
							/>
						</div>
					);
				})}
			</div>

			{editing && (
				<EditEvent
					editID={editID}
					handleEdit={handleEdit}
					handleEditSelect={handleEditSelect}
				/>
			)}
		</div>
	);
};

export default ViewEvents;
