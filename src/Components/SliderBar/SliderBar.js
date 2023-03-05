import React from "react";
import Wrapper from "../../HOC/Wrapper";
import Navbar from "./Navbar/Navbar";
import "./SliderBar.scss";
import Search from "./Search/Search";
import User from "./Users/User";
function SliderBar() {
  const users = [
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_massage: "See You Later",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_massage: "Good Night",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
    },
    {
      id: 11,
      email: "george.edwards@reqres.in",
      first_name: "George",
      last_massage: "Hello How Are You??",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
      id: 12,
      email: "rachel.howell@reqres.in",
      first_name: "Rachel",
      last_massage: "Fuck You",
      avatar: "https://reqres.in/img/faces/12-image.jpg",
    },
  ];

  return (
    <Wrapper>
      <div className="slider">
        <Navbar />
        <Search />
        {users.map((user) => {
          return <User key={user.id} avatar={user.avatar} LMassage={user.last_massage} name={user.first_name} />;
        })}
      </div>
    </Wrapper>
  );
}

export default SliderBar;
