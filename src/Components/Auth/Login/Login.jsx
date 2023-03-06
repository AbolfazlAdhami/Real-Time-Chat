import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../../../HOC/Wrapper";
import "./Login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      console.log(err.errors);
    }
  };

  return (
    <Wrapper>
      <div className="login">
        <div className="form">
          <h1 className="title">Login Form</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="text" className="input" id="email" autoComplete="off" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" autoComplete="off" />
            <button type="submit" className="btn-submit">
              Login
            </button>
          </form>
          <h3>
            If you already have any active account, <Link to="/singin">Singin</Link>
          </h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
