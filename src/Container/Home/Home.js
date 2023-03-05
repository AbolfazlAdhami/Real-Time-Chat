import React from "react";
import "./Home.scss";
import Wrapper from "../../HOC/Wrapper";
import SliderBar from "../../Components/SliderBar/SliderBar";
import Chat from "../../Components/Chat/Chat";
function Home() {
  return (
    <Wrapper>
      <div className="home">
        <div className="container">
          <SliderBar />
          <Chat />
        </div>
      </div>
    </Wrapper>
  );
}

export default Home;
