import React from "react";
import Wrapper from "../../../HOC/Wrapper";
import Message from "./Message";

function Messages() {
  return (
    <Wrapper>
      <div className="messages">
        {Array(10)
          .fill("Hello React")
          .map((m, index) => {
            return <Message key={index} message={m} avatar={`https://reqres.in/img/faces/8-image.jpg`} />;
          })}
      </div>
    </Wrapper>
  );
}

export default Messages;
