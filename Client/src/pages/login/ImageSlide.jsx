import React from "react";
// import Carousel from "react-material-ui-carousel";
import Image1 from "../../../public/assets/Image1.jpg";
import Image2 from "../../../public/assets/Image2.jpg";
import ImgaeItem from "./ImgaeItem.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { height, width } from "@mui/system";

const ImageSlide = () => {
  const Items = [
    {
      name: "Random Name #1",
      path: Image1,
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      path: Image2,
      description: "Hello World!",
    },
  ];
  return (
    <>
      <Carousel sx={{ width: "100%", height: "100%" }}>
        {Items.map((item, i) => (
          <ImgaeItem item={item} id={i} key={i} />
        ))}
      </Carousel>
    </>
  );
};

export default ImageSlide;
