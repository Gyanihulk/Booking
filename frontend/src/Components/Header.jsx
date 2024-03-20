import { useContext } from "react";
import { HotelContext } from "../context/HotelContext";
import { Link } from "react-router-dom";


const Header = () => {
  const {hotels}=useContext(HotelContext);

  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center custom-header"
      >
        <div className="container d-flex align-items-center justify-content-between">
          <nav className="navbar navbar-dark  bg-body-tertiary fixed-top">
            <div className="container-fluid">
              <Link to='/'>

            <div className="logo">
              <img className="header-logo " src="assets/img/logo.png"/> 
              <h1>ChardhamStays</h1>
            </div>
              </Link>
              
              <nav id="navbar" className="navbar">
                <ul>
                  <li className="nav-item">
                    <a href="#hero">Home</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-expanded="false"
                    >
                      Hotel
                    </a>
                    <ul className="dropdown-menu">
                    {hotels && hotels.slice(0, 7).map((hotel, index) => (<li key={index}>
                        <a className="dropdown-item" href="#">
                          {hotel.name} 
                        </a>
                      </li>))}
                      
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Search 
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-expanded="false"
                    >
                      Chardham
                    </a>
                    <ul className="dropdown-menu">
                    {hotels && hotels.slice(0, 7).map((hotel, index) => (<li key={index}>
                        <a className="dropdown-item" href="#">
                          {hotel.name} 
                        </a>
                      </li>))}
                     
                   
                   
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-expanded="false"
                    >
                      Heli Service
                    </a>
                    <ul className="dropdown-menu">
                    {hotels && hotels.slice(0, 7).map((hotel, index) => (<li key={index}>
                        <a className="dropdown-item" href="#">
                          {hotel.name} 
                        </a>
                      </li>))}
                     
                   
                   
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-expanded="false"
                    >
                      Adventure Sports
                    </a>
                    <ul className="dropdown-menu">
                    {hotels && hotels.slice(0, 7).map((hotel, index) => (<li key={index}>
                        <a className="dropdown-item" href="#">
                          {hotel.name} 
                        </a>
                      </li>))}
                     
                   
                   
                    </ul>
                  </li>
                
                
                  <li>
                  <a className="btn-book-a-table" href="#book">
                    BOOK NOW
                  </a>
                  </li>
                </ul>
              </nav>
              
              {/* <button
                className="navbar-toggler custom-toggler"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDarkNavbar"
                aria-controls="offcanvasDarkNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button> */}
              <div
                className="offcanvas offcanvas-end text-bg-dark"
                tabIndex="-1"
                id="offcanvasDarkNavbar"
                aria-labelledby="offcanvasDarkNavbarLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                    Chardham Stays
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Adventure Sports
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Hotels
                      </a>
                      <ul className="dropdown-menu dropdown-menu-dark">
                      {hotels && hotels.slice(0, 7).map((hotel, index)=>(<li key={index}>
                          <a className="dropdown-item" href="#">
                            {hotel.name}
                          </a>
                        </li>))}
                        {/* <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Contact
                          </a>
                        </li> */}
                      </ul>
                    </li>
                  </ul>
                  <form className="d-flex mt-3" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
