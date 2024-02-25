import React, { useEffect, useState } from "react";
import { ReactPhotoCollage } from "react-photo-collage";



const Parrallex = ({service}) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
console.log(service)
  useEffect(() => {
    // Function to update the windowSize state when the window is resized
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Attach the event listener to the window
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run the effect once on component mount
const height1=windowSize.width<450?"150px":"250px";
const height2=windowSize.width<450?"150px":"250px";
const height3=windowSize.width<450?"150px":"250px";
  const setting1 = {
    width: windowSize.width<450?"100%":"660px",
    height: [height1],
    layout: [1], // Update the layout to match the description
    photos: [
      {
        source: "/assets/img/about/about-1.jpg"
      }
    ],
    showNumOfRemainingPhotos: true
  };
  const setting2 = {
    width: windowSize.width<450?"100%":"330px",
    height: [height2],
    layout: [1], // Update the layout to match the description
    photos: [
      
      {
        source:
        "/assets/img/about/about-2.jpeg"
      },
      
    ],
    showNumOfRemainingPhotos: true
  };
  const setting3 = {
    width:windowSize.width<450?"100%": "330px",
    height: ["125px","125px"],
    layout: [2,2], // Update the layout to match the description
    photos: [
      {
        source:
        "/assets/img/about/about-3.jpg"
      },
      {
        source:
        "/assets/img/about/about-4.jpg"    },
      {
        source:
        "/assets/img/about/about-5.jpg"    },
      {
        source:
        "/assets/img/about/about-6.jpg"    },
     
    ],
    showNumOfRemainingPhotos: true
  };
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        {service =='about'?<div className="row gy-4">
          <div
            className="col-lg-5 d-flex align-items-end"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="content ps-0 ps-lg-5 ">
              <h1>About Us</h1>
              <p>
                ChardhamStay Hotels is a renowned name in the hotel industry,
                offering laudable services and opulent accommodation to guests.
                Chardhamstay Hotels managed by Chardhamstay HOTELS (I) PVT. LTD
                has eight properties in Manali, Jim Corbett , Nanital, Thane,
                Mussoorie, Haridwar, Rishikesh, and Jaipur. It is the
                quintessential hotel for the ones who are searching for a
                budget-friendly hotel that incorporates well-appointed rooms,
                appetizing gourmet experiences, elaborate event spaces,
                advantageous offers, intriguing services and amenities. Book
                your stay at our luxury hotels in Manali, Jim Corbett , Nanital,
                Thane, Mussoorie, Haridwar, Rishikesh, and Jaipur and enjoy your
                grand holiday at Chardhamstay Hotels.
              </p>
            </div>
          </div>
          <div
            className="col-lg-7 position-relative "
            data-aos="fade-up"
            data-aos-delay="150"
          >
<div className="row about-collage">
<><ReactPhotoCollage {...setting1} />
    <ReactPhotoCollage {...setting2} />
    <ReactPhotoCollage {...setting3} /></>
</div>


          </div>
        </div>
        :<div className="mission-vision-container">
        <h2>Our Mission & Vision</h2>
        <div className="mission-vision-content">
          <div className="mission">
            <img src="/assets/img/about/about-6.jpg" alt="Mission" />
            <h3>OUR MISSION</h3>
            <p>Our mission is to be a prominent brand in the hospitality circle in India that fulfills every imperative necessities of the guests, employees and investors by bringing rapid growth and creating goodwill.</p>
            <button className="btn">JOIN EVENT</button>
            <button className="btn">SEE DETAILS</button>
          </div>
          <div className="vision">
            <img src="/assets/img/about/about-6.jpg" alt="Vision" />
            <h3>OUR VISION</h3>
            <p>Our vision is to be the first choice for the guests who look for hotels that subsume all the necessary requirements that are available in the right place at the appropriate time.</p>
            <button className="btn">JOIN EVENT</button>
            <button className="btn">SEE DETAILS</button>
          </div>
        </div>
      </div>
        }
        
      </div>
    </section>
  );
};

export default Parrallex;
