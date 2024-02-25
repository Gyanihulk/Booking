


import React, { useState } from 'react';

const Room = ({ roomNumber, guests, onGuestsChange, onRemoveRoom }) => (
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text">Room {roomNumber}</span>
    </div>
    <input
      type="number"
      className="form-control"
      placeholder="Number of Guests"
      value={guests}
      onChange={onGuestsChange}
      max="3"
    />
    <div className="input-group-append">
      <button className="btn btn-outline-secondary" type="button" onClick={onRemoveRoom}>Remove</button>
    </div>
  </div>
);

const RoomSelectForm = ({ rooms, onRoomsChange, onAddRoom }) => {
    const handleGuestsChange = (index, event) => {
      onRoomsChange(index, event.target.value);
    };
  
    const handleRemoveRoom = (index) => {
      onRoomsChange(index, null);
    };
  
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            {rooms.map((room, index) => (
              <Room
                key={index}
                roomNumber={index + 1}
                guests={room.guests}
                onGuestsChange={(e) => handleGuestsChange(index, e)}
                onRemoveRoom={() => handleRemoveRoom(index)}
              />
            ))}
            <button type="button" className="btn btn-primary" onClick={onAddRoom}>
              + Add Room
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default RoomSelectForm;
