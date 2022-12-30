import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styled from "styled-components";
import { sliderItems } from "../utils/data";
import enchanted from "../assets/music/Enchanted.mp3";

const Arrow = styled.div`
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
`;

const Wrapper = styled.div`
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  background-color: #${(props) => props.bg};
`;

const Title = styled.div``;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 41);
    else setSlideIndex(slideIndex < 41 ? slideIndex + 1 : 0);
  };

  return (
    <>
      <audio id="1" autoPlay loop src={enchanted} />
      <Title className="py-2.5 text-lg uppercase">mini gallery</Title>
      <div className="w-full flex relative overflow-hidden">
        {slideIndex === 0 ? (
          <Arrow direction="left" onClick={() => handleClick("left")} className="hidden">
            <ArrowLeftIcon />
          </Arrow>
        ) : (
          <Arrow
            direction="left"
            onClick={() => handleClick("left")}
            className="w-12 h-12 bg-[#fff7f7] rounded-full flex items-center justify-center absolute top-[-50px] bottom-16 m-auto cursor-pointer opacity-50 z-[2] border-2 border-gray-500"
          >
            <ArrowLeftIcon sx={{ fontSize: 50 }} />
          </Arrow>
        )}

        <Wrapper slideIndex={slideIndex} className="flex transition duration-[1500ms] ease">
          {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id} className="w-screen flex flex-col items-center py-8">
              <div className="max-h-[35rem]">
                <img src={item.img} alt={item.name} className="rounded-full h-5/6" />
              </div>
              <div className="mt-[-50px] px-1.5">
                <h1 className="sm:text-5xl text-4xl">{item.title}</h1>
                <p className="text-lg tracking-[3px] mt-1.5">{item.desc}</p>
              </div>
            </Slide>
          ))}
        </Wrapper>

        {slideIndex === 41 ? (
          <Arrow direction="right" onClick={() => handleClick("right")} className="hidden">
            <ArrowRightIcon />
          </Arrow>
        ) : (
          <Arrow
            direction="right"
            onClick={() => handleClick("right")}
            className="w-12 h-12 bg-[#fff7f7] rounded-full flex items-center justify-center absolute top-[-50px] bottom-16 m-auto cursor-pointer opacity-50 z-[2] border-2 border-gray-500"
          >
            <ArrowRightIcon sx={{ fontSize: 50 }} />
          </Arrow>
        )}
      </div>
    </>
  );
};

export default Slider;
