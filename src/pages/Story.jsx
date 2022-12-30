import React from "react";
import Slider from "../component/Slider";
import Footer from "../component/Footer";
import styled from "styled-components";

const CenterContainer = styled.div`
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <div className="sm:block hidden text-center">Please use narrow device</div>
      <CenterContainer className="sm:hidden block">
        <Slider />
        <Footer />
      </CenterContainer>
    </>
  );
};

export default Home;
