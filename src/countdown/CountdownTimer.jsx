import React from "react";
import styled from "styled-components";
import ShowCounter from "./ShowCounter";
import { useCountdown } from "./useCountdown";
import Message from "../component/Message";
import Story from "../pages/Story";
import newyeareve from "../assets/img/new-year.png";
import { NavLink } from "react-router-dom";

const Title = styled.h1`
  font-family: "Lobster Two", cursive;
  font-weight: 700;
  font-size: 2rem;
  padding: 10px 0;
`;

const HappyImage = styled.img``;

const CenterContainer = styled.div`
  text-align: center;
`;

const ExpiredNotice = () => {
  return (
    <div className="text-[red]">
      <p>Sorry Message Expired :{"(("} </p>
      <img src="https://c.tenor.com/8RftKRe9hOEAAAAC/milk-mocha.gif" alt="mocha" />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return (
      <>
        <div className="sm:block hidden text-center">Please use narrow device</div>
        <CenterContainer className="sm:hidden block">
          <Title>Happy New Year</Title>
          <HappyImage src={newyeareve} alt="new-year-eve" />
          <Message />
          <img src="https://c.tenor.com/Po9tsBe237IAAAAC/tenor.gif" alt="milk mocha" />
          <NavLink to="/story">
            <h1 className="my-10 text-4xl underline">Open Me</h1>
          </NavLink>
        </CenterContainer>
      </>
    );
  } else {
    return (
      <>
        <div className="sm:block hidden text-center">Please use narrow device</div>
        <CenterContainer className="sm:hidden block">
          <Title>New Year Countdown</Title>
          <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />
          <p className="text-[2rem]">Come back later okay</p>
          <img src="https://c.tenor.com/Po9tsBe237IAAAAC/tenor.gif" alt="milk mocha" />
        </CenterContainer>
      </>
    );
  }
};

export default CountdownTimer;
