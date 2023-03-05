import Wrapper from "../../../HOC/Wrapper";
import "./Login.scss";
const Login = () => {
  return (
    <Wrapper>
      <div className="login">
        <div className="form">
          <h1 className="title">Login Form</h1>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" className="input" id="email" autoComplete="off" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" autoComplete="off" />
            <button type="submit" className="btn-submit">
              Login
            </button>
          </form>
          <h3>
            If you already have any active account, <a>Singin</a>
          </h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
