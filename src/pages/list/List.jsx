import React from "react";
import "./list.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/header/Header";
const List = () => {
  const location=useLocation()
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  return (

    <div>
      <Navbar />
      <Header type="list" />

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              <label>CHeck-in Date</label>
              <input placeholder={destination}type="text" />
            </div>
            <div className="lsItem">
              <label>CHeck-in Date</label>
              <span>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
            </div>
            
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
