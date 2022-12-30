import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import styled from "styled-components";

const ShowsCounter = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  // background-color: #fff;
  text-transform: uppercase;
  // font-size: 0.75rem;
  line-height: 1rem;
`;

const CountdownLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 4.25rem;
  border: 2px solid #2C234E;
  border-radius: 0.25rem;
  text-decoration: none;
  color: #2C234E;
`;

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div>
      <ShowsCounter>
        <CountdownLink>
          <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
          <p>:</p>
          <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={seconds <= 60} />
        </CountdownLink>
      </ShowsCounter>
    </div>
  );
};

export default ShowCounter;
