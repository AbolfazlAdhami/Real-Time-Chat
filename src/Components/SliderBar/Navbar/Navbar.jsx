import { signOut } from "firebase/auth";
import Wrapper from "../../../HOC/Wrapper";
import { auth } from "../../../firebase";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";

import Useravatar from "../../../Asset/Image/avatar.png";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Wrapper>
      <div className="navbar">
        <span className="logo">
          <i className="bx bxs-message-square-dots"></i>
        </span>
        <span className="user">
          <img src={Useravatar} className="avatar" />
          {currentUser.displayName}
        </span>
        <button className="btn-logout" onClick={() => signOut(auth)}>
          <i className="bx bx-log-out"></i>
        </button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
