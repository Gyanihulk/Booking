import React, { useEffect, useState } from "react";
import { CustomerDetailsForm } from "../Components/CustomerDetailsForm";
import { useLocation, useParams } from "react-router-dom";
import { buildImageUrl, getHotelWithRoomById } from "../lib/sanity";
import toast from "react-hot-toast";
import RoomSelectForm from "../Components/RoomSelectForm";

const Checkout = () => {
  const [customerForm, setCustomerForm] = useState(false);
  const [hotel, setHotel] = useState();
  const [checkinDate, setCheckinDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();

  const [selectedRoom, setSelectedRoom] = useState();
  const [rooms, setRooms] = useState([{ guests: 1 }]);
  const [totalCost, setTotalCost] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("India"); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleAgreementChange = (e) => setIsAgreed(e.target.checked);
  const handleConfirm = () => {
    if (!isAgreed) {
      toast('Please agree to the privacy and return policies.');
      return;
    }
    // Proceed with confirmation actions
    alert('Confirmed!');
    handleCloseModal();
  };

  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);
  const handleCityChange = (event) => setCity(event.target.value);
  const handleCountryChange = (event) => setCountry(event.target.value);
  const handleRoomsChange = (index, guests) => {
    if (guests !== null) {
      const newRooms = [...rooms];
      newRooms[index].guests = Math.min(guests, 3);
      setRooms(newRooms);
    } else {
      const newRooms = [...rooms];
      newRooms.splice(index, 1);
      setRooms(newRooms);
    }
  };
  useEffect(() => {
    setTotalCost(calculateTotalCost());
  }, [rooms, selectedRoom, checkinDate, checkOutDate]);
  const calculateTotalCost = () => {
    if (!selectedRoom || !checkinDate || !checkOutDate) {
      // Missing information, return 0 or handle as appropriate
      return 0;
    }

    const roomRate = selectedRoom.price; // Assuming `selectedRoom` has a `price` property
    let totalCost = 0;

    // Calculate the difference in days between check-in and check-out
    const checkIn = new Date(checkinDate);
    const checkOut = new Date(checkOutDate);
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    const dayCount = timeDiff / (1000 * 3600 * 24);

    // Calculate the cost per room based on the number of guests
    rooms.forEach((room) => {
      let roomCost = roomRate;
      if (room.guests === 2) {
        roomCost += roomRate * 0.3; // Add 30% for 2 guests
      } else if (room.guests === 3) {
        roomCost += roomRate * 0.6; // Add 60% for 3 guests
      }
      // Multiply by the number of days
      totalCost += roomCost * dayCount;
    });

    return totalCost;
  };
  const handleAddRoom = () => {
    setRooms([...rooms, { guests: 1 }]);
  };

  const handleFocus = (event) => {
    if (event.target.type === "date" && "showPicker" in event.target) {
      event.target.showPicker();
    }
  };

  // Handle the date change
  const handleDateChange = (event) => {
    setCheckinDate(event.target.value);
  };
  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // getMonth() is zero-based
    let dd = today.getDate();

    // Prefixing single digits with zero
    mm = mm < 10 ? `0${mm}` : mm;
    dd = dd < 10 ? `0${dd}` : dd;

    return `${yyyy}-${mm}-${dd}`;
  };
  const handleOutDateChange = (event) => {
    const outDate = event.target.value;
    if (new Date(outDate) > new Date(checkinDate)) {
      setCheckOutDate(outDate);
    } else {
      toast("Checkout date should be after checkin ");
    }
  };
  const { hotelId } = useParams();
  const location = useLocation();
  const useQuery = () => {
    return new URLSearchParams(location.search);
  };

  const query = useQuery();

  useEffect(() => {
    const date = query.get("date");
    const nights = query.get("nights");
    setCheckinDate(date);
    console.log(`Hotel ID: ${hotelId}, Date: ${date}, Nights: ${nights}`);
    (async () => {
      try {
        const data = await getHotelWithRoomById(hotelId);
        console.log(data);
        setHotel(data[0]);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [location, hotelId]);
  if (!hotel) {
    return (
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="card my-5">No hotel found with id</div>
        </div>
      </div>
    );
  }

  const openReceiptModal = () => {
    const missingFields = [];
    if (!checkinDate) missingFields.push("Check-in Date");
    if (!checkOutDate) missingFields.push("Check-out Date");
    if (!selectedRoom) missingFields.push("Selected Room");
    if (rooms.length === 0 || rooms.some(room => room.guests === undefined)) missingFields.push("Rooms and Guests");
    if (!firstName) missingFields.push("First Name");
    if (!lastName) missingFields.push("Last Name");
    if (!email) missingFields.push("Email");
    if (!phone) missingFields.push("Phone");
    if (!city) missingFields.push("City");
    if (!country) missingFields.push("Country");
  
    if (missingFields.length > 0) {
      const missingString = missingFields.join(", ");
      toast.error(`Missing Fields: ${missingString}`);
    } else {
      console.log("All fields are filled. Proceeding with booking...");
      handleOpenModal()
    }
  };
  
  return (
    <>{isModalOpen && (
      <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title">Booking Confirmation</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleCloseModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <p>Please review your booking details:</p>
   
            <ul>
                  <li>Hotel: <span>{hotel.title}</span></li>
                  <li>Check-in Date: <span>{checkinDate}</span></li>
                  <li>Check-out Date: <span>{checkOutDate}</span></li>
                  <li>Guests: <span>{rooms.reduce((acc, room) => acc + room.guests, 0)}</span></li>
                  <li>Total Cost: <span>${totalCost}</span></li>
                </ul>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" checked={isAgreed} onChange={handleAgreementChange} id="agreeCheckbox"/>
                <label className="form-check-label" htmlFor="agreeCheckbox">
                  I have read and agree to the privacy and return policies.
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handleConfirm}>Confirm</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    )}
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-9 ">
            {hotel.rooms.map((room) => (
              <div key={room._id} className="card my-5 d-flex flex-row">
                <div className=" p-1">
                  {" "}
                  <img
                    className="card-img-top"
                    src={buildImageUrl(room.images[0])}
                    alt="Card image cap"
                  />
                </div>
                <div>
                  {" "}
                  <div className="card-body">
                    <div className="d-flex flex-row justify-content-between">
                      <h5 className="card-title">{room.title}</h5>
                      <div className="d-flex flex-row">
                        <span className="text-decoration-line-through pe-2">
                          {" "}
                          {room.price * (13 / 10)}
                        </span>
                        <h4>₹{room.price}</h4>
                      </div>
                    </div>
                    <p className="card-text">{room.desc}</p>
                    <button
                      onClick={() => {
                        setCustomerForm(!customerForm);
                        setSelectedRoom(room);
                        toast(
                          "Room selected Please Update Customer Info and No of rooms"
                        );
                      }}
                      className="btn btn-primary"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-3 mt-5">
            <div className="card">
              <img
                className="card-img-top"
                src={buildImageUrl(hotel.photos[0])}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{hotel.name}</h5>
                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
              </div>
              {selectedRoom && (
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{selectedRoom?.title}</li>
                  <li className="list-group-item">
                    {selectedRoom && <>₹ {selectedRoom?.price}/per night</>}
                  </li>

                  <li className="list-group-item">
                    <lable>Check In date</lable>
                    <input
                      type="date"
                      className="form-control"
                      id="checkinDate"
                      value={checkinDate}
                      onChange={handleDateChange}
                      onFocus={handleFocus}
                      min={getTodayDate()}
                    />
                  </li>
                  <li className="list-group-item">
                    {" "}
                    <lable>Check Out date</lable>
                    <input
                      type="date"
                      className="form-control"
                      id="checkOutDate"
                      value={checkOutDate}
                      onChange={handleOutDateChange}
                      onFocus={handleFocus}
                      min={getTodayDate()}
                    />
                  </li>
                  <li className="list-group-item">
                    {" "}
                    <RoomSelectForm
                      rooms={rooms}
                      onRoomsChange={handleRoomsChange}
                      onAddRoom={handleAddRoom}
                    />
                  </li>

                  <li className="list-group-item bg-primary">
                    {" "}
                    Total : <h4> ₹ {totalCost} </h4>
                  </li>
                </ul>
              )}
              <div className="card-body">
                <button onClick={openReceiptModal} className="btn btn-primary card-link">
                  Book
                </button>
                <a href="#" className="card-link">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-9 ">
          <CustomerDetailsForm
      firstName={firstName}
      lastName={lastName}
      email={email}
      phone={phone}
      city={city}
      country={country}
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}
      handleEmailChange={handleEmailChange}
      handlePhoneChange={handlePhoneChange}
      handleCityChange={handleCityChange}
      handleCountryChange={handleCountryChange}
    />
          </div>
          <div className="col-3 "></div>
        </div>
      </div>
      
    </>
  );
};

export default Checkout;
