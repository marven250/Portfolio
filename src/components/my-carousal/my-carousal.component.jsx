import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Pic1 from "../../assets/img/carousal/ComputerB.png";
import Pic2 from "../../assets/img/carousal/ComputerA.png";
import Pic3 from "../../assets/img/carousal/Notes.png";
import ScrollDown from "../scroll-down/scroll-down.component";
import "./my-carousal.styles.css";

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel
        controls={false}
        indicators
        interval={2500}
        pauseOnHover={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Pic1}
            alt="First pic"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Pic2}
            alt="Second pic"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Pic3}
            alt="Third pic"
          />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousal;
