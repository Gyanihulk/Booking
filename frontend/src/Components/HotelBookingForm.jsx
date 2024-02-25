import React, { useContext, useState } from "react";
import { HotelContext } from "../context/HotelContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function HotelBookingForm() {
  const [selectedHotel, setSelectedHotel] = useState("hotel1");
  const [nights, setNights] = useState(1);
  // Calculate tomorrow's date
  const calculateTomorrow = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    // Format the date as YYYY-MM-DD
    return tomorrow.toISOString().split("T")[0];
  };

  const [checkinDate, setCheckinDate] = useState(calculateTomorrow());
  const handleFocus = (event) => {
    if (event.target.type === "date" && "showPicker" in event.target) {
      event.target.showPicker();
    }
  };
  // Handle the date change
  const handleDateChange = (event) => {
    setCheckinDate(event.target.value);
  };
  const handleHotelChange = (event) => {
    setSelectedHotel(event.target.value);
    console.log(event);
  };

  const handleNightsChange = (event) => {
    setNights(parseInt(event.target.value, 10));
  };
  const navigate = useNavigate();
  const handleBooking = () => {
    // Add your booking logic here
    console.log("Selected Hotel:", selectedHotel);
    console.log("Check-In Date:", checkinDate);
    console.log("Number of Nights:", nights);
    if (selectedHotel !== "hotel1" && nights !== 0) {
      navigate(
        `/hotel/${selectedHotel}/checkout/?date=${checkinDate}&nights=${nights}`
      );
    } else {
      toast.error("Please fill form ");
    }
  };
  const { hotels } = useContext(HotelContext);

 

  return (
    <div className="booking-container">
      <div className="booking-form">
        <form className="row g-3 align-items-end">
          <div className="col-md-1">
            <h2>BOOK NOW</h2>
            <p>Best Price Guaranteed</p>
          </div>
          <div className="col-md-2 form-field">
            <label htmlFor="hotelSelect" className="form-label">
              Select Property
            </label>
            <select
              className="form-select"
              id="hotelSelect"
              value={selectedHotel}
              onChange={handleHotelChange}
            >
              <option className="form-control" value="select hotel">
                Select hotel
              </option>
              {hotels &&
                hotels.slice(0, 7).map((hotel, index) => (
                  <option
                    className="form-control"
                    key={index}
                    value={hotel?._id}
                  >
                    {hotel.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="col-md-2 form-field">
            <label htmlFor="checkinDate" className="form-label">
              Check In
            </label>
            <input
              type="date"
              className="form-control"
              id="checkinDate"
              value={checkinDate}
              onChange={handleDateChange}
              onFocus={handleFocus}
            />
          </div>
          <div className="col-md-2 form-field">
            <label htmlFor="nights" className="form-label">
              No of Night
            </label>
            <input
              type="number"
              className="form-control"
              id="nights"
              min="1"
              value={nights}
              onChange={handleNightsChange}
            />
          </div>
          <div className="col-md-1 form-field">
            <button
              type="button"
              className="btn btn-primary btn-book"
              onClick={handleBooking}
            >
              Book Online
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HotelBookingForm;
