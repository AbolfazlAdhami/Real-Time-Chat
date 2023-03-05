import React from "react";
import "./singin.scss";
import Wrapper from "../../../HOC/Wrapper";
import  avatar  from "../../../Asset/Image/addAvatar.png";
const Singin = () => {
  return (
    <Wrapper>
      <div className="singin">
        <div className="form">
          <h1 className="title">Singin Form</h1>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" className="input" id="email" autoComplete="off" />
            <label htmlFor="username">UserName</label>
            <input type="email" id="username" className="input" autoComplete="off" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" autoComplete="off" />
            <input type="file" />
            <label htmlFor="file" className="file">
              <img src={avatar} alt=""  className="avatar"/> Add Avatar 
            </label>
            <button type="submit" className="btn-submit">
              Sing Up
            </button>
          </form>
          <h3>
            If you already have an active account,  <a>log in</a>
          </h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default Singin;
