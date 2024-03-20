import  { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import GalleryCard from "./GalleryCard";
const galleryData = [
  { top: "CHARDHAM STAYS", middle: "NEAR SHANTIKUNJ BHUPATWALA", bottom: "" ,img:"assets/img/gallery/gallery-1.jpg"},
  { top: "CHARDHAM STAYS", middle: "IN MUSSOORIE", bottom: "" ,img:"assets/img/gallery/gallery-2.jpg"},
  { top: "CHARDHAM STAYS", middle: "NEAR RISHIKESH RAM JHULA", bottom: "" ,img:"assets/img/gallery/gallery-3.jpeg"},
];

export default function Gallery() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>


        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >{galleryData.map((card,index)=>(<SwiperSlide key={index}>
          <GalleryCard data={card}/>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </SwiperSlide>))}
          

          
        </Swiper>
        


    </>
  );
}
