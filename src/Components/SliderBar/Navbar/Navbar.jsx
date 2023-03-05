import Wrapper from "../../../HOC/Wrapper";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="navbar">
        <span className="logo">
          <i className="bx bxs-message-square-dots"></i>
        </span>
        <span className="user">
          <img
            src={`https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`}
            className="avatar"
          />
          John Doe
        </span>
        <button className="btn-logout">
          <i className="bx bx-log-out"></i>
        </button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
