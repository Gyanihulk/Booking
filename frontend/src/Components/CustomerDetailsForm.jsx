import React, { useState } from 'react';

export const CustomerDetailsForm = ({firstName,
  lastName,
  email,
  phone,
  city,
  country,
  handleFirstNameChange,
  handleLastNameChange,
  handleEmailChange,
  handlePhoneChange,
  handleCityChange,
  handleCountryChange}) => {


  return (
    <div className='container'>
      <h4 className='bg-primary'>Customer Details</h4>
      <form>
        <div className="row">
          <div className="col">
            <input 
              type="text" 
              className="form-control m-2" 
              placeholder="First name" 
              aria-label="First name"
              value={firstName}
              onChange={handleFirstNameChange} 
            />
          </div>
          <div className="col">
            <input 
              type="text" 
              className="form-control m-2" 
              placeholder="Last name" 
              aria-label="Last name"
              value={lastName}
              onChange={handleLastNameChange} 
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            
          <input
            type="email"
            className="form-control m-2"
            id="email"
            value={email}
            aria-label="email"
            placeholder='Email'
            onChange={handleEmailChange}
          />
          </div>
          <div className="col">
          <input
            type="text"
            className="form-control m-2"
            value={city}
            aria-label="City"
            placeholder="City"
            onChange={handleCityChange}
          />
          </div>
          
        </div>
        <div className="row">
          <div className="col">
          <select
            className="form-control m-2"
            aria-label="Country"
            onChange={handleCountryChange}
          >
            <option value="India">India</option>
          </select>
          </div>
          <div className="col">
          <input
            type="tel"
            className="form-control m-2"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="IN +91"
            aria-label="Phone"
          />
          </div>
          
        </div>
      </form>
    </div>
  );
};
