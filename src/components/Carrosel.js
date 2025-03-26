import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";






function Carrosel() {
  return (
    <div style={{ marginTop: "50px", padding: "20px" }}>
      <h1 style={{ textAlign: "center" , marginBottom: "20px"}}>Trending International Destinations</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        grabCursor={true}
        effect="coverflow"
        centeredSlides={true}
        loop={true}
        slidesPerView={3} // Default for larger screens
        breakpoints={{
          // Adjust slidesPerView based on screen width
          320: { slidesPerView: 1 }, // Mobile
          768: { slidesPerView: 2 }, // Tablet
          1024: { slidesPerView: 3 }, // Desktop
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        <SwiperSlide>
          <img src="https://www.tripsavvy.com/thmb/TJVEBdD9PS6YHyuV0fbUE0-qJmQ=/2122x1412/filters:fill(auto,1)/GettyImages-155139968-5c07dbf046e0fb0001cb5b22.jpg" alt="slide_image"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "15px", // Rounded corners
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow
                transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effect
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)"; // Slight zoom on hover
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)"; // Enhanced shadow on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"; // Reset zoom
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"; // Reset shadow
              }} 
              />
                <div
      style={{
        position: "absolute",
        top: "50%", // Center vertically
        left: "50%", // Center horizontally
        transform: "translate(-50%, -50%)", // Adjust for centering
        color: "white", // Text color
        fontSize: "1.5rem", // Text size
        fontWeight: "bold", // Bold text
        textShadow: "0 2px 4px rgb(0, 0, 0)", // Add shadow to text for better visibility
        textAlign: "center", // Center align text
      }}
    >
      Maldives
    </div>
        </SwiperSlide>



        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2019/04/03/21/20/people-4101443_960_720.jpg" alt="slide_image" 
             style={{
              width: "100%",
              height: "auto",
              borderRadius: "15px", // Rounded corners
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow
              transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effect
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)"; // Slight zoom on hover
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)"; // Enhanced shadow on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)"; // Reset zoom
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"; // Reset shadow
            }} 
          />
            <div
      style={{
        position: "absolute",
        top: "50%", // Center vertically
        left: "50%", // Center horizontally
        transform: "translate(-50%, -50%)", // Adjust for centering
        color: "white", // Text color
        fontSize: "1.5rem", // Text size
        fontWeight: "bold", // Bold text
        textShadow: "0 2px 4px rgb(0, 0, 0)", // Add shadow to text for better visibility
        textAlign: "center", // Center align text
      }}
    >
      Europe
    </div>
        </SwiperSlide>



        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2020/02/20/13/17/elephants-4864736_1280.jpg" alt="slide_image"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "15px", // Rounded corners
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effect
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)"; // Slight zoom on hover
            e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)"; // Enhanced shadow on hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"; // Reset zoom
            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"; // Reset shadow
          }} 
          />
           <div
      style={{
        position: "absolute",
        top: "50%", // Center vertically
        left: "50%", // Center horizontally
        transform: "translate(-50%, -50%)", // Adjust for centering
        color: "white", // Text color
        fontSize: "1.5rem", // Text size
        fontWeight: "bold", // Bold text
        textShadow: "0 2px 4px rgb(0, 0, 0)", // Add shadow to text for better visibility
        textAlign: "center", // Center align text
      }}
    >
     Sri Lanka
    </div>
        </SwiperSlide>



        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1502640403806-cf2ac7a5d37a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="slide_image"
           style={{
            width: "100%",
            height: "auto",
            borderRadius: "15px", // Rounded corners
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effect
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)"; // Slight zoom on hover
            e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)"; // Enhanced shadow on hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"; // Reset zoom
            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"; // Reset shadow
          }} 
          />
           <div
      style={{
        position: "absolute",
        top: "50%", // Center vertically
        left: "50%", // Center horizontally
        transform: "translate(-50%, -50%)", // Adjust for centering
        color: "white", // Text color
        fontSize: "1.5rem", // Text size
        fontWeight: "bold", // Bold text
        textShadow: "0 2px 4px rgb(0, 0, 0)", // Add shadow to text for better visibility
        textAlign: "center", // Center align text
      }}
    >
     Egypt
    </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carrosel;