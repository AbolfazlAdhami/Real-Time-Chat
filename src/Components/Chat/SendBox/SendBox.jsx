import React from "react";
import attach from "../../../Asset/Image/attach.png";
import image from "../../../Asset/Image/img.png";
function SendBox() {
  return (
    <div className="send-box">
      <input type="text" placeholder="Type Somthing..." className="text-box" />
      <div className="btn-box">
        <input type="file" style={{ display: "none" }} />
        <img src={attach} alt="" />
        <img src={image} alt="" />
      </div>
      <button className="send">Send</button>
    </div>
  );
}

export default SendBox;
