// Imports here
import React from "react";
import { useHistory } from "react-router-dom";
import "../Design Assets/assets/css/Event.css";

//Component

const Event = (props) => {
  const { push } = useHistory();

  const { event } = props;

  const handleRSVP = () => {
    push(`/rsvp/${event.potluck_id}`);
  };

  return (
    <>
      <div className="lead text-center">{event.potluck_name}</div>
      <p className="event-style">
        <strong>Date:</strong> {event.date}
        <br />
        <strong>Location:</strong> {event.location}
        <br />
        <strong>Time:</strong> {event.time} <br />
        <strong>Event Organizer:</strong> {event.username} <br />
      </p>
      <p className="desc">
        About this event : <br></br> "{event.potluck_description}"
      </p>

      <button className="btn-style" onClick={handleRSVP}>
        RSVP
      </button>

      <button className="btn-style">Edit</button>

      <button className="btn-style">Delete</button>
    </>
  );
};

export default Event;
